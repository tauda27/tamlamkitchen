/*
    document: refers to the current document
    getElementById: it gets the element based on id value
    src: tells you the source
    function: saves your code for later (you can tell the image when to appear)
    onclick: adds an event to any object

    */
    document.getElementById("som").onclick = function(){
        document.getElementById("displayImage").src ="soundofmusic.jpeg"; 
    }
        document.getElementById("music").onclick = function(){
        document.getElementById("displayImage").src ="images/music notes.jpeg"; 
    }

    document.getElementById("rain").onclick = function(){
        document.getElementById("displayImage").src ="images/rose-with-raindrops.jpeg"; 
    }

    document.getElementById("whiskers").onclick = function(){
        document.getElementById("displayImage").src ="images/whiskers.jpeg"; 
    }

    document.getElementById("clean").onclick = function(){
        document.getElementById("displayImage").src ="images/clean kitchen.jpeg"; 
    }
    document.getElementById("laughter").onclick = function(){
        document.getElementById("displayImage").src ="images/childrenlaughter.jpeg"; 
    }