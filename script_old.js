console.log("Hello Word")
let nomEquipement = "Switch Cisco 2960"
let nombrePorts = 24; 
let estActif = true; 
let adresseIP = "192.168.1.254"
let debit = 1000.5; 
let vitesse = 0

console.log("nom:" + nomEquipement)
console.log("nombrePorts:" + nombrePorts)
console.log("estActif:" + estActif)
console.log("adresseIP:" + adresseIP)
console.log("debit:" + debit)

let motDePasse = "Cyber2024!"
let longueur = motDePasse.length

console.log("Mot de passe : " + motDePasse)
console.log("Longueur : "+ longueur + "caractères" )

if (longueur < 12) {
    console.log("Sécurité faible")
    console.log("Recommandation : utilisez au moins 6 caractères")
} else if (longueur < 10) { 
    console.log("Sécurité moyenne")
    console.log("Recommandation : utilisez au moins 10 caractères")
} else {
    console.log("Sécurité forte")
}

if (vitesse === 0) {
    console.log("ERREUR")
    console.log("Aucune connexion détectée")
} else {
    if (vitesse < 10  ) {
    console.log("Connexion lente")
    console.log("Vérifier les câbles")
    }   else if (vitesse < 100) {
    console.log("Connexion correcte")
    console.log("Débit Standard")
    }   else if(vitesse < 1000){
    console.log("Connexion rapide")
    console.log("Bon débit")
    }   else if (vitesse >= 1000){
    console.log("Connexion très rapide")
    console.log("Fibre optique")
    }
}

console.log("====== Boucle FOR ======")
let decompte = 10 
for (let i = 0; decompte > 0; i++) { 
    console.log("Decompte: ")
    decompte --
}

let ports = [20, 80, 443, 3306, 8080];
console.log(ports[2])
for (let i =0; i < ports.length; i++) {
    console.log("Port :" + ports[i])
}

let serveurs = ["8.8.8.8", "1.1.1.1", "208.67.222.222", "192.168.1.1", "10.0.0.1"]; 
let TotalServeurs = 0
for (let i =0; i < serveurs.length; i++) {
    console.log("Serveur:" + serveurs [i])
    console.log("Temps de réponses:" + i*15 + "ms")
}
console.log("total:" + TotalServeurs)
