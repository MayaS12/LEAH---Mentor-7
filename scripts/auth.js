//sign in users
const signUpForm = document.querySelector('#signup-form');

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

const email = signUpForm['signup-email'].value;
const password = signUpForm['signup-password'].value;

auth.createUserWithEmailAndPassword(email,password).then(cred=>{
    signUpForm.reset();
    if(cred.user != null){
        window.location.href = 'ardashboard.html'
    }
    signUpForm.querySelector('.error').innerHTML = '';
}).catch((err)=>{
    signUpForm.querySelector('.error').innerHTML = err.message;
});
});

//log in users
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    loginForm.reset();
    if(cred.user != null){
        window.location.href = "cldashboard.html";
    }
    loginForm.querySelector('.error').innerHTML = '';
  }).catch((err)=>{
    loginForm.querySelector('.error').innerHTML = err.message;
});
});

