// 1. First, find our UL Container
// 2. Create our Ajax Request
let url = 'http://swapi.co/api/people/';
let chars = document.querySelector('.characters');

fetch(url)
  .then(response => response.json())
  .then(data => { for (var i = 0; i < data.results.length; i++) {
    let listChar = document.createElement('li');
    listChar.textContent = data.results[i].name
    chars.appendChild(listChar);
  }})
