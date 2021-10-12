const body = document.querySelector('body')
const header = document.querySelector('header')
const title = document.querySelector('.title')
const inputSection = document.querySelector('.input-section')
const navLabel = document.querySelector('.nav-label')
const footer = document.querySelector('footer')
const button = document.querySelector('.toggle-label')

//console.log(body, header, title, inputSection, navLabel, footer, button)

const callbackfunction = () => {
    body.classList.toggle('dark')
}


button.addEventListener('click', callbackfunction)