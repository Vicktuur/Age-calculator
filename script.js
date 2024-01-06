// Display elememts
const display_day = document.querySelector(".dd")
const display_month = document.querySelector(".mn")
const display_year = document.querySelector(".yr")
const submit = document.querySelector(".button")
// Input elements
let isValid = false
const input_day = document.querySelector(".day")
const input_month = document.querySelector(".month")
const input_year = document.querySelector(".year")
// form element
const form = document.querySelector('form')

// dates
const date = new Date()

let day = date.getDate()
let month = 1 + date.getMonth()
let year = date.getFullYear()

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// validator function
validate = () => {
    let validator = true
    const inputs = document.querySelectorAll('input')
    
    inputs.forEach((e) => {
        const parent = e.parentElement
        if ( e.value === '') {
            e.style.borderColor = 'hsl(0, 100%, 67%)'
            parent.querySelector('small').innerText = 'This field is required'
            parent.querySelector('label').style.color = 'hsl(0, 100%, 67%)'
            validator = false
        } else if (input_day.value > 31) {
            input_day.style.borderColor = 'hsl(0, 100%, 67%)'
            input_day.parentElement.querySelector('label').style.color = 'hsl(0, 100%, 67%)'
            input_day.parentElement.querySelector('small').innerText = 'Must be a valid day'
            validator = false
        } else if (input_month.value > 12) {
            input_month.style.borderColor = 'hsl(0, 100%, 67%)'
            input_month.parentElement.querySelector('label').style.color = 'hsl(0, 100%, 67%)'
            input_month.parentElement.querySelector('small').innerText = 'Must be a valid month'
            validator = false
        }  else if (input_year.value > 2024) {
            input_year.style.borderColor = 'hsl(0, 100%, 67%)'
            input_year.parentElement.querySelector('label').style.color = 'hsl(0, 100%, 67%)'
            input_year.parentElement.querySelector('small').innerText = 'Must be in the past'
            validator = false
        }  else if (e.value) 
        {
            e.style.borderColor = 'hsl(0, 1%, 44%)'
            parent.querySelector('label').style.color = 'hsl(0, 1%, 44%)'
            parent.querySelector('small').innerText = ''
            validator = true
        }
    })
    return validator
}

// submit button action
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (validate()) {
        if (input_day.value > day) {
            day = day + months[month - 1]
            month = month - 1
        }
        if (input_month.value > month) {
            month = month + 12
            year = year - 1
        }

        display_day.innerText = day - input_day.value
        display_month.innerText = month - input_month.value
        display_year.innerText = year - input_year.value
    }
})
