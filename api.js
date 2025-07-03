async function Traerdatos() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const Animes = await response.json();
    Animeslist = " "
Animes.results.forEach(Animes => {
    Animeslist +=
    Animes.name +" "+
    Animes.species +" "+
    Animes.status +"<br>"

    });
    console.log(Animeslist);
    document.getElementById("clasificacion").innerHTML=Animeslist

}