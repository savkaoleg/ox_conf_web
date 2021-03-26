web.init();
const page = po.searchPage;

log.info('po.page.url');
web.open(page.url);
web.type('id=searchBar', 'Agile Testing');
web.waitForExist('li.ui-screen-hidden');