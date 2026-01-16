const grid = document.querySelector(".grid");

const cards = {
    1: document.getElementById("spiderman-1-2002"),
    2: document.getElementById("spiderman-2-2004"),
    3: document.getElementById("spiderman-3-2007")
};

window.onload = (() => {
    document.getElementById("movieInput").value = "";
});

const order = [1, 2, 3];

document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = Number(btn.dataset.movie);

        if (cards[id].parentElement) {
            cards[id].remove();
        }
    });
});

document.querySelectorAll(".restore-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = Number(btn.dataset.movie);

        if (cards[id].parentElement) return;

        let nextCard = null;

        for (let key of order) {
            if (key > id && cards[key].parentElement) {
                nextCard = cards[key];
                break;
            }
        }

        if (nextCard) {
            grid.insertBefore(cards[id], nextCard);
        } else {
            grid.appendChild(cards[id]);
        }
    });
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        alert("Ai apasat Escape");
    }
});

setTimeout(() => { alert("Welcome!"); }, 2000); 

const movieInput = document.getElementById("movieInput");

const savedMovie = localStorage.getItem("selectedMovie");

if (savedMovie) {
    movieInput.value = savedMovie;
}

movieInput.addEventListener("input", () => {
    const value = movieInput.value.trim();

    if (["1", "2", "3"].includes(value)) {
        let selectedMovie = localStorage.getItem("selectedMovie");
        if (selectedMovie) {
            cards[selectedMovie].style.background = "#0b1220";
        }
        
        localStorage.setItem("selectedMovie", value);

        cards[value].style.background = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "f") {
        const selectedMovie = localStorage.getItem("selectedMovie");

        if (selectedMovie) {
            alert(`Filmul preferat este: ${selectedMovie}`);
        } else {
            alert("Nu ai ales încă un număr (1, 2 sau 3).");
        }
    }
});



