
  
function showProfile(card) {
    var url = card.getAttribute("data-link");
    var win = window.open(url, '_blank');
    win.focus();
}

