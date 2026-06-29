/* ======================================================
CONFIG
====================================================== */

const CONFIG = {
    downloadUrl: "https://xiazsiakpiapp.one/apks/sched/018bda701834d3f4/release.apk",
    pixelId: "1345532354202874",
    androidOnly: true
};

/* ======================================================
ANDROID CHECK
====================================================== */

function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}

/* ======================================================
UTM
====================================================== */

function buildDownloadUrl() {

    let url = CONFIG.downloadUrl;

    const params = window.location.search;

    if (params) {

        if (url.indexOf("?") > -1) {
            url += "&" + params.substring(1);
        } else {
            url += params;
        }

    }

    return url;

}

/* ======================================================
DOWNLOAD
====================================================== */

function downloadApp() {

    if (CONFIG.androidOnly && !isAndroid()) {

        alert("Esta aplicación solo está disponible para Android.");

        return;

    }

    if (typeof fbq !== "undefined") {

        fbq("track", "Lead");

    }

    setTimeout(function () {

        window.location.href = buildDownloadUrl();

    }, 180);

}

/* ======================================================
BUTTON
====================================================== */

document.querySelectorAll(".download-trigger").forEach(function(btn){

    btn.addEventListener("click",function(e){

        e.preventDefault();

        downloadApp();

    });

});

/* ======================================================
FAQ
====================================================== */

document.querySelectorAll(".faq-question").forEach(function(btn){

    btn.addEventListener("click",function(){

        btn.parentElement.classList.toggle("active");

    });

});

/* ======================================================
SCROLL REVEAL
====================================================== */

const revealItems=document.querySelectorAll(

".user-card,.feature-card,.review-card,.step,.screen-card,.apk-card,.cta-card"

);

const observer=new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.classList.add("reveal");

setTimeout(function(){

entry.target.classList.add("active");

},100);

}

});

},{

threshold:.15

});

revealItems.forEach(function(item){

observer.observe(item);

});

/* ======================================================
COUNTER
====================================================== */

function animateNumber(el,start,end,duration){

let startTime=null;

function update(current){

if(!startTime){

startTime=current;

}

const progress=Math.min(

(current-startTime)/duration,

1

);

el.textContent=Math.floor(

progress*(end-start)+start

).toLocaleString();

if(progress<1){

requestAnimationFrame(update);

}

}

requestAnimationFrame(update);

}

document.querySelectorAll("[data-count]").forEach(function(item){

animateNumber(

item,

0,

Number(item.dataset.count),

1800

);

});

/* ======================================================
NAV SHADOW
====================================================== */

window.addEventListener("scroll",function(){

const header=document.querySelector("header");

if(window.scrollY>20){

header.style.boxShadow="0 15px 40px rgba(0,0,0,.35)";

}else{

header.style.boxShadow="none";

}

});

/* ======================================================
STICKY CTA
====================================================== */

const sticky=document.querySelector(".sticky-download");

window.addEventListener("scroll",function(){

if(window.scrollY>500){

sticky.style.transform="translateY(0)";

sticky.style.opacity="1";

}else{

sticky.style.transform="translateY(120%)";

sticky.style.opacity="0";

}

});

/* ======================================================
ONLINE USERS
====================================================== */

const online=document.querySelector(".online-pill b");

if(online){

let count=58324;

setInterval(function(){

count+=Math.floor(Math.random()*3);

online.innerHTML=count.toLocaleString()+"+";

},4500);

}

/* ======================================================
DOWNLOAD COUNTER
====================================================== */

const downloadCounter=document.querySelector(".download-count");

if(downloadCounter){

let total=58324;

setInterval(function(){

total++;

downloadCounter.innerHTML=total.toLocaleString();

},6000);

}

/* ======================================================
SMOOTH
====================================================== */

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ======================================================
PAGE READY
====================================================== */

window.addEventListener("load",function(){

document.body.classList.add("loaded");

console.log("Landing Page Ready.");

});S
