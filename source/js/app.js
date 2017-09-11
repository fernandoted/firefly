


$(".heart.fa").click(function() {
    $(this).toggleClass("fa-heart fa-heart-o");
});

// validar tamanho de tela
function screenSize() {
    var size = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return size < 768;
}

// Esconde todas as tabs menos a primeira no mobile
function hideAllTabsOnMobile( ) {

    tabcontent = document.getElementsByClassName("tabcontent");

    if ( screenSize() ) {
        for (var i = 1; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
    }
}

// Mostra todas as abas quando muda para resolução maior que mobile
function showAlltabs( ) {
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "block";
    }
}

//Mostra a tab clicada
function toplistTab( listName,elmnt,color) {

    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");

    //Esconde todas as tabs para mostrar a clicada
    for (var i = 0; i < tabcontent.length; i++) {   
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    
    //Mostra a tab clicada
    document.getElementById(listName).style.display = "block";

    elmnt.style.backgroundColor = color;
}

/**
 * Utlizado no lugar do onload, para executar algo após a página estiver carregada
 */
$( document ).ready(function() {

    // Primeiro esconde todas as tabs menos a primeira se for mobile, e mantém normal se for desk
    hideAllTabsOnMobile();
    
    if( screenSize() ) {
        document.getElementById("defaultOpen").click();
    }

    window.onresize = function( event ) {
        if( screenSize() ) {
            hideAllTabsOnMobile();
            document.getElementById("defaultOpen").click();
        }
        else {
            showAlltabs();
        }
    };
});
