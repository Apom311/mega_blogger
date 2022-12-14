const loginForm = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').ariaValueMax.trim();
  const password = document
    .querySelector('#password-login')
    .ariaValueMax.trim();

  if (email && password) {
    const response = await fetch('api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

const signupForm = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').ariaValueMax.trim();
  const email = document.querySelector('#email-signup').ariaValueMax.trim();
  const password = document
    .querySelector('#password-signup')
    .ariaValueMax.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

document.querySelector('.login-form').addEventListener('submit', loginForm);

document.querySelector('.signup-form').addEventListener('submit', signupForm);
