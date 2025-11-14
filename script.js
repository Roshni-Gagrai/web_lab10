let movieNames = [];

const addBtn = document.getElementById("Addbtn");
const clearBtn = document.getElementById("Clearbtn");
const inputField = document.getElementById("data");
const count = document.getElementById("count");
const MovieList = document.getElementById("display");

function updateList(){
  MovieList.innerHTML = "";

  movieNames.forEach((movie,index) => {
    let li = document.createElement("li");
    li.textContent = movie;

    li.addEventListener("click", () => {
      movieNames.splice(index,1);
      updateList();
    });

    MovieList.appendChild(li);
  });

  count.textContent = movieNames.length;
}

addBtn.addEventListener("click", () => {
  if(inputField.value == "")
  {
    alert("Enter the movie name before adding.");
    return;
  }
  else
  {
    movieNames.push(inputField.value);
    inputField.value = "";
    updateList();
  }
});

clearBtn.addEventListener("click", () => {
  movieNames = [];
  updateList();
});
</body>
</html>


*/
