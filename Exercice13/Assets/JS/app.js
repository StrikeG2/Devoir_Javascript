/*
Exercice 13 :
Créez un formulaire de connexion avec des champs d'entrée pour le nom d'utilisateur 
et le mot de passe. Utilisez JavaScript pour valider les champs lorsque 
l'utilisateur clique sur le bouton "Se connecter" et affichez un message 
d'erreur s'ils sont vides.

*/

function validerChamps(){

    // On stocke d'abord la valeur des différents champs
    let field1 = document.forms["myForm"]["userid"].value
    let field2 = document.forms["myForm"]["passwd"].value

    //On effectue ensuite des tests pour afficher un message d'alerte en fonction de ceux-ci
    if (field1 == "" && field2 != ""){
        alert("Le nom d'utilisateur est vide")
        return false
    }
    else if (field2 == "" && field1 != ""){
        alert("Le mot de passe est vide")
        return false
    }
    else if (field1 == "" && field2 == ""){
        alert("Les deux champs sont vides")
        return false
    }
    else{
        alert("Connexion réussie")
        location.reload() // Pour recharger la page
    }
}

