
function debounce(func, delay = 250) {
    let timer = null;
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout((...theArgs) => {
            func.apply(this, theArgs)
        }, delay)
    }
}

// const a = () => console.log('take action!')
// const d = debounce(a, 2000)

function handleScroll() {
    console.log(window.scrollY)
}
window.addEventListener('scroll', debounce(handleScroll));