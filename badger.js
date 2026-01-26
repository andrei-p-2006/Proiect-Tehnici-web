let totalSquats = localStorage.getItem('totalSquats') ? parseInt(localStorage.getItem('totalSquats')) : 0;
document.getElementById('squat-count').innerText = totalSquats;

window.addEventListener('keydown', function (e) {
    if (e.key === 'b' || e.key === 'B') {
        let img = document.createElement('img');
        img.src = 'resources/images/badger-1.png';
        img.className = 'badger';
        img.style.position = 'absolute';
        img.style.left = Math.random() * (window.innerWidth - 100) + 'px';
        img.style.top = Math.random() * (window.innerHeight - 100) + 'px';

        img.onclick = function (event) {
            if (img.dataset.dancing === "true") {
                img.remove();
            } else {
                startDancing(img);
            }
        };
        document.body.appendChild(img);
    }

    if (e.key === 'p' || e.key === 'P') {
        let audio = new Audio('resources/sounds/badger.mp3');
        audio.play();
    }
});

function startDancing(img) {
    img.dataset.dancing = "true";
    const frames = [
        'resources/images/badger-2.png',
        'resources/images/badger-3.png',
        'resources/images/badger-4.png',
        'resources/images/badger-1.png'
    ];

    let frameIdx = 0;
    function danceCycle() {
        let interval = setInterval(() => {
            img.src = frames[frameIdx];
            frameIdx++;
            if (frameIdx === frames.length) {
                clearInterval(interval);
                frameIdx = 0;

                totalSquats++;
                localStorage.setItem('totalSquats', totalSquats);
                document.getElementById('squat-count').innerText = totalSquats;

                if (totalSquats % 5 === 0) {
                    addMushroom();
                }

                setTimeout(danceCycle, 1000);
            }
        }, 200);
    }
    danceCycle();
}

function addMushroom() {
    let mush = document.createElement('img');
    mush.src = 'resources/images/mush.png';
    mush.style.position = 'absolute';
    mush.style.left = Math.random() * (window.innerWidth - 50) + 'px';
    mush.style.top = Math.random() * (window.innerHeight - 50) + 'px';
    document.body.appendChild(mush);
}