console.log("hello world")
let songIndex = 0;
let audioElement = new Audio('/divine/audio/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar= document.getElementById('myprogressbar');
let songitem=Array.from(document.getElementsByClassName('songlist'))
let image =document.getElementById('songcover');
let title = document.getElementById('title');
let volicon = document.getElementById('volicon');


let songs = [
    {
        songName: "3:59",
        filePath: "audio/1.mp3",
        coverPath: "/divine/cover/1.jpeg",
      },
      {
        songName: "Farrak",
        filePath: "audio/2.mp3",
        coverPath: "/divine/cover/2.jpeg",
      },
      {
        songName: "Baazighar",
        filePath: "audio/3.mp3",
        coverPath: "/divine/cover/3.jpeg",
      },
      {
        songName: "Kaam 25",
        filePath: "audio/4.mp3",
        coverPath: "/divine/cover/4.jpeg",
      },
      {
        songName: "Ghandi Money",
        filePath: "audio/5.mp3",
        coverPath: "/divine/cover/5.jpeg",
      },
      {
        songName: "Maarchi",
        filePath: "audio/6.mp3",
        coverPath: "/divine/cover/6.jpeg",
      },
      {
        songName: "Teeri Manzil",
        filePath: "audio/7.mp3",
        coverPath: "/divine/cover/7.jpeg",
      },
      {
        songName: "Azadi",
        filePath: "audio/8.mp3",
        coverPath: "/divine/cover/8.jpeg",
      },
      {
        songName: "Moosrdrilla",
        filePath: "audio/9.mp3",
        coverPath: "/divine/cover/9.jpeg",
      },
      {
        songName: "Saitara",
        filePath: "audio/10.mp3",
        coverPath: "/divine/cover/10.jpeg",
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
    audioElement.src = `/divine/audio/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    console.log(audioElement.src)
    image.src = `/divine/cover/${songIndex+1}.jpeg`;
    i=songIndex;
    title.innerText = songs[i].songName;
   })
document.getElementById('next').addEventListener('click',()=>{
  if (songIndex < songs.length - 1) { 
    songIndex ++; 
} else {
    songIndex = 0; 
}
    audioElement.src = `/divine/audio/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    console.log(audioElement.src)
    image.src = `/divine/cover/${songIndex+1}.jpeg`;
    i=songIndex;
    title.innerText = songs[i].songName;
    
   
})
audioElement.addEventListener("ended", () => {
    if (songIndex < songs.length - 1) {
        songIndex++; // Move to the next song
    } else {
        songIndex = 0; // Loop back to the first song
    }
   
    audioElement.src = `/divine/audio/${songIndex+1}.mp3`; // Update song source
    audioElement.currentTime = 0;
    audioElement.play();
    image.src = `/divine/cover/${songIndex+1}.jpeg`;

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

