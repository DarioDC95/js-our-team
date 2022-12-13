// MILESTONE 0
// Creo un array di oggetti con le informazioni del soggetto
const profiles = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
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

let profileDiv = document.getElementsByClassName('profile')
console.log(profileDiv)

// MILESTONE 1/2
// Prendere gli elementi degli oggetti da dentro l'array e stamparli in console
for (let i = 0; i < profiles.length; i++) {
    console.log(profiles[i]);
    profileDiv[i].innerHTML = `<img class="card-img-top" src="../img/${profiles[i].image}" alt="Profile"> <div class="card-body"><h4 class="family-serif grey bold">${profiles[i].name}</h4><p class="grey">${profiles[i].role}</p>`
    for (const key in profiles[i]) {
        // console.log(key + ":" + " " + profiles[i][key])
        console.log(`${key}: ${profiles[i][key]}`)
    }
}
