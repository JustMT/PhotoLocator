//CARTE//
//Initialisation de la carte//
var carte = L.map('maCarte').setView([39.462,-75.432], 7);
//Application des tuiles//
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 3,
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoianVzdG10IiwiYSI6ImNrNGVlYnRpcDBiemEzZm8ycndwdHZvemIifQ.0aBgTvtm6urg0PbA_Jb4IQ'
}).addTo(carte);

//MARQUEURS//
//Bibliothèque des lieux//
var lieux = {

    //Confluence//
    "Musée des Confluences": {
        "lat": 45.73262,
        "lon": 4.81818,
        "pays": "France",
        "ville": "Lyon",
        "lien": '../page_lieu/Musée_des_Confluences.html'
    },

    //Bellecour//
    "Place Bellecour": {
        "lat": 45.75783,
        "lon": 4.83218,
        "pays": "France",
        "ville": "Lyon",
        "lien": '../page_lieu/Bellecour.html'
    },

    "Place de la République": {
        "lat": 45.76115,
        "lon": 4.83572,
        "pays": "France",
        "ville": "Lyon",
        "lien": '../page_lieu/Republique.html'
    },

    //Paris//
    "Tour Eiffel": {
        "lat": 48.85822,
        "lon": 2.29453,
        "pays": "France",
        "ville": "Paris",
        "lien": '../page_lieu/Eiffel.html'
    },
    "Château de Versailles": {
        "lat": 48.807355,
        "lon": 2.110141,
        "pays": "France",
        "ville": "Versailles",
        "lien": '../page_lieu/Versailles.html'
    },
    "Basilique du Sacré-Coeur de Montmartre": {
        "lat": 48.884790,
        "lon": 2.343431,
        "pays": "France",
        "ville": "Paris",
        "lien": '../page_lieu/Scoeur.html'
    },

    //Venissieux//
    "Lycée Polyvalent Jacques Brel": {
        "lat": 45.69367,
        "lon": 4.87937,
        "pays": "France",
        "ville": "Vénissieux",
        "lien": '../page_lieu/Lycée.html'
    },

    //Marseille//
    "Parc National des Calanques": {
        "lat": 43.218,
        "lon": 5.431,
        "pays": "France",
        "ville": "Marseille",
        "lien": '../page_lieu/Calanques.html'
    },

    ///USA///
    //Washington//
    "Capitole des États-Unis": {
        "lat": 38.8905,
        "lon": -77.0104,
        "pays": "États-Unis",
        "ville": "Washington DC",
        "lien": '../page_lieu/US_Capitol.html'
    },
    "Lincoln Memorial": {
        "lat": 38.8893,
        "lon": -77.0499,
        "pays": "États-Unis",
        "ville": "Washington DC",
        "lien": '../page_lieu/lincoln.html'
    },
    "Maison Blanche": {
        "lat": 38.8986,
        "lon": -77.0365,
        "pays": "États-Unis",
        "ville": "Washington DC",
        "lien": '../page_lieu/Whouse.html'
    },

    //New York//
    "Times Square": {
        "lat": 40.7584,
        "lon": -73.9854,
        "pays": "États-Unis",
        "ville": "New York City",
        "lien": '../page_lieu/TSquare.html'
    },

}
//Boucle d'ajout des marqueurs//
for (var m in lieux) {
    var mark = L.marker([lieux[m].lat, lieux[m].lon]).addTo(carte);
    mark.bindPopup("<p>" + "<div id='" + "name'" + ">" + "<a href='" + lieux[m].lien + "'>" + m + "</a>" + "</div>" + "<div id='" + "place'" + ">" + lieux[m].ville + ", " + lieux[m].pays + "</p></div>");
}
