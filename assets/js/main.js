document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay")
    const enterButton = document.getElementById("enterButton")
    const backgroundVideo = document.getElementById("backgroundVideo")
    const theme = "chill"

    backgroundVideo.controls = false

    if (theme == "chill") {
        backgroundVideo.src = "https://cdn.discordapp.com/attachments/1211139202104696875/1214921211344195614/song_1.mp4?ex=660d538c&is=65fade8c&hm=1d03fd7c2e81c393fb170b239ddc349dbb55ae783694906b3fb8c39f8a121a9b&"
    } 

    if (theme == "central") {
        backgroundVideo.src = "https://hideout.one/api/video/video.mp4"
    } 

    if (theme == "drill") {
        backgroundVideo.src = "https://cdn.discordapp.com/attachments/1211139202104696875/1214918567707803738/rap.mp4?ex=65fadc16&is=65e86716&hm=16a0340874d24f7fa81e992dc2d92baae148a890ec387b42be362e2d04a36ea2&"
    }

    if (theme == "rap") {
        backgroundVideo.src = "https://drive.usercontent.google.com/download?id=1cBN8DqOv5eLNopVYiJfUHlLNsRyX7pli&export=download&authuser=0"
    }

    enterButton.addEventListener("click", function() {
        backgroundVideo.play()
        overlay.style.visibility = "hidden"
        overlay.style.opacity = 0
    })
})

function Scroll(text) {
    document.title = text;
    
    setTimeout(function() {
        Scroll(text.substr(1) + text.substr(0, 1));
    }, 300);
}

Scroll("Globe | @Namecall ")
