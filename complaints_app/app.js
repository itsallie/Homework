var def = 10;
document.getElementById("search").addEventListener("change", newfunc);

function hide(x) {
    console.log(x)
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function displayData(data) {
    for (let i = 0; i < def; i++) {
        console.log(data[i])
        console.log(data[i].descriptor)
        console.log(data[i].resolution_description)
        x = ("btn" + (i + 1))
        document.getElementById("item" + (i + 1)).innerHTML = data[i].descriptor + ` <button style="justify-content:right" onclick="hide(btn${i + 1})">WHAT DID THE POLICE DO?</button>`
        document.getElementById("btn" + (i + 1)).innerHTML = data[i].resolution_description
        document.getElementById("btn" + (i + 1)).style.display = "none";
    }
}

function newfunc() {
    def = document.getElementById("search").value
}

function drop(borough) {
    if (borough == "statenisland") {
        fetch("https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=STATEN+ISLAND&$limit=" + def)
            .then(response => response.json())
            .then(data => displayData(data));
    } else {
        fetch("https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=" + borough.toUpperCase() + "&$limit=" + def)
            .then(response => response.json())
            .then(data => displayData(data));
    }
}
