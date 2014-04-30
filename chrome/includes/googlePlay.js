$(function(){
	var p = $('.cover-container img').attr('src');
	if (p){
		p = p.replace(/=w300-rw/g, '');
		chrome.extension.sendMessage({ imageLink: p}, function(response) {});
	}
})
