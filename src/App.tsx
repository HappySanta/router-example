import React, {Component} from "react";
import {Alert, ModalRoot, Root, View} from "@vkontakte/vkui";
import {
	MODAL_PRODUCT_INFO, PANEL_CREATE_DONE, PANEL_CREATE_FORM, PANEL_CREATE_START, PANEL_MATCH,
	PANEL_PRODUCT,
	PANEL_SET,
	PANEL_TEAM,
	POPOUT_ALERT, VIEW_CREATE_USER,
	VIEW_OVERLOOP_PANELS
} from "./routes";
import {
	getInfinityPanelId,
	getPanelIdInView,
	getViewHistory,
	getViewHistoryWithLastPanel, isInfinityPanel,
	PANEL_MAIN,
	popPage,
	VIEW_MAIN, withSantaRouter, SantaRouterProps
} from "@happysanta/router";
import {
	ModalProductInfo, PanelCreateDone,
	PanelCreateForm,
	PanelCreateStart,
	PanelMain, PanelMatch,
	PanelProduct,
	PanelProductSet, PanelTeam
} from "./Panels";

import {Route} from "@happysanta/router";

class App extends Component<SantaRouterProps> {

	renderModal(route: Route) {
		return <ModalRoot activeModal={route.getModalId()}>
			<ModalProductInfo onClose={popPage} id={MODAL_PRODUCT_INFO}/>
		</ModalRoot>
	}

	renderPopout(route: Route) {
		const popoutId = route.getPopupId()
		if (popoutId === POPOUT_ALERT) {
			return <Alert
				actionsLayout="vertical"
				actions={[{
					title: 'Лишить права',
					autoclose: true,
					mode: 'destructive',
				}, {
					title: 'Отмена',
					autoclose: true,
					mode: 'cancel'
				}]}
				onClose={popPage}
			>
				<h2>Подтвердите действие</h2>
				<p>Вы уверены, что хотите лишить пользователя права на модерацию контента?</p>
			</Alert>
		}
	}

	getViewProps(viewId:string, route:Route, modal:JSX.Element, popout?:JSX.Element) {
		return {
			id: viewId,
			activePanel: getPanelIdInView(route, viewId),
			history: route.hasOverlay() ? [] : getViewHistory(route, viewId),
			modal: modal,
			popout: popout,
			onSwipeBack: popPage,
		}
	}

	render() {
		const {route} = this.props
		const modal = this.renderModal(route)
		const popout = this.renderPopout(route)

		return <Root activeView={route.getViewId()}>
			<View {...this.getViewProps(VIEW_MAIN, route, modal, popout)}>
				<PanelMain id={PANEL_MAIN}/>
				<PanelProduct id={PANEL_PRODUCT}/>
				<PanelProductSet id={PANEL_SET}/>
			</View>
			<View {...this.getViewProps(VIEW_CREATE_USER, route, modal, popout)}>
				<PanelCreateStart id={PANEL_CREATE_START}/>
				<PanelCreateForm id={PANEL_CREATE_FORM}/>
				<PanelCreateDone id={PANEL_CREATE_DONE}/>
			</View>
			<View {...this.getViewProps(VIEW_OVERLOOP_PANELS, route, modal, popout)}>
				{getViewHistoryWithLastPanel(route, VIEW_OVERLOOP_PANELS).map((panelId, index) => {
					if (isInfinityPanel(panelId)) {
						const type = getInfinityPanelId(panelId)
						if (type === PANEL_TEAM) {
							return <PanelTeam key={panelId} id={panelId}/>
						}
						if (type === PANEL_MATCH) {
							return <PanelMatch key={panelId} id={panelId}/>
						}
					}
					return null
				}).filter(x => !!x)}
			</View>
		</Root>
	}
}

export default withSantaRouter<{}>(App)
