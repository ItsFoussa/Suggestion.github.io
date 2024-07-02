// Declare your arrays here
const games = {
    action: [
        { name: "God of War", img: "https://images.gog-statics.com/373a2f94eb35e1fb653999a3620c78d94f17d9db50191596a61c8a566374e3b7.jpg" },
        { name: "Grand Theft Auto V", img: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/38/gaming-gta5-art2.jpg?resize=980:*" },
        { name: "Call of Duty: Modern Warfare", img: "https://cdn.cloudflare.steamstatic.com/steam/apps/2000950/header.jpg?t=1678294805" }
    ],
    comedy: [
        { name: "South Park: The Stick of Truth", img: "https://assets1.ignimgs.com/2014/03/01/spsot0228141280jpg-df0f36_160w.jpg?width=1280" },
        { name: "It Takes Two", img: "https://variety.com/wp-content/uploads/2022/01/It-Takes-Two-e1643647274115.jpg?w=1000&h=563&crop=1" },
        { name: "Undertale", img: "https://i.kickstarter.com/assets/011/533/904/f58978f175eba8065d1b5afe4545876d_original.png?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=HmN9N%2FgGVR2Z9Tu07cEJUUpLCIsUTCimBfxhNcWm%2BHk%3D" }
    ],
    drama: [
        { name: "The Last of Us", img: "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_QL75_UX500_CR0,230,500,281_.jpg" },
        { name: "Life is Strange", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/319630/header.jpg?t=1662395426" },
        { name: "Red Dead Redemption 2", img: "https://techcrunch.com/wp-content/uploads/2018/10/rdr2-hero.png?w=1024" }
    ],
    adventure: [
        { name: "The Legend of Zelda: Breath of the Wild", img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58" },
        { name: "Uncharted 4", img: "https://preview.redd.it/fanart-i-recently-made-for-the-uncharted-4-v0-o2t6zeona8q91.jpg?auto=webp&s=7729676564151ac09f90fff58ab563228d113153" },
        { name: "Minecraft", img: "https://i.ebayimg.com/images/g/JnQAAOSwmthgvSM~/s-l1600.jpg" }
    ],
    puzzle: [
        { name: "Portal 2", img: "https://assets-prd.ignimgs.com/2021/12/08/portal2-1638924084230.jpg" },
        { name: "The Talos Principle", img: "https://image.api.playstation.com/cdn/UP3643/CUSA00910_00/rG3Zwv26mr6rnygD3ZCBUG80dXsWtZQl.png" },
        { name: "Tetris", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3cZ0JQ6wfeZWmnhUtDSVrM6r1Jh6JkIv39w&s" }
    ]
};

// Make sure to declare your HTML elements as variables!
let inputElement = document.querySelector("input");
let submitButton = document.querySelector("button");
let contentDiv = document.querySelector("div.content");

// Submit Button
submitButton.addEventListener("click", function() {
    // Get the user's input
    let userGenre = inputElement.value.toLowerCase();
    
    // Check if the genre exists in the games object
    if (games[userGenre]) {
        // Get a random game suggestion from the chosen genre
        let randomGame = games[userGenre][Math.floor(Math.random() * games[userGenre].length)];
        // Display the game suggestion with image
        contentDiv.innerHTML = `
            <p>How about trying <strong>${randomGame.name}</strong>?</p>
            <img src="${randomGame.img}" alt="${randomGame.name}" style="width:300px; height:auto;">
        `;
    } else {
        // Display an error message if the genre is not found
        contentDiv.innerHTML = `<p>Sorry, we don't have suggestions for that genre. Try another one!</p>`;
    }
});
