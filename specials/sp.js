function changeImg(img)
{    
    document.getElementById("mainImg").src=img.src
    
}
function changeFaceColor() {
            document.getElementById("panda").style.filter = "hue-rotate(180deg)";
}

function changeText() {
            document.getElementById("flavourText").innerText = "Let's do coding!";
}

function vanish() {
            document.body.style.display = "none";
}
