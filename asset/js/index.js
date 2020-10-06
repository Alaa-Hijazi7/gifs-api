const search = document.getElementById("search");
const form = document.getElementById("form");
const gifsDiv = document.getElementById("gifs");
const remove = document.getElementById("remove");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchVal = search.value;

  fetch(
    `https://api.giphy.com/v1/gifs/search?q=${searchVal}&api_key=iNmCU2tzKAKTOVXGo4UOFmiYNZZ8MFTD`,
    {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      res.data.forEach((data) => {
        const url = data.images.original.url;
        const img = document.createElement("img");
        const a = document.createElement("a");
        img.src = url;
        a.href = url;
        a.target = "_blank";
        a.appendChild(img);
        gifsDiv.appendChild(a);
      });
    });
});

remove.addEventListener("click", () => {
  gifsDiv.textContent = "";
  search.value = "";
});
