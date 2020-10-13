
var json = JSON.parse(localStorage.getItem('active_user'))
console.log(json);
​
var h2 = document.querySelector('h2');
h2.textContent =  `welcome  ${json['name']}`
