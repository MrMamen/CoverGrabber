chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var p = $("#left-stack").find("img.artwork").attr("src");
  p = p.replace(/175/g, "512");
  p = p.replace(/170/g, "600");
  sendResponse({imageUri: p});
});