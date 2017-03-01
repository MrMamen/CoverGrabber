chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var p = document.querySelector("img.cover-image, img.image").getAttribute('src');
  if (p) {
    p = p.substring(0, p.indexOf("="));
    p = p.replace(/=w300-rw/g, '');
    if (p.indexOf("//") == 0){
      p = "https:"+p;
    }
    sendResponse({imageUri: p});
  }
});