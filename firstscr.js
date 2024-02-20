function closeText(){
    x=document.getElementById("demo");
    x.style.display="none";
}
function openText(){
    x=document.getElementById("demo");
    x.style.display="block";
}
const button = document.getElementById("mybutt");
const textToChange = document.getElementById("demo");

button.addEventListener("mouseover", function() {
  textToChange.textContent = "ARE YOU SURE!!!????";
});

button.addEventListener("mouseout", function() {
  textToChange.textContent = "Toi la batman va toi can giai cuu the gioi, hay cho toi pass bai nay";
});