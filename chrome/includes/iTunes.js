$(function(){
		var p = $("#left-stack img.artwork").attr("src");
		p = p.replace(/175/g, "512");
		p = p.replace(/170/g, "600");
		chrome.extension.sendMessage({ imageLink: p}, function(response) {});
});