chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var p = document.querySelector("#left-stack").querySelector("img.artwork").getAttribute("src");
  p = p.replace("175x175", "1024x1024");//Games
  p = p.replace("170x170", "1500x1500");//Albums
  p = p.replace("227x227", "2000x3000");//Movies
  sendResponse({imageUri: p});
});