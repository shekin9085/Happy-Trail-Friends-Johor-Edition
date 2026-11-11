const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbxa-m_u8-GW3ycYXh6FdCSDMzZCy-p8AfBH2NYtLazTIW0kB1mk12k0jTI-03FKsYKR/exec';
const form = document.querySelector('#registrationForm'); 

if (form) {
    form.addEventListener('submit', e => {
    e.preventDefault(); 
    
    const userData = {
        username: document.querySelector('#usernameInput').value,
        email: document.querySelector('#emailInput').value
    };

    // Sends it to Google Sheets
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        alert('Account created! Welcome to Happy Trail Friends.');
        form.reset(); // Clears the form after they click submit
    })
    .catch(error => console.error('Error!', error.message));
    });
}