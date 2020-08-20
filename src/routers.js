import { Page, Router } from '@happysanta/router';

export const PAGE_MAIN = '/';
export const PAGE_PERSIK = '/persik';

export const PANEL_MAIN = 'panel_main';
export const PANEL_PERSIK = 'panel_persik';

export const VIEW_MAIN = 'view_main';

const routes = {
  [PAGE_MAIN]: new Page(PANEL_MAIN, VIEW_MAIN),
  [PAGE_PERSIK]: new Page(PANEL_PERSIK, VIEW_MAIN),
};

export const router = new Router(routes);

router.start();