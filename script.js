// Functions for redirecting to different pages
function goToPage1() {
  window.location.href = '/Coding-Hut/index.html';
}

function goToPage2() {
  window.location.href = '/Coding-Hut/ordering.html';
}

function goToPage3() {
  window.location.href = '/Coding-Hut/rules.html';
}

function goToPage4() {
  window.location.href = '/Coding-Hut/login.html';
}

function goToPage5() {
  window.location.href = '/Coding-Hut/signup.html';
}

// Login form handling
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (!email || !password) {
    alert('Please fill out all fields.');
    return;
  }

  console.log('Logging in with:', { email, password });

  alert('Login successful!');
  window.location.href = 'Coding-Hut/index.html'; // Example redirect
});

// Signup form handling
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  if (!username || !email || !password) {
    alert('Please fill out all fields.');
    return;
  }

  console.log('Signing up with:', { username, email, password });

  alert('Signup successful!');
  window.location.href = 'Coding-Hut/index.html'; // Example redirect
});
