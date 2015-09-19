chrome.runtime.onInstalled.addListener(function () {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'play.google.com'}
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'itunes.apple.com'}
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'store.steampowered.com'}
          })
        ],
        // And shows the extension's page action.
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
    chrome.pageAction.onClicked.addListener(function (tab) {
        chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
          if (localStorage["target"] == "newTab") {
            chrome.tabs.create({"url": response.imageUri});
          } else {
            chrome.tabs.update({"url": response.imageUri});
          }
        });
    });
  });
});