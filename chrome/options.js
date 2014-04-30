var samePage = window["samePage"] = document.getElementById('samePage');
var newTab = window["newTab"] = document.getElementById('newTab');

document.addEventListener('DOMContentLoaded', restore_options);
samePage.addEventListener('click', save_options);
newTab.addEventListener('click', save_options);


function restore_options() {
	var favorite = localStorage["target"];
	if (!favorite) {
		return;
	}
	if (favorite == 'newTab') {
	  newTab.checked = true;
	} else {
	  samePage.checked = true;
	}
}

function save_options() {
	localStorage["target"] = this.value;

  // Update status to let user know options were saved.
  /*
	var status = document.getElementById("status");
	status.innerHTML = "Options Saved.";
	setTimeout(function() {
		status.innerHTML = "";
	}, 750);
	*/
}
