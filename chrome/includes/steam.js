chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var p = $('img.game_header_image_full').attr('src');
  sendResponse({imageUri: p});
});