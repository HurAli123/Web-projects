let string = "";
let buttons = document.querySelectorAll('.btn');
let button1 = document.querySelectorAll('#C');
const audio = new Audio("music/c.mp3");
const audio1 = new Audio("music/s.mp3");


Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})
buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
button1.forEach(button => {
    button.addEventListener("click", () => {
      audio1.play();
    });
  });
