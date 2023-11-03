const song =document.getElementById("song");
const progress =document.getElementById("progress");
const cntrlicon=document.getElementById("cntrlicon");

song.onloadedmetadata =  function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}

function playpause(){
    if(cntrlicon.classList.contains("fa-pause")){
        song.pause();
        cntrlicon.classList.remove("fa-pause");
        cntrlicon.classList.add("fa-play");
         
    }else{
        song.play();
        cntrlicon.classList.add ("fa-pause");
        cntrlicon.classList.remove("fa-play");
          
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