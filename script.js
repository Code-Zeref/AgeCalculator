const container = document.querySelector('.container');
const error = document.querySelector('.error');

function getAge() {
  
  const dobValue = document.getElementById('dob').value;

  if(!dobValue) return;

  let dob = new Date(dobValue);

  const today = new Date();

  let diff = today - dob;

  let age = diff / (1000*60*60*24*365);

  calcAge(age);
  
}

function calcAge(age){
  let years = Math.floor(age);
  let remainingYear = age - years;

  let monthDiff = remainingYear * 12;
  let month = Math.floor(monthDiff);

  let remainingMonth = monthDiff - month;
  let day = Math.floor(remainingMonth*30);

  displayAge(years, month, day);
  
}

function displayAge(y,m,d){

  const years = document.getElementById('years');
  const months = document.getElementById('months');
  const days = document.getElementById('days');

  years.innerHTML = y;
  months.innerHTML = m;
  days.innerHTML = d;

  if(y >= 0){
    error.style.display = `none`;
  }
  if(y < 0){
    error.style.display = `block`;
  }
  
}

container.addEventListener('input',getAge);