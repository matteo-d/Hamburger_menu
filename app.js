const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

btn.addEventListener('click', () => {
   // nav.classList retourne les attribut de l'élément nav 
    // .toggle ajoute la classe active à l'élément ciblé
    nav.classList.toggle('active');
    btn.classList.toggle('active');

});