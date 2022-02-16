// calculator display generation module
const generateDisplay = (function() {
    let main = document.querySelector('.main')

    const generateScreenArea = (function() {
        let screen = document.createElement('div')
        screen.classList.add('screen')
        main.appendChild(screen)
    })()

    const generateNumPadArea = (function() {
        let numPad = document.createElement('div')
        numPad.classList.add('number-pad')
        main.appendChild(numPad)
    })()

    const generateBtns = (function() {
        let numPad = document.querySelector('.number-pad')

        for (let i = 1; i < 10; i++) {
            let num = document.createElement('button')
            num.classList.add(`btn-${i}`)
            num.textContent = `${i}`
            numPad.appendChild(num)
        }

        let zero = document.createElement('button')
        zero.classList.add('btn-0')
        zero.textContent = '0'
        numPad.appendChild(zero)

        let addBtn = document.createElement('button')
        let subtractBtn = document.createElement('button')
        let multiplyBtn = document.createElement('button')
        let divideBtn = document.createElement('button')
        let equalBtn = document.createElement('button')
        let clearBtn = document.createElement('button')

        const strOpsArr = ['add','subtract','multiply','divide','equal','clear']
        const symOpsArr = ['+','-','*','/','=','CE']
        let btnOpsArr = [addBtn,subtractBtn,multiplyBtn,divideBtn,equalBtn,clearBtn]

        for (let i = 0; i < 6; i++) {
            let btn = btnOpsArr[i]
            btn.classList.add('btn-' + `${strOpsArr[i]}`)
            btn.textContent = symOpsArr[i]
            numPad.appendChild(btn)
        }
    })()

    return {
        // nothing
    }
})()

// calculator operator display module
const calculatorModule = (function() {
    // DOM selectors
    const oneBtn = document.querySelector('.btn-1')
    const twoBtn = document.querySelector('.btn-2')
    const threeBtn = document.querySelector('.btn-3')
    const fourBtn = document.querySelector('.btn-4')
    const fiveBtn = document.querySelector('.btn-5')
    const sixBtn = document.querySelector('.btn-6')
    const sevenBtn = document.querySelector('.btn-7')
    const eightBtn = document.querySelector('.btn-8')
    const nineBtn = document.querySelector('.btn-9')
    const zeroBtn = document.querySelector('.btn-0')

    const addBtn = document.querySelector('.btn-add')
    const subtractBtn = document.querySelector('.btn-subtract')
    const multiplyBtn = document.querySelector('.btn-multiply')
    const divideBtn = document.querySelector('.btn-divide')

    const equalBtn = document.querySelector('.btn-equal')
    const clearBtn = document.querySelector('.btn-clear')

    let screen = document.querySelector('.screen')

    // separate operations
    const add = (a,b) => {
        return a + b
    }
    
    const subtract = (a,b) => {
        return a - b
    }
    
    const multiply = (a,b) => {
        return a * b
    }
    
    const divide = (a,b) => {
        return a / b
    }

    // operation selector
    const operations = (ops,a,b) => {
        if (ops === '+') {
            return add(a,b)
        } else if (ops === '-') {
            return subtract(a,b)
        } else if (ops === '*') {
            return multiply(a,b)
        } else if (ops === '/') {
            return divide(a,b)
        }
    }

    // click event listeners
    oneBtn.addEventListener('click', numHandler)
    twoBtn.addEventListener('click', numHandler)
    threeBtn.addEventListener('click', numHandler)
    fourBtn.addEventListener('click', numHandler)
    fiveBtn.addEventListener('click', numHandler)
    sixBtn.addEventListener('click', numHandler)
    sevenBtn.addEventListener('click', numHandler)
    eightBtn.addEventListener('click', numHandler)
    nineBtn.addEventListener('click', numHandler)
    zeroBtn.addEventListener('click', numHandler)

    addBtn.addEventListener('click', opsHandler)
    subtractBtn.addEventListener('click', opsHandler)
    multiplyBtn.addEventListener('click', opsHandler)
    divideBtn.addEventListener('click', opsHandler)

    equalBtn.addEventListener('click',equalsHandler)
    clearBtn.addEventListener('click', clearHandler)

    // initial values
    let int1 = ''
    let int2 = ''
    let ops = ''
    let answer = ''

    // handlers
    function numHandler(e) {
        let newInt = e.target.textContent
    
        if (ops !== '') {
            int2 += newInt
            screen.textContent += newInt
        } else if (ops === '') {
            int1 += newInt
            screen.textContent += newInt
        }
    }

    function opsHandler(e) {
        if (answer !== '') {
            int1 = answer
            screen.textContent = int1
        } else if (int1 !== '' && int2 !== '') {
            return clear()
        }
        ops = e.target.textContent
        screen.textContent += ' ' + ops + ' '
    }

    function equalsHandler(e) {
        num1 = parseInt(int1)
        num2 = parseInt(int2)
    
        answer = operations(ops,num1,num2)
        screen.textContent += ' ' + e.target.textContent + ' '
        screen.textContent += answer
    
        int1 = ''
        int2 = ''
        ops = ''
    }
    
    function clearHandler() {
        screen.textContent = ''
        int1 = ''
        int2 = ''
        ops = ''
        answer = ''
    }

    return {
        // nothing
    }
})()