console.log("page loaded...");
function over(event){
    event.play()
    event.muted = "false"
}

function out(event){
    event.pause()
    event.muted ="true"
}