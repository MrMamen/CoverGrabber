chrome.extension.onMessage.addListener(function(request, sender, sendResponse){    
	chrome.pageAction.show(sender.tab.id);
	chrome.pageAction.onClicked.addListener(function(tab) {
		if (localStorage["target"] == "newTab"){
			chrome.tabs.create({"url": request.imageLink});
		}else{
			chrome.tabs.update({"url": request.imageLink});
		}
	});
});