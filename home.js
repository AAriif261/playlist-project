console.log("js console"); 

let data;
let grid = document.querySelector(".grid-container"); 

var xhttp = new XMLHttpRequest(); 

xhttp.onreadystatechange = function () {

  if (this.readyState === 4 && this.status === 200) { 

    data = JSON.parse(this.responseText); 
    console.log(data); 

    data.forEach(function (anime) { 

      let card = document.createElement("div"); 
      card.classList.add("card"); 

      let textData =
        "<div class='anime-title'>" + anime.title + "</div>" +
        "<span>" +
        "Episodes: " + anime.episodeCount + "<br>" +
        "Release Year: " + anime.releaseYear +
        "</span>";

      card.innerHTML = textData;

      if (anime.image) { 
        card.style.backgroundImage = "url('" + anime.image + "')";
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";
      }

      grid.appendChild(card); 

    }); 

  } 

}; 

xhttp.open("GET", "anime.json", true); 
xhttp.send();

