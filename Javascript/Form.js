function results() {
    var firstname = document.getElementById("firstName").value;
    var lastname = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var email = document.getElementById("email").value;
    var card = document.getElementById("card").value;
    var expiration = document.getElementById("expiration").value;

    alert("Your order has been registered, Thank you for your purchase !")
    
}

/** ajouter informations paiement + regex + regex avec picto selon les 4 premiers chiffres */