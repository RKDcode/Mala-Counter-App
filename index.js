let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let malaCountEl = document.getElementById("mala-count-el")

let count = 0
let malaCount = 0



function increment() {
    count += 1
    countEl.textContent = count
    if(count%108 === 0 && count>0){
        malaCount += 1
        malaCountEl.textContent = malaCount
    }
}

function decrement() {
    if(count>0){
        count -= 1
        countEl.textContent = count
    }
} 

function save() {
    let countStr = malaCount + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    malaCountEl.textContent = 0
    count = 0
    malaCount = 0
}
