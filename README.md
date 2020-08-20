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
import {useRouter} from "@happysanta/router"

const App = () => {
  const router = useRouter();

  return <View id={VIEW_MAIN} history={router.getViewHistory(VIEW_MAIN)} activePanel={router.getPanelId()}>
      <Home id={PANEL_MAIN}/>
      <Persik id={PANEL_PERSIK}/>
  </View>
};

export default App;
```


### Для перехода на страницу пользоваться функциями из роутреа

`src/panels/Home.js`
```js
router.pushPage(PAGE_PERSIK)
```

```js
router.popPage()
```
