var dt = new Date();
document.getElementById('time').innerHTML=dt;
mirror = document.getElementById("mirroredImage");
mirror2 = document.getElementById("mirroredImage2");
var bazas = document.getElementById("bazaPodataka");

bazas = []

function refreshTime() {
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, '0');
  const minute = now.getMinutes().toString().padStart(2, '0');
  document.getElementById("name").textContent = "Kevin Pokos";
  document.getElementById("time").textContent = `${hour}:${minute}`;
  
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
    console.log(bazas)
  }
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);


function appendBazas(bazas){
    document.getElementById("bazaPodataka").innerHTML =bazas
}

function izracunBodova(bodovi) {
  if (bodovi >= 35 && bodovi <= 40) {
    return 5;
  } else if (bodovi >= 30 && bodovi < 35) {
    return 4;
  } else if (bodovi >= 25 && bodovi < 30) {
    return 3;
  } else if (bodovi >= 20 && bodovi < 25) {
    return 2;
  } else if (bodovi >= 15 && bodovi < 20) {
    return 1;
  } else {
    return 0;
  }
}

let rezultati = {
  "studenti": [
    {
      "ime": "",
      "prezime": "",
      "kolegij": "",
      "bodovi": "",
      "ocjena": ""
    }
  ]
};
