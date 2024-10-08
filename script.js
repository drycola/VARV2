const agents = [
    {
        name: "Jett",
        description: "She fast as fuck boiii",
        image: "images/jett.jpg"
    },
    {
        name: "Phoenix",
        description: "Heal toxic teammates with E skill:)",
        image: "images/phoenix.jpg"
    },
    {
        name: "Sage",
        description: "Bark for a heal!",
        image: "images/sage.jpg"
    },
    {
        name: "Sova",
        description: "Get yo lineups ready!",
        image: "images/sova.jpg"
    },
    {
        name: "Cypher",
        description: "Stalker.",
        image: "images/cypher.jpg"
    },
    {
        name: "Breach",
        description: "LEEEEEETS GOOOOO!",
        image: "images/breach.jpg"
    },
    {
        name: "Brimstone",
        description: "He got dem buns;>",
        image: "images/brimstone.jpg"
    },
    {
        name: "Chamber",
        description: "Mewing mastah.",
        image: "images/chamber.jpg"
    },
    {
        name: "Fade",
        description: "NIIIIIGHTMAAARE",
        image: "images/fade.jpg"
    },
    {
        name: "Gekko",
        description: "Heheh qt babies",
        image: "images/gekko.jpg"
    },
    {
        name: "Harbor",
        description: ":)",
        image: "images/harbor.jpg"
    },
    {
        name: "Iso",
        description: "Kidnapper",
        image: "images/iso.jpg"
    },
    {
        name: "Kay/o",
        description: "Toaster.",
        image: "images/kayo.jpg"
    },
    {
        name: "Killjoy",
        description: "HOLD THE FORT DOOOOWN",
        image: "images/killjoy.jpg"
    },
    {
        name: "Neon",
        description: "RUUUUN",
        image: "images/neon.jpg"
    },
    {
        name: "Omen",
        description: "qt",
        image: "images/omen.jpg"
    },
    {
        name: "Raze",
        description: "HEHEHEHEHE",
        image: "images/raze.jpg"
    },
    {
        name: "Reyna",
        description: "GO GET THEIR SOULS",
        image: "images/reyna.jpg"
    },
    {
        name: "Skye",
        description: "BLINDS FOR EVERYONE. EQUALITY!",
        image: "images/skye.jpg"
    },
    {
        name: "Viper",
        description: "Toxic? Or just misunderstood?",
        image: "images/viper.jpg"
    },
    {
        name: "Vyse",
        description: "Prettiest blind:3",
        image: "images/vyse.jpg"
    },
    {
        name: "Yoru",
        description: "Be sneaky or dooky",
        image: "images/yoru.jpg"
    },
    {
        name: "Clove",
        description: "NOOOO PEEEKING",
        image: "images/clove.jpg"
    },
    {
        name: "Astra",
        description: "No star? Be the star! WATASHI WA STAR!",
        image: "images/astra.jpg"
    }
];

const randomizeButton = document.getElementById('randomizeButton');
const agentImage = document.getElementById('agentImage');
const agentName = document.getElementById('agentName');
const agentDescription = document.getElementById('agentDescription');

function getRandomAgent() {
    const randomIndex = Math.floor(Math.random() * agents.length);
    return agents[randomIndex];
}

randomizeButton.addEventListener('click', () => {
    const randomAgent = getRandomAgent();
    agentImage.src = randomAgent.image;
    agentName.textContent = randomAgent.name;
    agentDescription.textContent = randomAgent.description;
});
