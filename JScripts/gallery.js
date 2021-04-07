function yellow(id) {
    document.getElementById("pop").style.transform = "scale(2,2)";
    if (id == "one") {
        document.getElementById("pop_text").innerHTML = "Athenes Academy has won many awards, medals,certificates by both government and private sectors.";
        document.getElementById("pop_img").innerHTML = "<img src='Images/Cups.jpg'; style='width: 200px'; style='height: 400px'; alignContent='right';>";
    } else if (id == "two") {
        document.getElementById("pop_text").innerHTML = "This is a photograph which was taken on 12th of Octomber 2018 when our academy won the championship of cricket world cup 2018 organized by ASAK sports club.";
        document.getElementById("pop_img").innerHTML = "<img src='Images/Cricket.jpg' style='width: 200px'; style='height: 400px'; alignContent='right';/>";
    } else if (id == "three") {
        document.getElementById("pop_text").innerHTML = "Our academy has a fully facilitated cricket ground with a statdium which can provide space for 3500 people at once.";
        document.getElementById("pop_img").innerHTML = "<img src='Images/Ground.jpg'; style='width: 200px'; style='height: 400px'; alignContent='right';/>";
    } else if (id == "four") {
        document.getElementById("pop_text").innerHTML = "Our academy has a fully completed gymanasium, we have upgraded the gym with latest equipments to give you the best expierience.";
        document.getElementById("pop_img").innerHTML = "<img src='Images/Gym.jfif'; style='width: 200px'; style='height: 400px'; alignContent='right';/>";
    } else if (id == "five") {
        document.getElementById("pop_text").innerHTML = "This is under 19 men's hockey team.The photograph was taken at the 2019 hockey world cup.Our team has won the 1st place.";
        document.getElementById("pop_img").innerHTML = "<img src='Images/Hockey.jpg'; style='width: 200px'; style='height: 400px'; alignContent='right';/>";
    } else if (id == "six") {
        document.getElementById("pop_text").innerHTML = "Our academy has fully facilitated artificial hockey ground 100m long and 50m in width.";
        document.getElementById("pop_img").innerHTML = "<img src='Images/Turf.jpg'; style='width: 200px'; style='height: 400px'; alignContent='right';/>";
    } else if (id == "seven") {
        document.getElementById("pop_text").innerHTML = "Our academy has a fully facilitated tennis court developed into an international level. We have an arrangement to buy tennis equipments for a reasonable price.";
        document.getElementById("pop_img").innerHTML = "<img src='Images/Tennis.jfif'; style='width: 200px'; style='height: 400px'; alignContent='right';/>";
    } else if (id == "eight") {
        document.getElementById("pop_text").innerHTML = "Our academy has a fully facilitated Swimming pool which is 100m long and also we have international level coaches to guide the members.";
        document.getElementById("pop_img").innerHTML = "<img src='Images/Swimming.jpg'; style='width: 200px'; style='height: 400px'; alignContent='right';/>";
    } else if (id == "nine") {
        document.getElementById("pop_text").innerHTML = "We have arranged an annual dinner dance for our members , so they can enjoy,they can get to know each other and have some fun time.";
        document.getElementById("pop_img").innerHTML = "<img src='Images/Cups.jpg'; style='width: 200px'; style='height: 400px'; alignContent='right';/>";
    }




}

function closepop() {
    document.getElementById("pop").style.transform = "scale(0,0)";
}


function colorbg() {

    var x = document.getElementById("selectId");
    var bgcolor = x.options[x.selectedIndex].value;
    document.body.style.backgroundColor = bgcolor;
}

function Txtcolor() {

    var x = document.getElementById("selectIdtext");
    var Txtcolor = x.options[x.selectedIndex].value;
    document.tex.style.color = Txtcolor;
}