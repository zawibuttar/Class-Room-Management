function login() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
    if (username=='' || password=='') {
      alert('Please fill in both username and password fields to proceed.');
      return;
    }
    var storedUser = localStorage.getItem(username);
  
    if (storedUser && JSON.parse(storedUser).password === password) {
      alert('Login successful!');
      window.location.href = 'index.html';
    } else {
      alert('Invalid username or password');
    }
  }
  
  function signup() {
    var username = document.getElementById('signup-username').value;
    var password = document.getElementById('signup-password').value;
    if (username=='' || password=='') {
      alert('Please fill in both username and password fields to proceed.');
      return;
    }

  
    var existingUser = localStorage.getItem(username);
  
    if (existingUser) {
      alert('Username already exists. Please choose a different one.');
    } else {
      var newUser = { username: username, password: password };
      localStorage.setItem(username, JSON.stringify(newUser));
      alert('Sign up successful! You can now login.');
      window.location.href = 'login.html';
    }
  }
  