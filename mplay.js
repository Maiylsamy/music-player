const song =document.getElementById("song");
const progress =document.getElementById("progress");
const cntrlicon=document.getElementById("cntrlicon");

song.onloadedmetadata =  function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}

function playpause(){
    if(cntrlicon.classList.contains("fa-play")){
      
          song.play();
        cntrlicon.classList.add ("fa-pause");
        cntrlicon.classList.remove("fa-play");
    }else{
          song.pause();
        cntrlicon.classList.remove("fa-pause");
        cntrlicon.classList.add("fa-play");
    }
}
if(song.play()){
    setInterval(()=>{ progress.value=song.currentTime; },500);
}
progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    cntrlicon.classList.add ("fa-pause");
    cntrlicon.classList.remove("fa-play");

}