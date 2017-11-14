chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var p = document.querySelector("#pdpHeaderInfo picture > img").getAttribute('src');
  var urlArray = p.split('?');
  if (urlArray[1] && urlArray[1].indexOf("url") == 0){
    p = p.split('&')[0];
  }else{
    p = urlArray[0];
  }
  if (p.indexOf("//") == 0){
    p = "https:"+p;
  }
  sendResponse({imageUri: p});
});