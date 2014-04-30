$(function(){
	var p = $('img.game_header_image').attr('src');
	p = p.replace(/_292x136/g, '').split('?')[0];
	chrome.extension.sendMessage({ imageLink: p});
});
