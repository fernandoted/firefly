

$(".heart.fa").click(function() {
	$(this).toggleClass("fa-heart fa-heart-o");
});

// validar tamanho de tela
function screenSize() {
	var size = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	return size < 768;
}

/*function toplistTab(listName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].style.display = "block";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(listName).style.display = "block";
    elmnt.style.backgroundColor = color;
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();*/

function toplistTab(listName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    if ( screenSize() ) {
    tabcontent[i].style.display = "none";
    } else {
    tabcontent[i].style.display = "block";
    }
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].style.display = "block";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(listName).style.display = "block";
    elmnt.style.backgroundColor = color;
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();