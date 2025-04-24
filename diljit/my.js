console.log("hello world")
let songIndex = 0;
let audioElement = new Audio('/diljit/dil/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar= document.getElementById('myprogressbar');
let songitem=Array.from(document.getElementsByClassName('songlist'))
let image =document.getElementById('songcover');
let title = document.getElementById('title');
let volicon = document.getElementById('volicon');


let songs = [
    {
        songName: "Proper Patola",
        filePath: "dil/1.mp3",
        coverPath: "dilcov/1.jpg",
      },
      {
        songName: "Do You Know",
        filePath: "dil/2.mp3",
        coverPath: "dilcov/2.jpg",
      },
      {
        songName: "Laembadgini",
        filePath: "dil/3.mp3",
        coverPath: "dilcov/3.jpg",
      },
      {
        songName: "5 Taara",
        filePath: "dil/4.mp3",
        coverPath: "dilcov/4.jpg",
      },
      {
        songName: "Raat Di Gedi",
        filePath: "dil/5.mp3",
        coverPath: "dilcov/5.jpg",
      },
      {
        songName: "Born To Shine",
        filePath: "dil/6.mp3",
        coverPath: "dilcov/6.jpg",
      },
      {
        songName: "Lover",
        filePath: "dil/7.mp3",
        coverPath: "dilcov/7.jpg",
      },
      {
        songName: "Patiala Peg",
        filePath: "dil/8.mp3",
        coverPath: "dilcov/8.jpg",
      },
      {
        songName: "G.O.A.T",
        filePath: "dil/9.mp3",
        coverPath: "dilcov/9.jpg",
      },
      {
        songName: "Vibe",
        filePath: "dil/10.mp3",
        coverPath: "dilcov/10.jpg",
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
    
    image.src = `/diljit/dilcov/${songIndex+1}.jpg`;
    
    
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
    audioElement.src = `/diljit/dil/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    console.log(audioElement.src)
    image.src = `/diljit/dilcov/${songIndex+1}.jpg`;
    i=songIndex;
    title.innerText = songs[i].songName;
   })
document.getElementById('next').addEventListener('click',()=>{
  if (songIndex < songs.length - 1) { 
    songIndex ++; 
} else {
    songIndex = 0; 
}
    audioElement.src = `/diljit/dil/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    console.log(audioElement.src)
    image.src = `/diljit/dilcov/${songIndex+1}.jpg`;
    i=songIndex;
    title.innerText = songs[i].songName;
    
   
})
audioElement.addEventListener("ended", () => {
    if (songIndex < songs.length - 1) {
        songIndex++; // Move to the next song
    } else {
        songIndex = 0; // Loop back to the first song
    }
   
    audioElement.src = `/diljit/dil/${songIndex+1}.mp3`; // Update song source
    audioElement.currentTime = 0;
    audioElement.play();
    image.src = `/diljit/dilcov/${songIndex+1}.jpg`;

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

