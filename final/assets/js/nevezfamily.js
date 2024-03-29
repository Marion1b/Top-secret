let photoDataList = [
    {
        src:'assets/videos/temoignage-gael.mp4',
        alt:'témoignage de Gaël'
    },
    {
        src:'assets/videos/temoignage-marion.mp4',
        alt:'témoignage de Marion'
    },
    {
        src:'assets/videos/temoignage-my-vang.mp4',
        alt:'témoignage de My Vang'
    },
    {
        src:'assets/videos/temoignage-nafion.mp4',
        alt:'témoignage de Nafion'
    }
]

/****************************
 * FUNCTIONS
 ***************************/

function createImgItem(constName, photosBase, container){
    const constArray = []
    for(let i = 0; i<photosBase.length; i++){
        constName = document.createElement('video')
        constName.setAttribute('class', 'nevezfamily-gallery-item photo' + [i])
        constName.setAttribute('controls', 'controls')
        constName.innerHTML = '<source src ="' + photosBase[i].src + '" alt="'+ photosBase[i].alt + '" type="video/mp4">'
        constName.style.width = photosBase[i].width
        constName.style.height = photosBase[i].height
        constArray.push(constName)
    }

    for(let i of constArray){
        container.appendChild(i)
    }

    return container
}

function hidePhotos(photosContainer){
for(let i=3; i<photosContainer.length; i++){
    photosContainer[i].style.display = 'none'
}
return photosContainer
}

function carroussel(container, counter){
for(let i=2; i<container.length; i++){
    if(counter === i){
    container[i].style.display='block'
    }else{
    container[i].style.display='none'
    }
}
}

function forestOnFire(counter, element){
    if(counter === 5){
    const fire = document.createElement('div')
    fire.setAttribute('class', 'fire')
    fire.innerHTML = '<img src="https://i.gifer.com/origin/10/10923c40ede1fed1af786393dfbba7ea_w200.gif" alt="fire gif">'
    element.appendChild(fire)
    }
    return element
}

/***************************
 * MAIN PROGRAM
***************************/

document.addEventListener('DOMContentLoaded', function(){
    const galleryContainer = document.querySelector('.nevezfamily-videos')
    const gallery = document.createElement('article')
    gallery.setAttribute('class', 'nevezfamily-gallery')
    const leftButton = document.createElement('button')
    leftButton.setAttribute('class', 'nevezfamily-gallery-button nevezfamily-button-left')
    leftButton.innerHTML = '<i class="fa-solid fa-chevron-left"></i>'
    const rightButton = document.createElement('button')
    rightButton.setAttribute('class', 'nevezfamily-gallery-button nevezfamily-button-right')
    rightButton.innerHTML = '<i class="fa-solid fa-chevron-right"></i>'
    galleryContainer.appendChild(gallery)
    gallery.appendChild(leftButton)
    gallery.appendChild(rightButton)

    let count = 2


    createImgItem('galleryItem', photoDataList, gallery)

    hidePhotos(gallery.children)

    const photo3 = document.querySelector('.photo3')


    console.log(gallery)

    leftButton.addEventListener('click', function(){
    if(count>2 && count<=photoDataList.length + 1){
        count = count - 1
    }else if (count === 2){
        count = photoDataList.length + 1
    }
    carroussel(gallery.children, count)
    })

    rightButton.addEventListener('click', function(){
    if(count >= 2 && count<photoDataList.length + 1){
        count = count + 1
    }else if (count === photoDataList.length + 1){
        count = 2
    }
    carroussel(gallery.children, count)
    })
})