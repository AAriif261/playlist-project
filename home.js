<script>
    function addAnime() {
      const input = document.getElementById("animeInput");
      const list = document.getElementById("animeList");

      if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        list.appendChild(li);
        input.value = "";
      }
    }
  </script>
