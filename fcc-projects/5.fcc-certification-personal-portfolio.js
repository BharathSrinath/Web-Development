const imageScale = document.querySelectorAll('.project-tile');
for (let element of imageScale) {
    element.addEventListener('mouseover', function () {
        element.classList.add('after-transform')
    })
}