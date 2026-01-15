console.log("js console"); 

let data; // [__N__] - 2
let grid = document.querySelector(".grid-container"); 

var xhttp = new XMLHttpRequest(); 

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { 

       data = JSON.parse(xhttp.responseText); 
       console.log(data); 

       data.forEach(function(anime) { 
        let card = document.createElement("div"); 
        card.classList.add("card"); 

        let textData =
          "<div class='anime-title'>" + anime.title + "</div>" +
          "<span>" +
          "Publisher: " + anime.publisher + "<br>" +
          " Release Date: " + anime.releaseDate + "<br>" +
          "Needs Research: " +
          "</span>";

        card.innerHTML = textData; //

        if (anime.imgSrc) { 
            card.style.backgroundImage = "url('" + anime.imgSrc + "')";
        }

        grid.appendChild(card); 
       });

    }
};

xhttp.open("GET", "anime.json", true); // [__I__] - 16
xhttp.send(); // [__B__] - 17
