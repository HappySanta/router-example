# @happysanta/router


### Определить роуты для Panel

`src/routers.js`

```js
const routes = {
  [PAGE_MAIN]: new Page(PANEL_MAIN, VIEW_MAIN),
  [PAGE_PERSIK]: new Page(PANEL_PERSIK, VIEW_MAIN),
};

export const router = new Router(routes);

router.start();
```

### Подключить RouterContext.Provider

`src/index.js`

```js
import { RouterContext } from '@happysanta/router';
import { router } from './routers';

ReactDOM.render(<RouterContext.Provider value={router}>
  <App/>
</RouterContext.Provider>, document.getElementById('root'));
```

### Подключить роутер в корневом компоненте

`src/App.js`

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
или без хуков, на HOC
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

### Для перехода на страницу пользоваться функциями из роутреа

`src/panels/Home.js`

```js
router.pushPage(PAGE_PERSIK)
router.replacePage(PAGE_PERSIK)

router.popPage()
```


### Решение проблемы с быстрым переключением страниц

используйте `useThrottlingLocation` или `withThrottlingRouter`

```js
import { useThrottlingLocation } from '@happysanta/router';

const App = () => {
	const [location, onTransitionEnd] = useThrottlingLocation();

	return <View id={VIEW_MAIN}
				 onTransition={() => onTransitionEnd()}
				 onSwipeBack={() => onTransitionEnd()}
				 history={location.getViewHistory(VIEW_MAIN)}
				 activePanel={location.getViewActivePanel(VIEW_MAIN)}>
		<Home id={PANEL_MAIN}/>
		<Persik id={PANEL_PERSIK}/>
		<About id={PANEL_ABOUT}/>
	</View>;
};

export default App;
```


```js
import { withThrottlingRouter } from '@happysanta/router';

class App extends React.Component {
	render() {
		const { location, onTransitionEnd } = this.props;

		return <View id={VIEW_MAIN}
					 onTransition={() => onTransitionEnd()}
					 onSwipeBack={() => onTransitionEnd()}
					 history={location.getViewHistory(VIEW_MAIN)}
					 activePanel={location.getViewActivePanel(VIEW_MAIN)}>
			<Home id={PANEL_MAIN}/>
			<Persik id={PANEL_PERSIK}/>
			<About id={PANEL_ABOUT}/>
		</View>;
	}
}

export default withThrottlingRouter(App);
```
