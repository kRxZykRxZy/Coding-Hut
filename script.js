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
  window.location.href = '/index.html'; // Example redirect
});

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (!email || !password) {
    alert('Please fill out all fields.');
    return;
  }

  // Simulate stored user data (for example purposes, this would be on a server)
  const storedEmail = "user@example.com"; // Simulated stored email
  const storedHashedPassword = "$2a$10$7mFbXppN3kmbH7z.zy6mq8fjTjxTTeV2k39ewOLOyjjWhMZ8wMwZ2"; // Simulated stored bcrypt hash

  // Validate login: compare email and password hash
  if (email === storedEmail && bcrypt.compareSync(password, storedHashedPassword)) {
    console.log('Login successful');
    alert('Login successful!');
    window.location.href = '/Coding-Hut/index.html'; // Example redirect
  } else {
    alert('Invalid login credentials.');
  }
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

  // Hash the password before sending it to the server (for demonstration purposes, this is done on the client side)
  const hashedPassword = bcrypt.hashSync(password, 10); // Hashing the password using bcrypt

  console.log('Signing up with:', { username, email, password: hashedPassword });

  // Normally, you'd send the hashed password to the server to store it in a database
  alert('Signup successful!');
  window.location.href = '/Coding-Hut/index.html'; // Example redirect
});
