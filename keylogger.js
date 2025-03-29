let s = '';
let para = document.querySelector('.para'); // Make sure this matches your HTML

function keylogger(e) {
  if (e.key === 'Backspace') {
    s = s.slice(0, -1); 
  } else if (e.key.length === 1) {
    s += e.key; 
  }
  
  console.log(s);

  if (para) {
    para.innerHTML = s;
  } else {
    console.error('Element with class "para" not found.');
  }
}

window.addEventListener('keydown', keylogger)
