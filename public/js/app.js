const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    console.log('submit testing')
    e.preventDefault()

    const location = search.value
    console.log(location)

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:7000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log('error  box ')
                messageOne.textContent = data.error
            } else {
                console.log(location)
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
});