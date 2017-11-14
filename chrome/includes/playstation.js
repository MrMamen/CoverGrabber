chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("request received", request);
  var p = document.querySelector(".productThumbImg img").src;
    p = p.split("?")[0];
    sendResponse({imageUri: p});
});