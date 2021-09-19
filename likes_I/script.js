var numSomeUserLikes = 3;
var someUserLikes = document.querySelector("#someUserLikes")

someUserLikes.innerText=numSomeUserLikes;

function increaseSomeUserLikes(){
    numSomeUserLikes++;
    someUserLikes.innerText=numSomeUserLikes;
}
