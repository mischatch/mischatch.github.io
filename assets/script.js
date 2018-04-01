const hello = document.getElementById('hello');
const img = document.getElementById('photo');
img.style.display = 'none';


hello.addEventListener('mouseover', (e) => {
  img.style.removeProperty('display');
  e.target.style.color = 'white';
});

hello.addEventListener('mouseout', (e) => {
  img.style.display = 'none';
  e.target.style.color = 'black';
});

if (document.location.href === "http://www.mischatch.me/index.html") {
  document.location.href = "http://www.mischatch.me/";
}
