web.init();
web.open('${testparam}');
web.type('id=searchBar', 'Agile Testing');
web.waitForExist('li.ui-screen-hidden');