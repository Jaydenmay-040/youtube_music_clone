// YOUR FAVOURITES
let favourites = [
    {
        cover: "/images/Pooh_Shiesty_-_Back_in_Blood.png",
        title: "Back in Blood (feat. Lil Durk)",
        subtitle: "Song • Pooh Shiesty",
    },
    {
        cover: "/images/Childish_Gambino_-_Redbone.png",
        title: "Redbone",
        subtitle: "Song • Childish Gambino",
    },
    {
        cover: "/images/Lil_Skies_-_Unbothered_(Deluxe).png",
        title: "Trust Nobody",
        subtitle: "Song • Lil Skies",
    },
    {
        cover: "/images/Maybach_42_Dugg.jpg",
        title: "Maybach (feat. Future)",
        subtitle: "Song • 42 Dugg",
    },
    {
        cover: "/images/Childish_Gambino_-_Redbone.png",
        title: "Me and Your Mama",
        subtitle: "Song • Childish Gambino",
    },
    {
        cover: "/images/Shordie Shordie & Murda Beatz_ Memory Lane.jpg",
        title: "Memory Lane",
        subtitle: "Album • Shordie Shordie",
    },
    {
        cover: "/images/Pop_Smoke_-_Mood_Swings.png",
        title: "Mood Swings (feat. Lil Tjay)",
        subtitle: "Song • Pop Smoke",
    },
    {
        cover: "/images/Juice_Wrld_-_Legends_Never_Die.png",
        title: "Conversations",
        subtitle: "Song • Juice Wrld",
    },
];

function newCard(card) {
    let newCard = `
    <div class="favourite">
        <div class="result_container">
            <img class="result" src="${card.cover}" alt="">
        </div>
        <h1 class="title style">${card.title}</h1>
        <div class="subtitle_content">
            <span class="explicit style">E</span>
            <h1 class="subtitle style">${card.subtitle}</h1>
        </div>
    </div>
    `;

    return newCard;
}

function displayCards() {
    let container = document.querySelector(".favourites");
    for (favourite of favourites) {
        let card = newCard(favourite);
        container.innerHTML += card;
    }
}
displayCards();

// YOUR MORNING MUSIC
let morningMusics = [
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/Pop_Smoke_-_Meet_The_Woo_II.jfif",
        title: "Meet The Woo II",
        subtitle: "Album • Pop Smoke",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
];

function newCover(cover) {
    let newCover = `
    <div class="listen_again_music">
        <div class="result_container">
            <img class="result" src="${cover.cover}" alt="">
        </div>
        <h1 class="title style">${cover.title}</h1>
        <div class="subtitle_content">
            <span class="explicit style">E</span>
            <h1 class="subtitle style">${cover.subtitle}</h1>
        </div>
    </div>
    `;

    return newCover;
}

function displayCovers() {
    let container = document.querySelector(".morning_music");
    for (morningMusic of morningMusics) {
        let cover = newCover(morningMusic);
        container.innerHTML += cover;
    }
}
displayCovers();

// ARTISTS
let artists = [
    {
        cover: "/images/Pop_Smoke.png",
        name: "Artist • Pop Smoke"
    },
    {
        cover: "/images/Childish_Gambino.jfif",
        name: "Artist • Childish Gambino"
    },
    {
        cover: "/images/Juice_Wrld.jfif",
        name: "Artist • Juice Wrld"
    },
    {
        cover: "/images/Lil_Baby.jfif",
        name: "Artist • Lil Baby"
    },
    {
        cover: "/images/Moneybagg_Yo.jfif",
        name: "Artist • Pop Smoke"
    },
    {
        cover: "/images/Young_MA.jpg",
        name: "Artist • Young MA"
    },
];

function newArtist(art) {
    let newArtist = `
    <div class="listen_again_music">
        <div class="artist_img_container">
            <img class="artist_img" src="${art.cover}" alt="">
        </div>
        <h1 class="title style">${art.name}</h1>
    </div>
    `;

    return newArtist;
}

