import { generateContent } from './generate-content'

function checkContent (button) {
    if (button.id === 'about') {
        return 'about'
    } else if (button.id === 'menu') {
        return 'menu'
    } else if (button.id === 'contact') {
        return 'contact'
    }
}

export function moduleReturn () {
    const navButtons = document.querySelectorAll('[nav-bar-bottom-elements]')
    Array.from(navButtons).forEach(button => button.addEventListener('click', function () {
        let mainPage = document.querySelector('[main-content]').id
        mainPage = checkContent(this)
        generateContent(mainPage)
    }))
}