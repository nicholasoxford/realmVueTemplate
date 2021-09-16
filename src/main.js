import { createApp, provide, h } from 'vue'
import App from './App.vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import OpenLayersMap from 'vue3-openlayers'
import * as Realm from "realm-web"
import 'vue3-openlayers/dist/vue3-openlayers.css'
const cache = new InMemoryCache()
const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})
const id = "dataviz-bzphb";
const config = {
  id,
};
const appRealm = new Realm.App(config);// Gets a valid Realm user access token to authenticate requests

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/dataviz-bzphb/graphql',
  fetch: async (uri, options) => {
    const accessToken = await getValidAccessToken();
    options.headers.Authorization = `Bearer ${accessToken}`;
    return fetch(uri, options);
  },
})

async function getValidAccessToken() {
  // Guarantee that there's a logged in user with a valid access token

  if (!appRealm.currentUser) {
    // If no user is logged in, log in an anonymous user. The logged in user will have a valid
    // access token.
    await appRealm.logIn(Realm.Credentials.anonymous());
  } else {
    // An already logged in user's access token might be stale. To guarantee that the token is
    // valid, we refresh the user's custom data which also refreshes their access token.
    await appRealm.currentUser.refreshCustomData();
  }
  return appRealm.currentUser.accessToken
}

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  })
app.use(OpenLayersMap)

app.mount('#app')