function displayArtists() {
    let container = document.querySelector(".artists");
    for (artist of artists) {
        let art = newArtist(artist);
        container.innerHTML += art;
    }
}
displayArtists();

// START RADIO
let quickPicks = [
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/Pop_Smoke_-_Meet_The_Woo_II.jfif",
        title: "Meet The Woo II",
        subtitle: "Album • Pop Smoke",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
];
let quickPick2 = [
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/Pop_Smoke_-_Meet_The_Woo_II.jfif",
        title: "Meet The Woo II",
        subtitle: "Album • Pop Smoke",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
];
let quickPick3 = [
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/Pop_Smoke_-_Meet_The_Woo_II.jfif",
        title: "Meet The Woo II",
        subtitle: "Album • Pop Smoke",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
];
let quickPick4 = [
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/Pop_Smoke_-_Meet_The_Woo_II.jfif",
        title: "Meet The Woo II",
        subtitle: "Album • Pop Smoke",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
];
let quickPick5 = [
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/Pop_Smoke_-_Meet_The_Woo_II.jfif",
        title: "Meet The Woo II",
        subtitle: "Album • Pop Smoke",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
];
let quickPick6 = [
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/Pop_Smoke_-_Meet_The_Woo_II.jfif",
        title: "Meet The Woo II",
        subtitle: "Album • Pop Smoke",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
];
let quickPick7 = [
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/Pop_Smoke_-_Meet_The_Woo_II.jfif",
        title: "Meet The Woo II",
        subtitle: "Album • Pop Smoke",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
    {
        cover: "/images/YoungBoy_NBA_-_Sincerely_Kentrell.jfif",
        title: "Sincerely Kentrell",
        subtitle: "Album • YoungBoy NBA",
    },
];

function newPick(pick) {
    let newPick = `
    <div class="start_radio_music">
        <div class="radio_music">
            <div class="pick_container">
                <img class="pick" src="${pick.cover}" alt="">
            </div>
            <div class="pick_container">
                <h1 class="pick_title style">${pick.title}</h1>
                <div class="pick_subtitle_content">
                    <span class="explicit style">E</span>
                    <h1 class="pick_subtitle style">${pick.subtitle}</h1>
                </div>
            </div>
        </div>
    </div>
    `;
    return newPick;
};

