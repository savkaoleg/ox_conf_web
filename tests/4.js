web.init();
web.open('https://automationbookstore.dev/');
web.type('id=searchBar', 'Agile Testing');
web.waitForExist('li.ui-screen-hidden');