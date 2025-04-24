console.log("hello world")
let songIndex = 0;
let audioElement = new Audio('/weekend/audio/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar= document.getElementById('myprogressbar');
let songitem=Array.from(document.getElementsByClassName('songlist'))
let image =document.getElementById('songcover');
let title = document.getElementById('title');
let volicon = document.getElementById('volicon');


let songs = [
    {
        songName: "Creepin",
        filePath: "audio/1.mp3",
        coverPath: "/weekend/cover/1.jpeg",
      },
      {
        songName: "Die For You",
        filePath: "audio/2.mp3",
        coverPath: "/weekend/cover/2.jpeg",
      },
      {
        songName: "The Hills",
        filePath: "audio/3.mp3",
        coverPath: "/weekend/cover/3.jpeg",
      },
      {
        songName: "Blinding Lights",
        filePath: "audio/4.mp3",
        coverPath: "/weekend/cover/4.jpeg",
      },
      {
        songName: "Call Out My Name",
        filePath: "audio/5.mp3",
        coverPath: "/weekend/cover/5.jpeg",
      },
      {
        songName: "Often",
        filePath: "audio/6.mp3",
        coverPath: "/weekend/cover/6.jpeg",
      },
      {
        songName: "Reminder",
        filePath: "audio/7.mp3",
        coverPath: "/weekend/cover/7.jpeg",
      },
      {
        songName: "StarBoy",
        filePath: "audio/8.mp3",
        coverPath: "/weekend/cover/8.jpeg",
      },
      {
        songName: "AfterHours",
        filePath: "audio/9.mp3",
        coverPath: "/weekend/cover/9.jpeg",
      },
      {
        songName: "Hymp For the Weekend",
        filePath: "audio/10.mp3",
        coverPath: "/weekend/cover/10.jpeg",
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
    audioElement.src = `/weekend/audio/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    console.log(audioElement.src)
    image.src = `/weekend/cover/${songIndex+1}.jpeg`;
    i=songIndex;
    title.innerText = songs[i].songName;
   })
document.getElementById('next').addEventListener('click',()=>{
  if (songIndex < songs.length - 1) { 
    songIndex ++; 
} else {
    songIndex = 0; 
}
    audioElement.src = `/weekend/audio/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    console.log(audioElement.src)
    image.src = `/weekend/cover/${songIndex+1}.jpeg`;
    i=songIndex;
    title.innerText = songs[i].songName;
    
   
})
audioElement.addEventListener("ended", () => {
    if (songIndex < songs.length - 1) {
        songIndex++; // Move to the next song
    } else {
        songIndex = 0; // Loop back to the first song
    }
   
    audioElement.src = `/weekend/audio/${songIndex+1}.mp3`; // Update song source
    audioElement.currentTime = 0;
    audioElement.play();
    image.src = `/weekend/cover/${songIndex+1}.jpeg`;

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

