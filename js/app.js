let darkMode = localStorage.getItem('darkMode')
const darkModeToggle = document.querySelector('#dark-mode')
const slider = document.querySelector('.slider')

// enable dark mode
const enableDarkMode = () => {
    document.body.classList.add('darkmode')

    localStorage.setItem('darkMode', 'enabled')
}

// disable dark mode
const disableDarkMode = () => {
    document.body.classList.remove('darkmode')

    localStorage.setItem('darkMode', null)
}

if(darkMode === 'enabled') {
    enableDarkMode()
    slider.classList.add('slider-toggle')
} else {
    disableDarkMode()
    slider.classList.remove('slider-toggle')
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')

    if(darkMode !== 'enabled') {
        enableDarkMode()
        slider.classList.add('slider-toggle')
    } else {
        disableDarkMode()
        slider.classList.remove('slider-toggle')
    }
})
