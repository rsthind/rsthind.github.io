function navclose() {
    var nav2 = document.getElementById('nav2');

    nav2.style.right = '-100%';
}

function navopen() {
    var nav2 = document.getElementById('nav2');

    nav2.style.right = '0%';
}

window.addEventListener('scroll', function () {
    var navigationBar = document.getElementById('navigation-bar');
    var offset = window.pageYOffset;

    //console.log(offset);
    if (offset > 55) {
        navigationBar.style.top = "0";
        navigationBar.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
        navigationBar.style.top = "2%";
        navigationBar.style.backgroundColor = "transparent";
    }
});