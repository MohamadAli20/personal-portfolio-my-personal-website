// alert("Some of features are not yet functional.")

var downloadBtn = document.getElementById("download");

downloadBtn.addEventListener("click", function(){
    alert("This should link to another page requesting for a copy of resume.");
});

function homeClick(){
    document.getElementById("home").style.color = "#f7f8fa" // white
    document.getElementById("about").style.color = "#7c8187" // gray
    document.getElementById("project").style.color = "#7c8187" // gray

    document.getElementById("nav-el").style.maxHeight = "0px"; // close menu after selecting option
}
function aboutClick(){
    document.getElementById("home").style.color = "#7c8187" // gray
    document.getElementById("about").style.color = "#f7f8fa" // white
    document.getElementById("project").style.color = "#7c8187" // gray

    document.getElementById("nav-el").style.maxHeight = "0px";
}
function projectsClick(){
    document.getElementById("home").style.color = "#7c8187" // gray
    document.getElementById("about").style.color = "#7c8187" // gray
    document.getElementById("project").style.color = "#f7f8fa" // white

    document.getElementById("nav-el").style.maxHeight = "0px";
}

function barClick(){
    var barEl = document.getElementById("nav-el");

    if(barEl.style.maxHeight == "0px")
    {
        barEl.style.maxHeight = "200px";
    }
    else
    {
        barEl.style.maxHeight = "0px";
    }
    barEl.style.maxHeight == "0px";
}
