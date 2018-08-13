
let espaceMembre=document.querySelector('.espace-membre-link')
let inscrireLink=document.querySelector('.inscrire-link')
let connecterLink=document.querySelector('.conecter-link')
let accueilLink=document.querySelector('.acceuil-link')
let fullName=document.querySelector('.full-name')
let pseudo=document.querySelector('.pseudo')

let mdp1=document.querySelector('.pass-word')
let mdp2=document.querySelector('.confirm-pass-word')
let emailPseudo=document.querySelector('.email-pseudo')
let btnSubmit=document.querySelector('.btn-submit')
let formVerif=document.querySelector('.form-inscription')



accueilLink.addEventListener('click',(event)=>{
    document.querySelector('.inscrire').classList.add("hidden")
    document.querySelector('.acceuil').classList.remove("hidden")
    document.querySelector('.connecter').classList.add("hidden")
});

inscrireLink.addEventListener('click',(event)=>{
    document.querySelector('.acceuil').classList.add("hidden")
    document.querySelector('.connecter').classList.add("hidden")
    document.querySelector('.inscrire').classList.remove("hidden")
    document.querySelector('.active').classList.remove("active")
});

connecterLink.addEventListener('click',(event)=>{
    document.querySelector('.acceuil').classList.add("hidden")
    document.querySelector('.connecter').classList.remove("hidden")
    document.querySelector('.inscrire').classList.add("hidden")
    document.querySelector('.active').classList.remove("active")
});





function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

function verifName(champ)
{
   if(champ.value.length < 6 || champ.value.length > 20)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}


function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}




function verifPassConfirm(champ1,champ2)
{
    
   if(champ1.value != champ2.value)
   {
      surligne(champ2, true);
      alert("confirmation de mot de passe incorrecte")
      champ2.value="";
      return false;
   }
   else
   {
      surligne(champ2, false);
      return true;
   }
}

function verifPasss(champ)
{
   var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      alert("mot de passe incorrecte")
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifPseudo(champ)
{
   var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      alert("pseudo incorrecte")
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}





function verifForm()
{
 
   var pseudoFull = verifName(pseudo);
   var fullNameOk = verifName(fullName);
   var mailOk = verifMail(emailPseudo);
   var motPassConfirm=verifPassConfirm(mdp1,mdp2)
   var motPasss=verifPasss(mdp1)
   if(fullNameOk && mailOk && motPassConfirm && motPasss && pseudoFull)
     { 
      alert("Votre formulaire envoyer avec sucées");
        fullName.value=""
        pseudo.value=""
        mdp1.value=""
        mdp2.value=""
        emailPseudo.value=""
      return true;
    }
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}





