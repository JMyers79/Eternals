const eternals = [
    {
        name: "Ikaris",
        abilities: ["Flight", "Super Strength", "Energy Projection"],
        img: "images/Ikaris.png"
    },
    {
        name: "Thena",
        abilities: ["Weapon Summoning", "Super Agility", "Combat Skills"],
        img: "images/thena.jpg"
    },
    {
        name: "Kingo",
        abilities: ["Energy Projection", "Immortality", "Martial Arts", "Flight"],
        img: "images/kingo.avif"
    },
    {
        name: "Phastos",
        abilities: ["Technopathy", "Inventor", "Immortality"],
        img: "images/phastos.jpg"
    }
    ,{
        name: "Gilgamesh",
        abilities: ["Super Strength", "Endurance", "Combat Skills"],
        img: "images/gilgamesh.webp"
    },
];

// list of attributes
const aHeader = document.createElement("header");
const aHeading = document.createElement("h3");       
aHeading.innerText = "Abilies";              
aHeader.append(aHeading);                                   
document.body.append(aHeader); 

const aNavBar = document.createElement("nav");
aNavBar.classList.add("NavBar");
const aMenuList = document.createElement("ul");

eternals.forEach(ability => {
    const listItem = document.createElement("li");
    listItem.innerText = ability.abilities;
    aMenuList.append(listItem);
});
aNavBar.append(aMenuList);
document.body.append(aNavBar);

// List of eternals
const header = document.createElement("header");
const heading = document.createElement("h3");       
heading.innerText = "The Eternals";              
header.append(heading);                                   
document.body.append(header); 

const navBar = document.createElement("nav");
navBar.classList.add("NavBar");
const menuList = document.createElement("ul");

eternals.forEach(eternal => {
    const listItem = document.createElement("li");
    listItem.innerText = eternal.name;
    menuList.append(listItem);
});
navBar.append(menuList);
document.body.append(navBar);

// const message = document.createElement("text")
// message.innerText ="What attribute skill are you looking for? "
// document.body.append(message)

// let textbox = document.createElement("input");
// textbox.maxLength = 25;
// textbox.id = "attribute"
// document.body.append(textbox);

//let eternalsWithAttribute = []
const showInfo = () => {
let eternalAttribute= document.querySelector("#attribute").value;
console.log(eternalAttribute);
eternals.find(eternal =>{
    for (let i = 0; i < eternal.abilities.length; i++) {
        if (eternal.abilities[i] == eternalAttribute) {
             const eternalInfo = document.createElement("div");
             const eternalName = document.createElement("p");
             eternalName.innerText = `${eternal.name} is skilled at the ${eternalAttribute} ability`;

             const eternalImage = document.createElement("img");
             eternalImage.src = eternal.img;
             eternalImage.alt = eternal.name;
             eternalInfo.append(eternalName);
             eternalInfo.append(eternalImage);
            console.log(eternalInfo)
            document.body.append(eternalInfo)
           // eternalsWithAttribute.push(eternal)
    }
  }
  
});

//  console.log(eternalsWithAttribute)
};

// eternalsWithAttribute.forEach(eternal => {
//     const eternalInfo = document.createElement("p");
//     str = `${eternal.name} is a skilled ${sAbility}`
//     eternal.innerText = `${eternal.name} is a skilled ${sAbility}`
//     console.log(str)

// })