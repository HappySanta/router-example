import {Page, Route} from "@happysanta/router"
import {PAGE_MAIN, VIEW_MAIN} from "@happysanta/router"


export const PANEL_PRODUCT = 'panel_product';
export const PANEL_SET = 'panel_set';
export const PANEL_TEAM = 'panel_team';
export const PANEL_MATCH = 'panel_match';
export const PANEL_CREATE_START = 'PANEL_CREATE_START';
export const PANEL_CREATE_FORM = 'PANEL_CREATE_FORM';
export const PANEL_CREATE_DONE = 'PANEL_CREATE_DONE';
export const PANEL_BACK_TEST = 'PANEL_BACK_TEST';

export const PAGE_PRODUCT = '/:id([0-9]+)';
export const PAGE_SET_OF_PRODUCT = '/set/:id([0-9]+)';
export const PAGE_TEAM = '/team/:id([0-9A-z-]+)';
export const PAGE_MATCH = '/match/:id([0-9A-z-]+)';
export const PAGE_CREATE_START = "/create/start";
export const PAGE_CREATE_FORM = "/create/form";
export const PAGE_CREATE_DONE = "/create/done";
export const PAGE_BACK_TEST = "/back-test";

export const VIEW_CREATE_USER = "view_create_user";
export const VIEW_OVERLOOP_PANELS = "view_overloop_panels";

export const MODAL_PRODUCT_INFO = 'modal_product_info';

export const POPOUT_ALERT = 'popout_alert';


export const routes: { [key: string]: Page } = {
	[PAGE_MAIN]: new Page().onEnter((r:Route) => console.log('enter on main page', r) ).onLeave((r:Route) => console.log('leave from main page', r) ),
	[PAGE_PRODUCT]: new Page(PANEL_PRODUCT, VIEW_MAIN),
	[PAGE_CREATE_START]: new Page(PANEL_CREATE_START, VIEW_CREATE_USER),
	[PAGE_CREATE_FORM]: new Page(PANEL_CREATE_FORM, VIEW_CREATE_USER),
	[PAGE_CREATE_DONE]: new Page(PANEL_CREATE_DONE, VIEW_CREATE_USER),
	[PAGE_BACK_TEST]: new Page(PANEL_BACK_TEST),
	[PAGE_SET_OF_PRODUCT]: new Page(PANEL_SET),
	[PAGE_TEAM]: new Page(PANEL_TEAM, VIEW_OVERLOOP_PANELS).makeInfinity(),
	[PAGE_MATCH]: new Page(PANEL_MATCH, VIEW_OVERLOOP_PANELS).makeInfinity(),
};


