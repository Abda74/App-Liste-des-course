const name = document.getElementById("name");
const prix = document.getElementById("prix");
const btnEntrer = document.getElementById("btnEntrer");
const totale = document.querySelector(".total");
const course = document.querySelector(".courses")
const  modal = document.querySelector(".modal");

// Variable pour stocker la somme totale
let sommeTotale = 0;


btnEntrer.addEventListener("click",(e)=>{
    e.preventDefault();

    if (prix.value === "" || isNaN(prix.value) || name.value === "" || !isNaN(name.value)){

        //donnée invalide
        modal.style.display = "block";
        setTimeout(()=>{
            modal.style.display = "none";
            name.value = "" ;
            prix.value = "" ;
            modal.style.transition = "transform .7s ease-out"
        } ,2000)


    }else{
        const div = document.createElement("div");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const span = document.createElement("span");

        div.setAttribute("class","addCourse");
        p1.setAttribute("class","nomCourse");
        p2.setAttribute("class","prixCourse");
        span.setAttribute("class","franPrix");

        span.innerText = "F";
        p1.innerText = name.value ;
        p2.innerText = prix.value ;

        p2.appendChild(span);
        div.appendChild(p1);
        div.appendChild(p2)

        course.appendChild(div);

        // Ajouter le prix de l'article à la somme totale
        sommeTotale += parseFloat(prix.value);

        // Mettre à jour l'affichage de la somme totale
        totale.innerText = "Total : " + sommeTotale.toFixed(0) + "F";



        name.value = "" ;
        prix.value = "" ;
    }
});
