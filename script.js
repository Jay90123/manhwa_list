// Mock data for manhwa with images
const manhwaData = [
    {
        title: "Solo Leveling",
        genre: "Action, Fantasy",
        description: "In a world where hunters hunt monsters, the weakest hunter, Sung Jin-Woo, becomes the strongest after a mysterious event.",
        image: "https://manhwalist.s3.ap-northeast-1.amazonaws.com/download.jfif" // Replace with a real image URL
    },
    {
        title: "Tower of God",
        genre: "Adventure, Fantasy",
        description: "A boy enters a mysterious tower, seeking his friend, facing various challenges and powerful foes on each floor.",
        image: "https://manhwalist.s3.ap-northeast-1.amazonaws.com/tower_of_god.jpg" // Replace with a real image URL
    },
    {
        title: "Noblesse",
        genre: "Action, Supernatural",
        description: "A powerful noble awakens after 820 years and must protect his new friends while dealing with dangerous enemies.",
        image: "https://manhwalist.s3.ap-northeast-1.amazonaws.com/nobless.jpe" // Replace with a real image URL
    },
    {
        title: "The Breaker",
        genre: "Martial Arts, Action",
        description: "A high school student learns martial arts from a legendary master and gets involved in the world of powerful martial artists.",
        image: "https://manhwalist.s3.ap-northeast-1.amazonaws.com/beaker.jpg" // Replace with a real image URL
    },
    {
        title: "My Dear Cold-Blooded King",
        genre: "Historical, Romance",
        description: "A young woman becomes entangled with a mysterious king, uncovering secrets and facing dangers in a world of political intrigue.",
        image: "https://manhwalist.s3.ap-northeast-1.amazonaws.com/coldblodded.jfif" // Replace with a real image URL
    }
];

// Function to display manhwa list
function displayManhwa() {
    const manhwaList = document.getElementById('manhwa-list');
    manhwaData.forEach(manhwa => {
        const manhwaDiv = document.createElement('div');
        manhwaDiv.className = 'manhwa';
        manhwaDiv.innerHTML = `
            <img src="${manhwa.image}" alt="${manhwa.title}">
            <div>
                <div class="title">${manhwa.title}</div>
                <div class="genre">${manhwa.genre}</div>
                <div class="description">${manhwa.description}</div>
            </div>
        `;
        manhwaList.appendChild(manhwaDiv);
    });
}

// Call the function to display manhwa
displayManhwa();
