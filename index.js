const navigation = document.querySelector('.--nav')
const burgerMenu = document.querySelector('#hamburger-menu')
const button = document.querySelectorAll('.--option')
const menu = document.querySelectorAll('.--option-menu')
const open = document.querySelector('.hamburger-menu-hamburger')
const close = document.querySelector('.hamburger-menu-close')
const optionClosed = document.querySelectorAll('.dark-arrow-closed')

window.addEventListener('load', startNavDisplay)
window.addEventListener('resize', startNavDisplay)
burgerMenu.addEventListener('click', toggleNav)

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', e => {

        if (menu[i].classList.contains('inactive')) {
            menu[i].classList.remove('inactive')
            optionClosed[i].classList.add('dark-arrow-open')
        } else {
            menu[i].classList.add('inactive')
            optionClosed[i].classList.remove('dark-arrow-open')
        }
        for (let j = 0; j < menu.length; j++) {
            if (menu[j] === menu[i]) {

            } else {
                menu[j].classList.add('inactive')
                optionClosed[j].classList.remove('dark-arrow-open')
            }
        }
    })
}

// DEFAULT DISPLAY FOR (MOBILE/DESKTOP)

function startNavDisplay() {
    let query = window.matchMedia('(min-width: 376px)')
    if (query.matches) {
        navigation.classList.remove('inactive')
        optionClosed.forEach(val => {
            val.classList.remove('dark-arrow-open')
        })
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.add('inactive')
        }
    } else {
        navigation.classList.add('inactive')
        open.style.display = 'block'
        close.style.display = 'none'
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.add('inactive')
        }
        menu[2].classList.remove('inactive')
        optionClosed[2].classList.add('dark-arrow-open')
    }
}

// NAVIGATION TOGGLE (MOBILE)

function toggleNav() {
    navigation.classList.toggle('inactive')
    if (navigation.classList.contains('inactive')) {
        open.style.display = 'block'
        close.style.display = 'none'
    } else {
        open.style.display = 'none'
        close.style.display = 'block'
    }
}




