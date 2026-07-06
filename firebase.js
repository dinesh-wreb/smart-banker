// Firebase Configuration and Authentication for ZeroHunger
//
// SETUP INSTRUCTIONS:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project or select existing one
// 3. Enable Authentication in the Firebase Console
// 4. Go to Project Settings > General > Your apps
// 5. Add a web app and copy the config object
// 6. Replace the firebaseConfig object below with your actual config
//
// Replace with your actual Firebase config from Firebase Console
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get Firebase Auth instance
const auth = firebase.auth();

// Authentication Functions
function registerUser() {
    clearMessages();

    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;

    let isValid = true;

    // Validate name
    if (!name) {
        showMessage('register-message', 'Full name is required');
        document.querySelector('#register-name').parentElement.classList.add('error');
        isValid = false;
    } else if (!validateName(name)) {
        showMessage('register-message', 'Name must be at least 2 characters long');
        document.querySelector('#register-name').parentElement.classList.add('error');
        isValid = false;
    }

    // Validate email
    if (!email) {
        if (isValid) showMessage('register-message', 'Email is required');
        document.querySelector('#register-email').parentElement.classList.add('error');
        isValid = false;
    } else if (!validateEmail(email)) {
        if (isValid) showMessage('register-message', 'Please enter a valid email address');
        document.querySelector('#register-email').parentElement.classList.add('error');
        isValid = false;
    }

    // Validate password
    if (!password) {
        if (isValid) showMessage('register-message', 'Password is required');
        document.querySelector('#register-password').parentElement.classList.add('error');
        isValid = false;
    } else if (!validatePassword(password)) {
        if (isValid) showMessage('register-message', 'Password must be at least 6 characters long');
        document.querySelector('#register-password').parentElement.classList.add('error');
        isValid = false;
    }

    if (isValid) {
        // Show loading state
        const registerBtn = document.querySelector('#register-form .btn');
        registerBtn.textContent = 'Creating Account...';
        registerBtn.disabled = true;

        // Create user with Firebase
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Update user profile with name
                return userCredential.user.updateProfile({
                    displayName: name
                }).then(() => {
                    showMessage('register-message', `Welcome to ZeroHunger, ${name}! Your account has been created.`, 'success');

                    // Close modal after success
                    setTimeout(() => {
                        closeModal();
                        registerForm.reset();
                        updateLoggedInState(userCredential.user);
                    }, 2000);
                });
            })
            .catch((error) => {
                console.error('Registration error:', error);
                let errorMessage = 'Registration failed. Please try again.';

                switch (error.code) {
                    case 'auth/email-already-in-use':
                        errorMessage = 'An account with this email already exists. Please use a different email or try logging in.';
                        document.querySelector('#register-email').parentElement.classList.add('error');
                        break;
                    case 'auth/weak-password':
                        errorMessage = 'Password is too weak. Please choose a stronger password.';
                        document.querySelector('#register-password').parentElement.classList.add('error');
                        break;
                    case 'auth/invalid-email':
                        errorMessage = 'Please enter a valid email address.';
                        document.querySelector('#register-email').parentElement.classList.add('error');
                        break;
                    case 'auth/network-request-failed':
                        errorMessage = 'Network error. Please check your connection and try again.';
                        break;
                }

                showMessage('register-message', errorMessage);
            })
            .finally(() => {
                // Reset button state
                registerBtn.textContent = 'Register';
                registerBtn.disabled = false;
            });
    }
}

function loginUser() {
    clearMessages();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    let isValid = true;

    // Validate email
    if (!email) {
        showMessage('login-message', 'Email is required');
        document.querySelector('#login-email').parentElement.classList.add('error');
        isValid = false;
    } else if (!validateEmail(email)) {
        showMessage('login-message', 'Please enter a valid email address');
        document.querySelector('#login-email').parentElement.classList.add('error');
        isValid = false;
    }

    // Validate password
    if (!password) {
        if (isValid) showMessage('login-message', 'Password is required');
        document.querySelector('#login-password').parentElement.classList.add('error');
        isValid = false;
    }

    if (isValid) {
        // Show loading state
        const loginBtn = document.querySelector('#login-form .btn');
        loginBtn.textContent = 'Signing In...';
        loginBtn.disabled = true;

        // Sign in with Firebase
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                showMessage('login-message', `Welcome back, ${user.displayName || user.email}!`, 'success');

                // Close modal after success
                setTimeout(() => {
                    closeModal();
                    loginForm.reset();
                    updateLoggedInState(user);
                }, 1500);
            })
            .catch((error) => {
                console.error('Login error:', error);
                let errorMessage = 'Login failed. Please check your credentials and try again.';

                switch (error.code) {
                    case 'auth/user-not-found':
                        errorMessage = 'No account found with this email. Please register first.';
                        document.querySelector('#login-email').parentElement.classList.add('error');
                        break;
                    case 'auth/wrong-password':
                        errorMessage = 'Incorrect password. Please try again.';
                        document.querySelector('#login-password').parentElement.classList.add('error');
                        break;
                    case 'auth/invalid-email':
                        errorMessage = 'Please enter a valid email address.';
                        document.querySelector('#login-email').parentElement.classList.add('error');
                        break;
                    case 'auth/user-disabled':
                        errorMessage = 'This account has been disabled. Please contact support.';
                        break;
                    case 'auth/too-many-requests':
                        errorMessage = 'Too many failed login attempts. Please try again later.';
                        break;
                    case 'auth/network-request-failed':
                        errorMessage = 'Network error. Please check your connection and try again.';
                        break;
                }

                showMessage('login-message', errorMessage);
            })
            .finally(() => {
                // Reset button state
                loginBtn.textContent = 'Login';
                loginBtn.disabled = false;
            });
    }
}

function logoutUser() {
    auth.signOut()
        .then(() => {
            console.log('User signed out');
            updateLoggedOutState();
        })
        .catch((error) => {
            console.error('Logout error:', error);
        });
}

// Auth state observer
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('User is signed in:', user);
        updateLoggedInState(user);
    } else {
        console.log('User is signed out');
        updateLoggedOutState();
    }
});

// Utility functions (same as before)
function showMessage(elementId, message, type = 'error') {
    const messageElement = document.getElementById(elementId);
    messageElement.textContent = message;
    messageElement.className = `form-message ${type}`;

    // Clear message after 5 seconds for success messages
    if (type === 'success') {
        setTimeout(() => {
            messageElement.textContent = '';
            messageElement.className = 'form-message';
        }, 5000);
    }
}

function clearMessages() {
    document.getElementById('login-message').textContent = '';
    document.getElementById('login-message').className = 'form-message';
    document.getElementById('register-message').textContent = '';
    document.getElementById('register-message').className = 'form-message';

    // Clear error styling from form groups
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
    });
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function validateName(name) {
    return name.trim().length >= 2;
}