/* http://www.omdbapi.com/?i=tt3896198&apikey=60f7bdd3  */
function getData() {
    const movie = document.getElementById('movie').value
    const url = `https://www.omdbapi.com/?apikey=60f7bdd3&t=${movie}`
    const urlUndefined = `https://www.omdbapi.com/?apikey=60f7bdd3&t=undefined`
    const xhttps = new XMLHttpRequest()
    xhttps.onreadystatechange = function () {
        try {
            if (
                document.querySelector('.error-message').innerHTML ===
                    `undefined` ||
                document.querySelector('.error-message').innerHTML ===
                    `Incorrect IMDb ID.
`
            ) {
                document.querySelector('.error-message').innerHTML = ``
            }
            if (this.readyState === 4 && this.status === 200 && url) {
                console.log(this.responseText)
                console.log(JSON.parse(this.responseText))
                const data = JSON.parse(this.responseText)
                document.getElementById('title').innerHTML =
                    data.Title || ``;
                document.getElementById('director').innerHTML =
                    data.Director || ``
                document.getElementById('actors').innerHTML = data.Actors || ``
                document.getElementById('year').innerHTML = data.Year || ``
                document.getElementById('runtime').innerHTML =
                    data.Runtime || ``
                document.getElementById('rated').innerHTML = data.Rated || ``
                document.getElementById('genre').innerHTML = data.Genre || ``
                document
                    .getElementById('poster')
                    .setAttribute('src', data.Poster)
            } else if (this.status === 404 || urlUndefined) {
                console.log(JSON.parse(this.responseText))
                const data = JSON.parse(this.responseText)
                const message = data['Error']
                const title = document.querySelector('[name=movie]')
                title.value = ``
                const errorPara = document.querySelector('.error-message')
                errorPara.style.display = 'block'
                errorPara.style.color = 'red'
                errorPara.innerHTML = `${message}`
                document.getElementsByName('span').innerHTML = `${message}`
            } else {
                return
            }
        } catch (error) {
            console.log(error)
        }
    }
    xhttps.open('GET', url, true)
    xhttps.send()
}

function refresh() {
    document.location.reload()
}

const buttonInfo = document.getElementById('btn-info')
const buttonRefresh = document.getElementById('btn-refresh')

buttonInfo.addEventListener('mousedown', () => {
    getData()
    document.getElementById('container').style.border = `2px solid #000`
})

buttonRefresh.addEventListener('mousedown', refresh)
