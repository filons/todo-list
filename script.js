
const boutonAjouter=document.getElementById("ajouter");
const tache=document.getElementById("nouvelle-tache");
const liste=document.getElementById("liste-taches");

function ajouterTache() {
    const nouvelleTache = tache.value.trim();
    if (nouvelleTache !== "") {
        const li = document.createElement("li");
        li.textContent = nouvelleTache;

        const boutonSupprimer = document.createElement("button");
        boutonSupprimer.textContent = "Supprimer";
        boutonSupprimer.onclick = function() {
            liste.removeChild(li);
        };

        li.appendChild(boutonSupprimer);
        liste.appendChild(li);
        tache.value = "";
    }
}
boutonAjouter.addEventListener("click", ajouterTache);