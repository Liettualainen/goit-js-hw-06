const rangeChange = document.querySelector("#font-size-control")
// console.log(rangeChange)
const text = document.querySelector('#text')
// console.log(text.textContent)
rangeChange.value = rangeChange.min
// console.log(rangeChange.value)

rangeChange.addEventListener('input', (event) => {
    text.style.fontSize = rangeChange.value + 'px'
    console.log(text.style.fontSize)
})



