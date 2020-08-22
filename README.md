# Демо проект с @happysanta/router

live demo [vk.com/app7574523](https://vk.com/app7574523)

[Описание роутов src/router.js](src/routers.js)
```js
const routes = {
  [PAGE_MAIN]: new Page(PANEL_MAIN, VIEW_MAIN),
  [PAGE_PERSIK]: new Page(PANEL_PERSIK, VIEW_MAIN),
};

export const router = new Router(routes);

router.start();
```

[Подключение src/index.js](src/index.js)

```js
import { RouterContext } from '@happysanta/router';
import { router } from './routers';

ReactDOM.render(<RouterContext.Provider value={router}>
  <App/>
</RouterContext.Provider>, document.getElementById('root'));
```

[useLocation src/App.hook.js](src/App.hook.js)

```js
import { useLocation } from '@happysanta/router';

const App = () => {
  const location = useLocation();

  return <View id={VIEW_MAIN}
			   history={location.getViewHistory(VIEW_MAIN)}
			   activePanel={location.getViewActivePanel(VIEW_MAIN)}>
      <Home id={PANEL_MAIN}/>
      <Persik id={PANEL_PERSIK}/>
  </View>
};

export default App;
```

[withRouter src/App.js](src/App.js)
```js
import {withRouter} from "@happysanta/router"

class App extends React.Component {
	render() {
		const {location} = this.props

		return <View id={VIEW_MAIN}
					 history={location.getViewHistory(VIEW_MAIN)}
					 activePanel={location.getViewActivePanel(VIEW_MAIN)}>
			<Home id={PANEL_MAIN}/>
			<Persik id={PANEL_PERSIK}/>
		</View>
	}
}

export default withRouter(App);
```

[pushPage src/panels/Home.js#18](src/panels/Home.js#18)

```js
router.pushPage(PAGE_PERSIK)
router.replacePage(PAGE_PERSIK)

router.popPage()
```
