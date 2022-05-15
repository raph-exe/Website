function shows() {
    document.getElementsByClassName('video')[0].remove();
    document.body.style.backgroundImage = "url('./background.jpg')";
    document.getElementsByTagName('ul')[0].style.display = 'flex';
    document.getElementsByTagName('ul')[0].style.visibility = 'visible';
}
