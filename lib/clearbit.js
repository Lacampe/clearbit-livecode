url = "https://person.clearbit.com/v1/people/email/"

const apiKey = "YOUR_SK_API_KEY";

//1. select form/submit button
const form = document.getElementById("clearbitForm")

//2. add event listener to prevent the form submission
const buildUI = (json) => {
  const userName      = document.getElementById('userName')
  const userEmail     = document.getElementById('userEmail')
  const userBio       = document.getElementById('userBio')
  const userLocation  = document.getElementById('userLocation')

  userName.innerText = json.name.fullName
  userEmail.innerText = json.email
  userBio.innerText = json.bio
  userLocation.innerText = json.location
}

const clearbitCall = (email) => {
  fetch(url + email.value, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  })
  .then(response => response.json())
  .then((data) => {
    //4. populate UI with data from API
    console.log(data)
    buildUI(data)
  })
}

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const email = document.getElementById("clearbitEmail")
  //3. sent AJAX call to clearbit API
  clearbitCall(email)
})











