let tital = document.querySelector(".tital");
let reload = document.querySelector(".reload");
let ul=document.querySelector('ul')


window.onload = function () {
    if (window.navigator.onLine) {
        onLine()
    } else {
        offline()
    }
}
window.addEventListener('online', function () {
    onLine()
})
window.addEventListener('offline', function () {
    offline()
})

reload.onclick = function () {
    window.location.reload()
}


function onLine() {
    tital.innerHTML = "Online Now";
    tital.style.color = "green";
   ul.classList.add("hide");
   reload.classList.add("hide");
}
function offline() {
    tital.innerHTML = "Offline Now";
    tital.style.color = "#666";
    ul.classList.remove('hide')
    reload.classList.remove('hide')
}

console.log('adflj')
