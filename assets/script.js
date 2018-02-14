const hello = document.getElementById('hello');
const img = document.getElementById('photo');

hello.addEventListener('mouseover', (e) => {
  debugger
  img.style.display = '';
  e.target.style.color = 'white';
});

hello.addEventListener('mouseout', (e) => {
  img.style.display = 'none';
  e.target.style.color = 'black';
});