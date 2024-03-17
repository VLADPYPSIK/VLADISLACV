const url = '<iframe width="560" height="315" src="https://www.youtube.com/embed/z02NyoaDNIw?si=5IrFZOVnywImFpof" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
const button = document.getElementsByTagName('button')[0];
console.log(button)
button.addEventListener('click', () => {
    location.href = url
})