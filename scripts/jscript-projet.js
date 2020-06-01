//CARTE//
    //Initialisation de la carte//
var carte = L.map('maCarte').setView([36.74, -45.26], 3);
    //Application des tuiles//
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
     minZoom: 3 ,maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoianVzdG10IiwiYSI6ImNrNGVlYnRpcDBiemEzZm8ycndwdHZvemIifQ.0aBgTvtm6urg0PbA_Jb4IQ'
}).addTo(carte);

//MARQUEURS//
    //Bibliothèque des lieux//
var lieux = {
        //Confluence//
    //"Confluence": { "lat": 45.7406, "lon": 4.8179, "lien": './page_lieu/More.html' },//
    "Musée des Confluences": { "lat": 45.73262, "lon": 4.81818, "pays": "France", "ville": "Lyon", "lien": './page_lieu/Musée_des_Confluences.html' },
    //"Confluence des fleuves": { "lat": 45.7284, "lon": 4.8186, "lien": './page_lieu/More.html' },//
   
        //Bellecour//
    "Place Bellecour": { "lat": 45.75783, "lon": 4.83218, "pays": "France", "ville": "Lyon", "lien": './page_lieu/Bellecour.html' },
    //"Fontaine des Jacobins": { "lat": 45.76050, "lon": 4.83355, "lien": './page_lieu/More.html' },// 
	"Place de la République": { "lat": 45.76115, "lon": 4.83572, "pays": "France", "ville": "Lyon", "lien": './page_lieu/Republique.html' },	
	
        //Paris//
	"Tour Eiffel": { "lat": 48.85822, "lon": 2.29453, "pays": "France", "ville": "Paris", "lien": './page_lieu/Eiffel.html' },
    "Château de Versailles": {"lat": 48.807355, "lon": 2.110141, "pays": "France", "ville": "Versailles", "lien": './page_lieu/Versailles.html'},
    "Basilique du Sacré-Coeur de Montmartre": {"lat": 48.884790, "lon": 2.343431, "pays": "France", "ville": "Paris", "lien": './page_lieu/Scoeur.html'},
	
		//Nice//
//	"Panorama Baie des Anges de la Tour Bellanda": { "lat": 43.6942590, "lon": 7.2793798, "pays": "France", "ville": "Nice", "lien": './page_lieu/Baie_anges.html' },
	
        //Venissieux//
    "Lycée Polyvalent Jacques Brel": { "lat": 45.69367, "lon": 4.87937, "pays": "France", "ville": "Vénissieux", "lien": './page_lieu/Lycée.html' },
//    "Château d'eau des Minguettes": { "lat": 45.69528, "lon": 4.87453, "pays": "France", "ville": "Vénissieux", "lien": './page_lieu/Cheau.html' },
//		
        //Marseille//
	"Parc National des Calanques": { "lat": 43.218, "lon": 5.431, "pays": "France", "ville": "Marseille", "lien": './page_lieu/Calanques.html' },
	
		//Espagne//
//	"Musée National d'art de Catalogne": { "lat": 41.371, "lon": 2.152, "pays": "Espagne", "ville": "Barcelone", "lien": './page_lieu/Catalogne.html' },
    
        //Martinique//
//    "Baie des Raisinniers": { "lat": 14.73704, "lon": -60.95510, "pays": "Martinique", "ville": "Trinité", "lien": './page_lieu/Raisinniers.html' },
    //"Sainte-Luce": {"lat": 14.46358, "lon": -60.93459, "lien": './page_lieu/More.html' },//
    
            ///USA///
        //Washington//
    "Capitole des Etats-Unis": { "lat": 38.8905, "lon": -77.0104, "pays": "Etats-Unis", "ville": "Washington DC", "lien": './page_lieu/US_Capitol.html'},
    "Lincoln Memorial": { "lat": 38.8893, "lon": -77.0499, "pays": "Etats-Unis", "ville": "Washington DC", "lien": './page_lieu/lincoln.html'},
    "Maison Blanche": { "lat": 38.8986, "lon": -77.0365, "pays": "Etats-Unis", "ville": "Washington DC", "lien": './page_lieu/Whouse.html'},
        //New York//
    "Times Square": { "lat": 40.7584, "lon": -73.9854, "pays": "Etats-Unis", "ville": "New York City", "lien": './page_lieu/TSquare.html'},
/*   
	"L": { "lat": 000, "lon": 000, "lien": './page_lieu/X.html' },
    "L": { "lat": 000, "lon": 000, "lien": './page_lieu/X.html' },
    "L": { "lat": 000, "lon": 000, "lien": './page_lieu/X.html' },
    "L": { "lat": 000, "lon": 000, "lien": './page_lieu/X.html' },
    "L": { "lat": 000, "lon": 000, "lien": './page_lieu/X.html' },*/
}
    //Boucle d'ajout des marqueurs//
for (var m in lieux) {
    var mark = L.marker([lieux[m].lat, lieux[m].lon]).addTo(carte);
    mark.bindPopup("<p>"+"<div id='"+"name'"+">"+"<a href='"+lieux[m].lien+"'>"+m+"</a>"+"</div>"+"<div id='"+"place'"+">"+lieux[m].ville+", "+lieux[m].pays+"</p></div>");
}
