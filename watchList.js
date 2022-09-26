const favmovies = document.getElementById('movies')
const delet= './images/remove-light.svg'


let moviesFromLocalStorage = JSON.parse(localStorage.getItem('movies') ) 
moviesFromLocalStorage.reverse()
mvHtml = moviesFromLocalStorage.map((mv) => (mv.html)).join('')


if(mvHtml) {
    favmovies.innerHTML=mvHtml
}

console.log('mvhtml')
const remove = document.getElementsByClassName('div-btn-watchList')

function changeIconToRemove() {
    
    for(let i=0; i<remove.length;i++) {
        console.log(remove[i].innerHTML)
        remove[i].innerHTML=`<img src="./images/remove-light.svg"/><p>Remove</p>`
}


}


function saveMovie(movie){
    let newarray = JSON.parse(localStorage.getItem('movies') ).filter(e => (e.id != movie.id))
    const newfilms= newarray.map((mv) => (mv.html)).join('')
    
    localStorage.setItem('movies', JSON.stringify(newarray))
    favmovies.innerHTML= newfilms
    changeIconToRemove()


}


changeIconToRemove()
