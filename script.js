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
    afficherService(data.entreprise.services);
    afficheAvis(data.entreprise.temoignages);
    afficheAvantagesClients(data.entreprise.avantagesClients);
  });

function afficheLeHero(donnee){
document.querySelector("#hero").innerHTML+=`
<div class="div2">
    <h2>${donnee.entreprise.nomCommercial}</h2>
    <h3>${donnee.entreprise.phraseAccroche}</h3>
    <h3>${donnee.entreprise.texteAppelAction}</h3>
</div>
`
}

function afficheAvantagesClients(tableauAvantageClients){
  //role: créer et quelle affiche les avantages clients dans mon html
  //paramétre: tableau des avantages clients
  tableauAvantageClients.forEach(element =>{
  document.querySelector("#AC").innerHTML+=`
  <div classe="div5">
  <h3>${element}</h3>
  
  </div>
  
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
<div  >

    <h3>${srvc.nom}</h3>
    <p>${srvc.description}<p>

</div>


`});
}
function afficheAvis(tableauDesAvis){
  tableauDesAvis.forEach(avs=>{

  document.querySelector("#AVIS").innerHTML+=`
  <div >
      <h2>${avs.prenom}</h2>
      <h3>${avs.typeExperience}</h3>
      <h3>${avs.commentaire}</h3>
      <h3>${avs.note}</h3>
  </div>

  `});
}


  




