web.init();
web.open('${baseUrl}');
web.type('id=searchBar', 'Agile Testing');
web.waitForExist('li.ui-screen-hidden');