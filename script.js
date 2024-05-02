// Envoie une requête GET à l'URL de l'api pour récupérer des données
fetch("patisseries.json")
  // Une fois que la réponse est reçue
  .then(rep => {
    // transforme la reponse obtenu en JSON 
    return rep.json();
  })
  // Une fois que les données JSON sont extraites avec succès, jeles transmet à une fonction pour l'utiliser plus tard
  .then(data => {
    // Appelle la fonction addProducts() avec les données JSON en entrée
    afficheLeHero(data)
    addProducts(data.entreprise.produits);
    afficheAvantagesClients(data.entreprise.avantagesClients);
    afficherService(data.entreprise.services);
    afficheAvis(data.entreprise.temoignages);

  });

function afficheLeHero(donnee){
document.querySelector("#hero").innerHTML+=`
<div class="heroContent">
    <h2 class="texte" >${donnee.entreprise.nomCommercial}</h2>
    <h2 class="texte" >${donnee.entreprise.phraseAccroche}</h2>
    <h3>${donnee.entreprise.texteAppelAction}</h3>
</div>
`
}

function afficheAvantagesClients(tableauAvantageClients){
  //role: créer et quelle affiche les avantages clients dans mon html
  //paramétre: tableau des avantages clients
  tableauAvantageClients.forEach(element =>{
  document.querySelector("#AC").innerHTML+=`
  <div class="acc" >
  <div>${element}</div>

  
  `});
}

// Cette fonction prend les données JSON en entrée et effectue une action sur celles-ci
function addProducts(tableauDesProduits) {
  // ceette fonction a besoin du tableau de produits
  // Affiche les données dans la console du navigateur

  //console.log(data);
  tableauDesProduits.forEach(gateau => {
    document.querySelector("#content").innerHTML +=`
  <div class="carte">
    <img src="${gateau.images}" alt="" class="imagg" >
    <div>
        <h3>${gateau.nom}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur rerum iusto ex dicta quaerat! Soluta quas quis consectetur sequi nesciunt iste est aut cum. </p>
    </div>
  </div>`
  });
}
function afficherService(tableauDesServices){
  tableauDesServices.forEach(srvc =>{

document.querySelector("#pre").innerHTML +=`

<p class="serviiiice">
<span>${srvc.nom}</span>
${srvc.description}
</p>


`});
}
function afficheAvis(tableauDesAvis){
  tableauDesAvis.forEach(avs=>{

  document.querySelector("#AVIS").innerHTML+=`

  <p class="temoignageee">
  <span>${avs.prenom}</span>
  <span>${avs.typeExperience}</span>
  "${avs.commentaire}"
  <span>${avs.note}</span>
</p>

  `});




}

var map = L.map('map').setView([47.4755, 3.3402], 7);
var marker = L.marker([47.4755, 3.3402]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);





