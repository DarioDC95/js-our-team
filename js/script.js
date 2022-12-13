// MILESTONE 0
// Creo un array di oggetti con le informazioni del soggetto
const profiles = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnet-founder-ceo.jpg"
    },
    
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
]

// MILESTONE 1
// Prendere gli elementi degli oggetti da dentro l'array e stamparli in console
for (let i = 0; i < profiles.length; i++) {
    console.log(profiles[i]);
    for (const key in profiles[i]) {
        console.log(key + ":" + " " + profiles[i][key])
    }
}
