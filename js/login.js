
const username = document.getElementById('.username')
const password = document.getElementById('.password')
const form = document.getElementById('.form')
const errorElement = document.getElementById('.error')


form.addEventListener('submit', (e) => {
    let massages = []

    if(username.value === '' || username.value == null) {
        massages.push('username is require')
    }

    if(massages.value.length <= 6){
        massages.push('password must be longer than 6 character')
    }

    if(massages.length > 0) {
        e.preventDefault()
        errorElement.innerText = massages.join(', ')
    }
    e.preventDefault()
})