function displayPick() {
    let container = document.querySelector(".quick_picks");
    for (quickPick of quickPicks) {
        if (!container.querySelector('.pickSubContainer')) {
            container.innerHTML += `<div class="pickSubContainer"></div>`
        }

        subContainers = document.querySelectorAll('.pickSubContainer')

        let pick = newPick(quickPick);
        subContainers[subContainers.length - 1].innerHTML += pick;
        if (subContainers[subContainers.length - 1].getElementsByClassName("start_radio_music").length == 4) {
            container.innerHTML += `<div class="pickSubContainer"></div>`
        }
    };
    for (quickPick of quickPick2) {
        if (!container.querySelector('.pickSubContainer')) {
            container.innerHTML += `<div class="pickSubContainer"></div>`
        }

        subContainers = document.querySelectorAll('.pickSubContainer')

        let pick = newPick(quickPick);
        subContainers[subContainers.length - 1].innerHTML += pick;
        if (subContainers[subContainers.length - 1].getElementsByClassName("start_radio_music").length == 4) {
            container.innerHTML += `<div class="pickSubContainer"></div>`
        }
    };
    for (quickPick of quickPick3) {
        if (!container.querySelector('.pickSubContainer')) {
            container.innerHTML += `<div class="pickSubContainer"></div>`
        }

        subContainers = document.querySelectorAll('.pickSubContainer')

        let pick = newPick(quickPick);
        subContainers[subContainers.length - 1].innerHTML += pick;
        if (subContainers[subContainers.length - 1].getElementsByClassName("start_radio_music").length == 4) {
            container.innerHTML += `<div class="pickSubContainer"></div>`
        }
    };
    for (quickPick of quickPick4) {
        if (!container.querySelector('.pickSubContainer')) {
            container.innerHTML += `<div class="pickSubContainer"></div>`
        }

        subContainers = document.querySelectorAll('.pickSubContainer')

        let pick = newPick(quickPick);
        subContainers[subContainers.length - 1].innerHTML += pick;
        if (subContainers[subContainers.length - 1].getElementsByClassName("start_radio_music").length == 4) {
            container.innerHTML += `<div class="pickSubContainer"></div>`
        }
    };
    for (quickPick of quickPick5) {
        if (!container.querySelector('.pickSubContainer')) {
            container.innerHTML += `<div class="pickSubContainer"></div>`
        }

        subContainers = document.querySelectorAll('.pickSubContainer')

        let pick = newPick(quickPick);
        subContainers[subContainers.length - 1].innerHTML += pick;
        if (subContainers[subContainers.length - 1].getElementsByClassName("start_radio_music").length == 4) {
            container.innerHTML += `<div class="pickSubContainer"></div>`
        }
    };
    for (quickPick of quickPick6) {
        if (!container.querySelector('.pickSubContainer')) {
            container.innerHTML += `<div class="pickSubContainer"></div>`
        }

        subContainers = document.querySelectorAll('.pickSubContainer')

        let pick = newPick(quickPick);
        subContainers[subContainers.length - 1].innerHTML += pick;
        if (subContainers[subContainers.length - 1].getElementsByClassName("start_radio_music").length == 4) {
            container.innerHTML += `<div class="pickSubContainer"></div>`
        }
    };
    for (quickPick of quickPick7) {
        if (!container.querySelector('.pickSubContainer')) {
            container.innerHTML += `<div class="pickSubContainer"></div>`
        }

        subContainers = document.querySelectorAll('.pickSubContainer')

        let pick = newPick(quickPick);
        subContainers[subContainers.length - 1].innerHTML += pick;
        if (subContainers[subContainers.length - 1].getElementsByClassName("start_radio_music").length == 4) {
            container.innerHTML += `<div class="pickSubContainer"></div>`
        }
    };
}
displayPick();

// function newPick2(pick2) {
//     let newPick2 = `
//     <div class="start_radio_music">
//         <div class="radio_music">
//             <div class="pick_container">
//                 <img class="pick" src="${pick2.cover}" alt="">
//             </div>
//             <div class="pick_container">
//                 <h1 class="pick_title style">${pick2.title}</h1>
//                 <div class="pick_subtitle_content">
//                     <span class="explicit style">E</span>
//                     <h1 class="pick_subtitle style">${pick2.subtitle}</h1>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;
//     return newPick2;
// };

// function newPick3(pick3) {
//     let newPick3 = `
//     <div class="start_radio_music">
//         <div class="radio_music">
//             <div class="pick_container">
//                 <img class="pick" src="${pick3.cover}" alt="">
//             </div>
//             <div class="pick_container">
//                 <h1 class="pick_title style">${pick3.title}</h1>
//                 <div class="pick_subtitle_content">
//                     <span class="explicit style">E</span>
//                     <h1 class="pick_subtitle style">${pick3.subtitle}</h1>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;
//     return newPick3;
// };

// function newPick4(pick4) {
//     let newPick4 = `
//     <div class="start_radio_music">
//         <div class="radio_music">
//             <div class="pick_container">
//                 <img class="pick" src="${pick4.cover}" alt="">
//             </div>
//             <div class="pick_container">
//                 <h1 class="pick_title style">${pick4.title}</h1>
//                 <div class="pick_subtitle_content">
//                     <span class="explicit style">E</span>
//                     <h1 class="pick_subtitle style">${pick4.subtitle}</h1>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;
//     return newPick4;
// };

