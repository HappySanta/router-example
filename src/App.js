import '@vkontakte/vkui/dist/vkui.css';
import React from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import Home from './panels/Home';
import Persik from './panels/Persik';
import { PANEL_MAIN, PANEL_PERSIK, VIEW_MAIN } from './routers';
import {useRouter} from "@happysanta/router"

const App = () => {
  const router = useRouter();

  return <View id={VIEW_MAIN} history={router.getViewHistory(VIEW_MAIN)} activePanel={router.getPanelId()}>
      <Home id={PANEL_MAIN}/>
      <Persik id={PANEL_PERSIK}/>
  </View>
};

export default App;

