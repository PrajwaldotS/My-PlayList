console.log("hello world")
let songIndex = 0;
let audioElement = new Audio('/seedhe maut/audio/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar= document.getElementById('myprogressbar');
let songitem=Array.from(document.getElementsByClassName('songlist'))
let image =document.getElementById('songcover');
let title = document.getElementById('title');
let volicon = document.getElementById('volicon');


let songs = [
    {
        songName: "Khatta Flow",
        filePath: "audio/1.mp3",
        coverPath: "/seedhe maut/cover/1.jpeg",
      },
      {
        songName: "Bure din",
        filePath: "audio/2.mp3",
        coverPath: "/seedhe maut/cover/2.jpeg",
      },
      {
        songName: "Hola Amigo",
        filePath: "audio/3.mp3",
        coverPath: "/seedhe maut/cover/3.jpeg",
      },
      {
        songName: "Asal G",
        filePath: "audio/4.mp3",
        coverPath: "/seedhe maut/cover/4.jpeg",
      },
      {
        songName: "Lukka Chup",
        filePath: "audio/5.mp3",
        coverPath: "/seedhe maut/cover/5.jpeg",
      },
      {
        songName: "Nanchaku",
        filePath: "audio/6.mp3",
        coverPath: "/seedhe maut/cover/6.jpeg",
      },
      {
        songName: "Raat ki Rani",
        filePath: "audio/7.mp3",
        coverPath: "/seedhe maut/cover/7.jpeg",
      },
      {
        songName: "Shutdown",
        filePath: "audio/8.mp3",
        coverPath: "/seedhe maut/cover/8.jpeg",
      },
      {
        songName: "Swah",
        filePath: "audio/9.mp3",
        coverPath: "/seedhe maut/cover/9.jpeg",
      },
      {
        songName: "Vibe",
        filePath: "audio/10.mp3",
        coverPath: "/seedhe maut/cover/10.jpeg",
      },
    ]
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
    }
    
    
    
})
console.log(image.src)
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    console.log(progress)
}
)
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
songitem.forEach((Element,i)=>{
    songIndex++;
    Element.getElementsByClassName('songname')[0].innerText = songs[i].songName;
    
})
document.getElementById('previous').addEventListener('click',()=>{
  if (songIndex > 0) { 
    songIndex--; // ✅ Move to the previous song
} else {
    songIndex = songs.length - 1; // ✅ Loop back to last song
}
    audioElement.src = `/seedhe maut/audio/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    console.log(audioElement.src)
    image.src = `/seedhe maut/cover/${songIndex+1}.jpeg`;
    i=songIndex;
    title.innerText = songs[i].songName;
   })
document.getElementById('next').addEventListener('click',()=>{
  if (songIndex < songs.length - 1) { 
    songIndex ++; 
} else {
    songIndex = 0; 
}
    audioElement.src = `/seedhe maut/audio/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    console.log(audioElement.src)
    image.src = `/seedhe maut/cover/${songIndex+1}.jpeg`;
    i=songIndex;
    title.innerText = songs[i].songName;
    
   
})
audioElement.addEventListener("ended", () => {
    if (songIndex < songs.length - 1) {
        songIndex++; // Move to the next song
    } else {
        songIndex = 0; // Loop back to the first song
    }
   
    audioElement.src = `/seedhe maut/audio/${songIndex+1}.mp3`; // Update song source
    audioElement.currentTime = 0;
    audioElement.play();
    image.src = `/seedhe maut/cover/${songIndex+1}.jpeg`;

    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    i=songIndex;
    title.innerText = songs[i].songName;
   });


   function toggleMute() {
    if (audioElement.volume > 0) {
        audioElement.volume = 0; // Mute the song
        volicon.classList.remove("fa-solid fa-volume-high"); // Remove high volume icon
        volicon.classList.add("fa-solid fa-volume-off");
        console.log(volicon.classList);
        audioElement.pause();
    
    } else {
        audioElement.volume = 1; // Unmute the song
        volicon.classList.remove("fa-solid fa-volume-off")
        volicon.classList.add("fa-solid fa-volume-high"); 
        console.log(volicon.classList)// Add high volume icon
        audioElement.play();
    }
}

