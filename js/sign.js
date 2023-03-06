const signUpLink = document.querySelector('a[href="#signUp"]');
const signUpDiv = document.querySelector('#signUp');

const signInLink = document.querySelector('a[href="#signIn"]');
const signInDiv = document.querySelector('#signIn');

signUpLink.addEventListener('click', () => {
  signUpDiv.style.display = 'block';
  signInDiv.style.display = 'none';
});


signInLink.addEventListener('click', () => {
  signInDiv.style.display = 'block';
  signUpDiv.style.display = 'none';
});
