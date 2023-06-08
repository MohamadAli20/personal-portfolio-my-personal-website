// alert("Some of features are not yet functional.")

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
    // rotate bar
    var barEl = document.getElementById("bar-el");
    var navEl = document.getElementById("nav-el");

    if(navEl.style.maxHeight == "0px")
    {
        barEl.style.transform = "rotate(90deg)";
        navEl.style.maxHeight = "200px";
    }
    else
    {
        barEl.style.transform = "rotate(0deg)";
        navEl.style.maxHeight = "0px";
    }
}
