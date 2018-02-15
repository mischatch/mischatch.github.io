const toHide = document.getElementsByClassName('work-description');
  Array.from(toHide).forEach(el => {
    el.style.display = 'none';
  });
  
const projects = document.getElementsByClassName('work-name');


Array.from(projects).forEach(pr => {
  pr.addEventListener('click', (e) => {
    let description = document.querySelector(`div#${e.target.id}`);
    
    if(description.style.display === 'none'){
      description.style.display = '';
    } else {
      description.style.display = 'none'
    }
    // debugger
  });
});