import '@vkontakte/vkui/dist/vkui.css';
import React from 'react';
import { ModalRoot, Root, View } from '@vkontakte/vkui';
import Home from './panels/Home';
import Persik from './panels/Persik';
import { MODAL_CARD, MODAL_PAGE, PANEL_ABOUT, PANEL_INFO, PANEL_MAIN, PANEL_PERSIK, PANEL_PRODUCT, POPOUT_CONFIRM, VIEW_INFO, VIEW_MAIN } from './routers';
import About from './panels/About';

import Info from './panels/Info';
import { Card } from './modals/Card';
import { Page } from './modals/Page';
import { Confirm } from './popouts/Confirm';
import Product from './panels/Product';
import { useLocation, useRouter } from '@happysanta/router';

function App() {

	const location = useLocation();
	const router = useRouter();

	const modal = <ModalRoot activeModal={location.getModalId()}
							 onClose={() => router.popPage()}>
		<Card id={MODAL_CARD} onClose={() => router.popPage()}/>
		<Page id={MODAL_PAGE} onClose={() => router.popPage()}/>
	</ModalRoot>;

	const popout = (() => {
		if (location.getPopupId() === POPOUT_CONFIRM) {
			return <Confirm/>;
		}
	})();

	return <Root activeView={location.getViewId()}>
		<View id={VIEW_MAIN}
			  popout={popout}
			  modal={modal}
			  onSwipeBack={() => router.popPage()}
			  history={location.hasOverlay() ? [] : location.getViewHistory(VIEW_MAIN)}
			  activePanel={location.getViewActivePanel(VIEW_MAIN)}>
			<Home id={PANEL_MAIN}/>
			<Persik id={PANEL_PERSIK}/>
			<About id={PANEL_ABOUT}/>
			<Product id={PANEL_PRODUCT}/>
		</View>

		<View id={VIEW_INFO}
			  modal={modal}
			  popout={popout}
			  onSwipeBack={() => router.popPage()}
			  history={location.hasOverlay() ? [] : location.getViewHistory(VIEW_INFO)}
			  activePanel={location.getViewActivePanel(VIEW_INFO)}>
			<Info id={PANEL_INFO}/>
		</View>
	</Root>;

}

export default App;