// function newPick5(pick5) {
//     let newPick5 = `
//     <div class="start_radio_music">
//         <div class="radio_music">
//             <div class="pick_container">
//                 <img class="pick" src="${pick5.cover}" alt="">
//             </div>
//             <div class="pick_container">
//                 <h1 class="pick_title style">${pick5.title}</h1>
//                 <div class="pick_subtitle_content">
//                     <span class="explicit style">E</span>
//                     <h1 class="pick_subtitle style">${pick5.subtitle}</h1>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;
//     return newPick5;
// };

// function displayPick2() {
//     let container = document.querySelector(".quick_picks_container2");
//     for (quickPick of quickPicks) {
//         let pick2 = newPick2(quickPick);
//         container.innerHTML += pick2;
//     }
// }
// displayPick2();

// function displayPick3() {
//     let container = document.querySelector(".quick_picks_container3");
//     for (quickPick of quickPicks) {
//         let pick3 = newPick3(quickPick);
//         container.innerHTML += pick3;
//     }
// }
// displayPick3();

// function displayPick4() {
//     let container = document.querySelector(".quick_picks_container4");
//     for (quickPick of quickPicks) {
//         let pick4 = newPick4(quickPick);
//         container.innerHTML += pick4;
//     }
// }
// displayPick4();

// function displayPick5() {
//     let container = document.querySelector(".quick_picks_container5");
//     for (quickPick of quickPicks) {
//         let pick5 = newPick5(quickPick);
//         container.innerHTML += pick5;
//     }
// }
// displayPick5();

// let newPick = `
// <div class="start_radio_music">
//     <div class="radio_music">
//         <div class="pick_container">
//             <img class="pick" src="${pick.cover}" alt="">
//         </div>
//         <h1 class="title style">${pick.title}</h1>
//         <div class="subtitle_content">
//             <span class="explicit style">E</span>
//             <h1 class="subtitle style">${pick.subtitle}</h1>
//         </div>
//     </div>
// </div>
// `;

// FAVOURITES CONTAINER

//GET BUTTON
const buttonRight = document.querySelector('#slideRight');
const buttonLeft = document.querySelector('#slideLeft');

  buttonRight.onclick = function () {
    document.querySelector('.favourites').scrollLeft += 500;
  };
  buttonLeft.onclick = function () {
    document.querySelector('.favourites').scrollLeft -= 500;
  };

// WHEN THE USER SCROLLS RIGHT 20PX FROM THE LEFT, DISPLAY BUTTON
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTo(400, 0) > 20 || document.documentElement.scrollTo(400, 0) > 20) {
    buttonLeft.style.display = "flex";
  } else {
    buttonLeft.style.display = "none";
  }
}

const buttonRight2 = document.getElementById('slideRight2');
const buttonLeft2 = document.getElementById('slideLeft2');
//   MORNING MUSIC
  buttonRight2.onclick = function () {
    document.querySelector('.morning_music').scrollLeft += 500;
  };
  buttonLeft2.onclick = function () {
    document.querySelector('.morning_music').scrollLeft -= 500;
  };

const buttonRight3 = document.getElementById('slideRight2');
const buttonLeft3 = document.getElementById('slideLeft2');
//   MORNING MUSIC
    buttonRight3.onclick = function () {
        document.querySelector('.morning_music').scrollLeft += 500;
    };
    buttonLeft3.onclick = function () {
        document.querySelector('.morning_music').scrollLeft -= 500;
    };

const buttonRight4 = document.getElementById('slideRight2');
const buttonLeft4 = document.getElementById('slideLeft2');
//   MORNING MUSIC
    buttonRight4.onclick = function () {
        document.querySelector('.quick_picks').scrollLeft += 500;
    };
    buttonLeft4.onclick = function () {
        document.querySelector('.quick_picks').scrollLeft -= 500;
    };