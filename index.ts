const getRandomColor = (): number=> {
    return Math.floor(Math.random() * 256)
}
const element = document.querySelector('div')
const btn = document.querySelector('button')
btn?.addEventListener('click', () => {
   element ? element.style.backgroundColor = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`: undefined
})
