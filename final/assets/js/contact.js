document.addEventListener('DOMContentLoaded', function(){
    let contactButton = document.querySelector('.js-contact-button')
    let newsButton = document.querySelector('.js-newsletter-button')
    contactButton.addEventListener('click', function(){
        alert("Votre message a bien été envoyé à Fabrice Montage, il vous répondra dans les plus brefs délais")
    })
    newsButton.addEventListener('click', function(){
        alert("Vous avez bien été inscrit pour recevoir la newsletter des nevezouzs")
    })
})