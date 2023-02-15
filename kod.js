var dt = new Date();
document.getElementById('time').innerHTML=dt;
mirror = document.getElementById("mirroredImage");
mirror2 = document.getElementById("mirroredImage2");
var bazas = document.getElementById("bazaPodataka");

bazas = []



function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
  }
    setInterval(refreshTime, 1000);

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function mirrorImage() {
    if (mirror.style.display === "none") {
      mirror.style.display = "block";
      mirror2.style.display = "none";
    } else {
      mirror.style.display = "none";
      mirror2.style.display = "block";
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
  
    const value = Object.fromEntries(data.entries());
  
    bazas.push(value)
    d = bazas.length
  }
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);


function appendBazas(bazas){
    document.getElementById("bazaPodataka").innerHTML =bazas
}