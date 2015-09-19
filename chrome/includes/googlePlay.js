chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var p = $('.cover-container img').attr('src');
  if (p) {
    p = p.replace(/=w300-rw/g, '');
    sendResponse({imageUri: p});
  }
});