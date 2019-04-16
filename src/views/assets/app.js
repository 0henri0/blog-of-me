var homeContentRightPosterImage = document.getElementById('poster')

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

// setTimeout(() => {
//     fade(homeContentRightPosterImage)
// }, 3000)

console.log(document.getElementById('poster'));