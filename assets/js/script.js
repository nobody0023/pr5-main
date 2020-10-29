var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];

function Slide(title, subtitle, background, link ) {
    this.title = title;
    this.subtitle = subtitle;
    this.background = background;
    this.link = link;
    this.id = "slide" + slideIndex;
    this.counterDotSlider = "dot" + slideIndex;
    slideIndex++;
    slideArray.push(this);
}

var walk = new Slide(
    "Bmw.com",
    "Bmw",
    "https://lh3.googleusercontent.com/proxy/a5LtTwbjqVxMACu9flBNGmnU8uAl97PnaWQeJcfT4-cI3sXmLzQjDflw8mjXSNvXFAF_nUa6IMmTVVPukWd_zKY3gA",
    "https://www.bmw.ua/ru/index.html"
);

var walkingDead = new Slide(
    "lamba.com",
    "Lamba",
    "https://w-dog.ru/wallpapers/1/15/524625063929234.jpg",
    "https://ru.wikipedia.org/wiki/Lamborghini"
);

var walkinDead = new Slide(
    "Mercedec.com",
    "Mercedec",
    "https://img.mercedes-benz-kiev.com/data/main/mercedes-benz-glb.jpg",
    "https://www.mercedes-benz.ua/?group=all&subgroup=see-all&view=BODYTYPE"
);

function buildSlider(){
    var myHTML;
    for(var i = 0; i < slideArray.length; i++) {
        myHTML +=
            "<div id='" + slideArray[i].id + "' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" +
            "<div class='slideOverlay'>" +
            "<h1>" + slideArray[i].title + "</h1>" +
            "<h4>" + slideArray[i].subtitle + "</h4>" +
            "<a class='slider' href='" + slideArray[i].link + "' target='_blank'>Open Link</a>" +
            "</div>" +
            "</div>";
    }
    document.getElementById("mySlider").innerHTML = myHTML;
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
    buildDots();
}
buildSlider();
function prevSlide(){
    var nextSlideIndex;

    if (currentSlideIndex === 0 ) {
        nextSlideIndex = slideArray.length - 1;
    } else {
        nextSlideIndex = currentSlideIndex - 1;
    }

    document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
    currentSlideIndex = nextSlideIndex;
    fDot(currentSlideIndex);
}
function nextSlide(){
    var nextSlideIndex;

    if (currentSlideIndex === (slideArray.length - 1) ) {
        nextSlideIndex = 0;
    } else {
        nextSlideIndex = currentSlideIndex + 1;
    }

    document.getElementById("slide" + nextSlideIndex).style.left = "100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class",
        "singleSlide slideOutLeft");
    currentSlideIndex = nextSlideIndex;
    fDot(currentSlideIndex);
}

function buildDots(){
    var myHTML = '';
    for(var i = 0; i < slideArray.length; i++) {
        myHTML += "<div id='" + slideArray[i].counterDotSlider + "' class='dot' onclick='fDot(this.textContent);'><span>"+i+"</span></div>";
    }
    document.getElementById("circles").innerHTML = myHTML;
    document.getElementById("dot" + currentSlideIndex).setAttribute("class", "dot dot_active");
}
function fDot(currentSlideIndex) {
    console.log("dot" +currentSlideIndex);
    for(var i = 0; i < slideArray.length; i++) {
        document.getElementById("dot" + i).classList.remove("dot_active")
        document.getElementById("slide" + i).style.left = 0;
        document.getElementById("slide" + i).setAttribute("class", "singleSlide slideOutLeft");
    }
    document.getElementById("dot" + currentSlideIndex).setAttribute("class", "dot dot_active");
    document.getElementById("slide" + currentSlideIndex).style.left = "100%";
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideInRight");
}