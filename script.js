console.log("JS pieslēgts un darbojas");


document.getElementById("poga").addEventListener("click", function () {
    document.getElementById("teksts").style.color = "blue";
    document.getElementById("teksts").textContent = "Poga tika nospiesta!";
});


document.getElementById("vards").addEventListener("input", function () {
    document.getElementById("teksts").textContent =
        "Sveiki, " + this.value + "!";
});

document.getElementById("poga").addEventListener("click", function () {
    alert("JavaScript darbojas!");
});

