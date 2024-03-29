const searchInput = document.querySelector('.search');
const articles = document.querySelectorAll('.free article');
const titleList = document.querySelectorAll('.free h2');
let titles = [];
searchInput.addEventListener('input', function () {
    if(searchInput.value != ''){
        for (let i = 0; i < titleList.length; i++) {
            articles[i].classList.add('hide');
        }
        for (let i = 0; i < titleList.length; i++) {
            if(titleList[i].innerText.includes(searchInput.value)) {
                articles[i].classList.remove('hide');
            }
        }
    } else {
        for (let i = 0; i < titleList.length; i++) {
                articles[i].classList.remove('hide');
            }
    }
})