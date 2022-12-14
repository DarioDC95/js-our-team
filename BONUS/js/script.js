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

console.log(profiles)

// Funzioni per la colonna e vi appendo la card all'interno
function divColProfile(member) {
    let column = document.createElement('div');
    column.className = "col-6 col-lg-4";
    let cardProfile = divCardProfile(member);
    column.appendChild(cardProfile);
    console.log(column);
    return column;
}

// Funzione per la Card
function divCardProfile(member) {
    let divCard = document.createElement('div');
    divCard.className = "card text-center profile";
    divCard.innerHTML = `<img class="card-img-top" src="../img/${member.image}" alt="Profile"> 
                         <div class="card-body">
                            <h4 class="family-serif grey bold">${member.name}</h4>
                            <p class="grey">${member.role}</p>
                         </div>`;
    console.log(divCard);
    return divCard;
}

// Incolliamo le colonne nel DOM
for (let i = 0; i < profiles.length; i++) {
    let teamMember = profiles[i];
    let columnProfile = divColProfile(teamMember);
    document.getElementById('profiles-DOM').appendChild(columnProfile);
}