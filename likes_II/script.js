var numLikesNeil = 9;
var neilLikes = document.querySelector("#neilLikes");
var numLikesNichole = 12;
var nicholeLikes = document.querySelector("#nicholeLikes");
var numLikesJim = 9;
var jimLikes = document.querySelector("#jimLikes");

neilLikes.innerText = numLikesNeil;
nicholeLikes.innerText = numLikesNichole;
jimLikes.innerText = numLikesJim;

function increaseNeilLikes(){
    numLikesNeil++;
    neilLikes.innerText = numLikesNeil;
}

function increaseNicholeLikes(){
    numLikesNichole++;
    nicholeLikes.innerText = numLikesNichole;
}

function increaseJimLikes(){
    numLikesJim++;
    jimLikes.innerText = numLikesJim;
}
