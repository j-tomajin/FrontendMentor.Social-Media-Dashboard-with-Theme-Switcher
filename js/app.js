let darkMode = localStorage.getItem('darkMode')
const darkModeToggle = document.querySelector('#dark-mode')
const slider = document.querySelector('.slider')

// enable dark mode
const enableDarkMode = () => {
    // add class darkmode to body
    document.body.classList.add('darkmode')

    // set enabled on localStorage
    localStorage.setItem('darkMode', 'enabled')
}

// disable dark mode
const disableDarkMode = () => {
    // add class darkmode to body
    document.body.classList.remove('darkmode')

    // set disabled on localStorage
    localStorage.setItem('darkMode', null)
}

// set current theme base on what is on the localStorage
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
