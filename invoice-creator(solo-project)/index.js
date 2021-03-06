// variables
const carWashPrice = 10
const mowLawnPrice = 20
const pullWeedPrice = 30

const washCar = `
    <div class="items">
        <div>
            <p class="itemtxt">Wash Car</p>
            <span id="rmwashcar" class="itemsmtxt">Remove</span>
        </div>
        <p class="itemnub"><span class="grey">$</span>${carWashPrice}</p>
    </div>
    `
const mowLawn = `
    <div class="items">
        <div>
            <p class="itemtxt">Mow Lawn</p>
            <span id="rmmowlawn" class="itemsmtxt">Remove</span>
        </div>
        <p class="itemnub"><span class="grey">$</span>${mowLawnPrice}</p>
    </div>`
const pullWeed = `
    <div class="items">
        <div>
            <p class="itemtxt">Pull Weeds</p>
            <span id="rmpullweed" class="itemsmtxt">Remove</span>
        </div>
        <p class="itemnub"><span  class="grey">$</span>${pullWeedPrice}</p>
    </div>`
const washCarBtn = document.querySelector('#washcarbtn');
const mowLawnBtn = document.querySelector('#mowlawnbtn');
const pullWeedBtn = document.querySelector('#pullweedbtn');
const requestedServicesEl = document.querySelector('#requestedservices');
const clearBtn = document.querySelector('#sendbtn')
const totalpriceEl = document.querySelector('#total');
let rmWashCar = {}
let requestedServiceArr = []
let checkedArr = []
let totalAmt = 0
// let loadcheckedArr = JSON.parse(localStorage.getItem('checkedArr'))
// checkedArr = loadcheckedArr



// console.log(requestedServicesEl.length)
// event listeners
washCarBtn.addEventListener('click', function () {
    // console.log('Washing car')
    // let loadcheckedArr = JSON.parse(localStorage.getItem('checkedArr'))
    // checkedArr = loadcheckedArr
  
    requestedServiceArr.push(washCar);
    // console.log(requestedServiceArr)
    checkduplicates(requestedServiceArr)
    totalPrice(checkedArr)
    render(checkedArr)
    // console.log(checkedArr)
    localStorage.setItem('washcar', JSON.stringify(checkedArr.length))
    // localStorage.setItem('checkedArr', JSON.stringify(checkedArr))
})

mowLawnBtn.addEventListener('click', function () {
    // let loadcheckedArr = JSON.parse(localStorage.getItem('checkedArr'))
    // checkedArr = loadcheckedArr
    // console.log('Mowing lawn')
    
    requestedServiceArr.push(mowLawn);
    // console.log(requestedServiceArr)
    checkduplicates(requestedServiceArr)
    totalPrice(checkedArr)
    render(checkedArr)
    // console.log(checkedArr)
    localStorage.setItem('mowLawn', JSON.stringify(checkedArr.length))
    // localStorage.setItem('checkedArr', JSON.stringify(checkedArr))
})

pullWeedBtn.addEventListener('click', function () {
    // let loadcheckedArr = JSON.parse(localStorage.getItem('checkedArr'))
    // checkedArr = loadcheckedArr
    // console.log('Pulling weeds')
    
    requestedServiceArr.push(pullWeed);
    // console.log(requestedServiceArr)
    checkduplicates(requestedServiceArr)
    totalPrice(checkedArr)
    render(checkedArr)
    // console.log(checkedArr)
    localStorage.setItem('pullWeed', JSON.stringify(checkedArr.length))
    // localStorage.setItem('checkedArr', JSON.stringify(checkedArr))
})


sendBtn.addEventListener('click', function () {
    localStorage.clear()
    requestedServiceArr = []
    checkedArr = []
    // localStorage.setItem('checkedArr', JSON.stringify(checkedArr))
    render(checkedArr)
    console.log(checkedArr)
})

function render(arr) {
    let display = ''
    requestedServicesEl.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        display += arr[i];
    }
    requestedServicesEl.innerHTML = display;
    totalpriceEl.textContent = `$${totalAmt}`
}


function checkduplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (checkedArr.includes(arr[i])) {
            // console.log('duplicate')
        } else {
            checkedArr.push(arr[i]);
        }
    }
}

function totalPrice(arr) {
    let total = 0
    let totalArr = []
    for (let i = 0; i < arr.length; i++) {
        if( arr[i] === washCar) {
            totalArr.push(10)
        }else if(arr[i] === mowLawn) {
            totalArr.push(20)
        }else if(arr[i] === pullWeed) {
            totalArr.push(30)
        }
    }
    for (let i = 0; i < totalArr.length; i++) {
        total += totalArr[i]
    }
    // console.log(totalArr)
    totalAmt = total
}







