/* http://www.omdbapi.com/?i=tt3896198&apikey=60f7bdd3  */
function getData() {
  const movie = document.getElementById('movie').value;
  const url = `https://www.omdbapi.com/?apikey=60f7bdd3&t=${movie}`;
  const xhttps = new XMLHttpRequest();
  xhttps.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
      console.log(JSON.parse(this.responseText));
      const data = JSON.parse(this.responseText);
      document.getElementById('director').innerHTML = data.Director;
      document.getElementById('actors').innerHTML = data.Actors;
      document.getElementById('year').innerHTML = data.Year;
      document.getElementById('runtime').innerHTML = data.Runtime;
      document.getElementById('rated').innerHTML = data.Rated;
      document.getElementById('genre').innerHTML = data.Genre;
      document.getElementById('poster').setAttribute('src', data.Poster);
    }
  };
  xhttps.open('GET', url, true);
  xhttps.send();
}

const button = document.getElementById('btn');
button.addEventListener('click', () => {
  getData();
  document.getElementById('container').style.border = `2px solid #000`;
});
