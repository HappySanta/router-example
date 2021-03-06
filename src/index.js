import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import App from './App';
import { RouterContext } from '@happysanta/router';
import { router } from './routers';
import { ConfigProvider } from '@vkontakte/vkui';
// Init VK  Mini App
bridge.send('VKWebAppInit');


ReactDOM.render(<RouterContext.Provider value={router}>
	<ConfigProvider isWebView={true}>
		<App/>
	</ConfigProvider>
</RouterContext.Provider>, document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
	import('./eruda').then(({ default: eruda }) => {}); //runtime download
}
