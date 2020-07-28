import React from "react"
import {routes} from "./routes"
import {getGlobalRouter, Route, RouterContext, startGlobalRouter} from "@happysanta/router"
import {ConfigProvider, WebviewType} from "@vkontakte/vkui"
import "@vkontakte/vkui/dist/vkui.css"
import ReactDOM from "react-dom";
import App from "./App";

startGlobalRouter(routes)

getGlobalRouter().on("update", (next:Route, old?:Route) => {
	console.log("new route id", next)
	if (old) {
		console.log("old route was", old)
	}
})

ReactDOM.render(<RouterContext.Provider value={getGlobalRouter()}>
	<ConfigProvider webviewType={WebviewType.VKAPPS}>
		<App/>
	</ConfigProvider>
</RouterContext.Provider>, document.getElementById("root"))

