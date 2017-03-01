chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var p = document.querySelector('img.game_header_image_full').getAttribute('src');
  sendResponse({imageUri: p});
});