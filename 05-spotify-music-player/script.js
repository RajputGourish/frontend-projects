let currentsong = new Audio();
let songs;
let currfolder;

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getsongs(folder) {
    currfolder = folder;
    let a = await fetch(`http://127.0.0.1:5500/${folder}/`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1]);
        }
    }
    //show all the songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    songUL.innerHTML = "";
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML +
            `<li>
                 <img class="invert" src="Assets/music.svg">
                    <div class="info">
                        <div>${song}</div>
                        <div>Gourish</div>
                    </div>
                    <div class="playnow">
                        <span>Play now</span>
                        <img class="invert" src="Assets/play.svg">
                    </div>
            </li>`;
    }
    // play the first song
    // let audio = new Audio(songs[0]);
    // audio.play(); 

    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(el => {
        el.addEventListener("click", element => {
            playmusic(el.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    });

    return songs;
}
const playmusic = (track, pause = false) => {
    currentsong.src = `/${currfolder}/${track}`;
    if (!pause) {
        currentsong.play();
        play.src = "./Assets/pause.svg";
    }
    document.querySelector(".songinfo").innerHTML = track;
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";

}

async function displayAlbums() {
    let a = await fetch(`http://127.0.0.1:5500/songs/`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let cardcantainer = document.querySelector(".cardcantainer");
    let anchors = div.getElementsByTagName("a");
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];

        if (e.href.includes("/songs")) {
            let folder = e.href.split("/").slice(-1)[0];
            // get the meta data of the folder
            let a = await fetch(`http://127.0.0.1:5500/songs/${folder}/info.json`);


            if (!a.ok) {
                console.warn(`info.json not found for folder: ${folder}`);
                continue; // skip this folder
            }

            let response = await a.json();

            cardcantainer.innerHTML += `
        <div data-folder="${folder}" class="card">
            <div class="play">
                <svg data-encore-id="icon" role="img" aria-hidden="true"
                    class="e-91000-icon e-91000-baseline" viewBox="0 0 24 24">
                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path>
                </svg> 
            </div>
            <img src="/songs/${folder}/cover.jpg" alt="coverpic">
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`;
        }
    }
    //add event on library card to load songs of that library
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {

            songs = await getsongs(`songs/${item.currentTarget.dataset.folder}`);
            playmusic(songs[0]);

        })
    })
}

async function main() {
    // get the list of songs
    await getsongs("songs/ncs");
    playmusic(songs[0], true);

    // display all the albums on the page
    displayAlbums();
    // attach an eventlistener for prev and next song

    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            play.src = "./Assets/pause.svg";
        }
        else {
            currentsong.pause();
            play.src = "./Assets/play.svg";
        }
    });

    //listen to timeupdate event
    currentsong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentsong.currentTime)} / ${secondsToMinutesSeconds(currentsong.duration)}`;
        document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";
    })


    // add an eventlister to seekbar
    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentsong.currentTime = (currentsong.duration * percent) / 100;
    })

    // add an eventlistener for hamburger

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    })

    // add an eventlistner for close button

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%";

    })

    //add eventlisterner for prev button
    prev.addEventListener("click", () => {
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0]);
        if ((index - 1) >= 0) {
            currentsong.pause();
            playmusic(songs[index - 1]);
        }
    })

    //add eventlisterner for next button
    next.addEventListener("click", () => {
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0]);
        if ((index + 1) < songs.length) {
            currentsong.pause();
            playmusic(songs[index + 1]);
        }
    })

    // add an event for volume

    vol.addEventListener("change", (e) => {
        console.log("Setti ng volume to the ", e.target.value + "/100");
        currentsong.volume = parseInt(e.target.value) / 100;
        if (currentsong.volume > 0) {
            document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("mute.svg", "volume.svg");
        }
    })


    // add eventlistner for mute on volume button
    document.querySelector(".volume img").addEventListener("click", (e) => {
        console.log(e.target.src);

        if (e.target.src.includes("volume.svg")) {
            e.target.src = e.target.src.replace("volume.svg", "mute.svg");
            currentsong.volume = 0;
            vol.value = 0;

        }
        else {
            e.target.src = e.target.src.replace("mute.svg", "volume.svg");
            currentsong.volume = .10;
            vol.value = 10;
        }
    })

}
main();