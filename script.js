// alert("This webpage is purely designed using CSS only.")

var downloadBtn = document.getElementById("download");;

downloadBtn.addEventListener("click", function(){
    alert("This should link to another page requesting for a copy of resume.");
});

function homeClick(){
    document.getElementById("home").style.color = "#f7f8fa" // white
    document.getElementById("about").style.color = "#7c8187" // gray
    document.getElementById("project").stsyle.color = "#7c8187" // gray
}
function aboutClick(){
    document.getElementById("home").style.color = "#7c8187" // gray
    document.getElementById("about").style.color = "#f7f8fa" // white
    document.getElementById("project").style.color = "#7c8187" // gray
}
function projectsClick(){
    document.getElementById("home").style.color = "#7c8187" // gray
    document.getElementById("about").style.color = "#7c8187" // gray
    document.getElementById("project").style.color = "#f7f8fa" // white
}

