//Variable pour recuperer les elements du dom
const name = document.getElementById("name");
const prix = document.getElementById("prix");
const quantity = document.getElementById('quantity');
const btnEntrer = document.getElementById("btnEntrer");
const totale = document.querySelector(".total");
const course = document.querySelector(".courses")
const  modal = document.querySelector(".modal");



// Variable pour stocker la somme totale
let sommeTotale = 0;


//ajouter une course
function addCourse() {

    btnEntrer.addEventListener("click",(e)=>{
        e.preventDefault();

        if (prix.value === "" || isNaN(prix.value) || name.value === "" || !isNaN(name.value) ||  isNaN(quantity.value) ){

            champInvalid();

        }else {
            validateChamp();
        }
    });

}

addCourse();



//Verifier si les champs sont bien remplie
function champInvalid() {

    //donnée invalide
    modal.style.display = "block";
    setTimeout(()=>{
        modal.style.display = "none";
        name.value = "" ;
        prix.value = "" ;
        quantity.value = "";
        modal.style.transition = "transform .7s ease-out"
    } ,2000)
}

//Verifier si le champ est valide

function validateChamp() {
    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const span = document.createElement("span");
    const checkbox = document.createElement("input");
    const buttonDelete = document.createElement("p");
    const buttonEditer = document.createElement("p");

    div.setAttribute("class","addCourse");
    p1.setAttribute("class","nomCourse");
    p2.setAttribute("class","prixCourse");
    p3.setAttribute("class","quantityCourse");
    p4.setAttribute("class","prixUnitaire");
    span.setAttribute("class","franPrix");
    checkbox.setAttribute("class","check");
    checkbox.setAttribute("type","checkbox");
    buttonDelete.setAttribute("class","buttonDelete");

    let montant;
    let montants;
        montants= [];

    if (prix.value === true || isNaN(prix.value) && name.value === true || !isNaN(name.value) && quantity.value === "" || quantity.value <=0){
        quantity.value = 1;
    }


    montant = parseFloat(prix.value) * parseInt(quantity.value);
    montants.push(montant);


    span.innerText = "F";
    p1.innerText = name.value.toUpperCase() ;
    p2.innerText = montant ;
    p3.innerText = quantity.value ;
    p4.innerText = prix.value ;
    buttonDelete.textContent = "Supprimer";
    buttonEditer.textContent = "Editer";

    div.appendChild(checkbox);
    p2.appendChild(span);
    div.appendChild(p1);
    div.appendChild(p3);
    div.appendChild(p4);
    div.appendChild(p2);
    div.appendChild(buttonEditer);
    div.appendChild(buttonDelete);


    course.appendChild(div);

    // Ajouter le prix de l'article à la somme totale
    sommeTotale += montant;

    // Mettre à jour l'affichage de la somme totale
    totale.innerText = "Total : " + sommeTotale.toFixed(0) + "F";


    //Supprimer une course
    buttonDelete.addEventListener("click",(e)=>{
        e.preventDefault()
        div.remove();
        sommeTotale -= montant;
        // Mettre à jour l'affichage de la somme totale
        totale.innerText = "Total : " + sommeTotale.toFixed(0) + "F";
    })



    //Effacer les champ precedemment saisie
    name.value = "" ;
    prix.value = "" ;
    quantity.value = "";

}