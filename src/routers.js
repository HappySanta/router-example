import { Page, Router } from '@happysanta/router';

export const PAGE_MAIN = '/';
export const PAGE_PERSIK = '/persik';
export const PAGE_ABOUT = '/about';
export const PAGE_INFO = '/info';
export const PAGE_PRODUCT = '/product/:id([0-9]+)';

export const PANEL_MAIN = 'panel_main';
export const PANEL_PERSIK = 'panel_persik';
export const PANEL_ABOUT = 'panel_about';
export const PANEL_INFO = 'panel_info';
export const PANEL_PRODUCT = 'panel_product';

export const VIEW_MAIN = 'view_main';
export const VIEW_INFO = 'view_info';

export const MODAL_CARD = 'modal_card';
export const MODAL_PAGE = 'modal_page';

export const POPOUT_CONFIRM = 'popout_confirm';

const routes = {
	[PAGE_MAIN]: new Page(PANEL_MAIN, VIEW_MAIN),
	[PAGE_PERSIK]: new Page(PANEL_PERSIK, VIEW_MAIN),
	[PAGE_ABOUT]: new Page(PANEL_ABOUT, VIEW_MAIN),
	[PAGE_PRODUCT]: new Page(PANEL_PRODUCT, VIEW_MAIN),
	[PAGE_INFO]: new Page(PANEL_INFO, VIEW_INFO),
};

export const router = new Router(routes);

router.onEnterPage(PAGE_MAIN, () => {
	console.log('переход на главную страницу');
});

router.onLeavePage(PAGE_PERSIK, (nextRoute) => {
	console.log('выход со станицы с персиком ', nextRoute.getPageId());
});

router.onEnterPage(PAGE_PRODUCT, (route) => {
	const { id } = route.getParams();
	console.log('Переход на страницу товара', id);
});

router.on('update', (nextRote, oldRoute) => {
	if (oldRoute) {
		console.log(`move from page ${oldRoute.getLocation()} -> ${nextRote.getLocation()}`);
	} else {
		console.log(`enter to page ${nextRote.getLocation()}`);
	}
});

router.start();
