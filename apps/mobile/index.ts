// import "expo-dev-client"

if (__DEV__) {
  // Load Reactotron in development only.
  // Note that you must be using metro's `inlineRequires` for this to work.
  // If you turn it off in metro.config.js, you'll have to manually import it.
  require("./app/devtools/ReactotronConfig")
}
/* eslint-disable import/first */
import { App } from "app/App"
import { registerRootComponent } from "expo"

registerRootComponent(App)
