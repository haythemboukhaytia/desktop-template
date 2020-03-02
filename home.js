
function Produkt() {

    for (var i = 0; i < 3; i++) {
        var div = document.createElement('div');
        div.style.backgroundColor = "#fff";
        div.style.height = "auto";
        div.style.width = "30%";
        div.style.marginRight = "25px";
        div.style.float = "left";
        div.style.marginTop = "100px";
        div.style.marginBottom ="200px";

        var a = document.createElement('a');
        a.setAttribute('href', "#");
        a.innerText = "Link zur SEL";
        a.style.color = "grey";
        a.style.backgroundColor = "#0050aa";
        a.style.padding = "10px";
        a.style.display = "block";
        a.style.width = "100%";
        a.style.height = "100%";
        a.style.fontSize = "24px";


        var img = document.createElement("img");
        img.setAttribute("src", "images/Produkt.PNG");
        img.setAttribute("alt", "Produkt");
        img.style.width = "100%";
        img.style.height = "100%";


        var p1 = document.createElement("p");
        p1.innerHTML = "Lorem ipsum dolor sit amet";
        p1.setAttribute("class", "lorem");
        p1.style.color = "grey";
        p1.style.fontSize = "18px";
        p1.style.width = "100%";
        p1.style.textAlign = "left";

        var p2 = document.createElement("p");
        p2.innerHTML = "Lorem ipsum dolor sit amet";
        p2.setAttribute("class", "lorem2");
        p2.style.color = "black";
        p2.style.fontSize = "14px";
        p2.style.width = "100%";
        p2.style.textAlign = "left";

        var img2 = document.createElement("img");
        img2.setAttribute("src", "images/holiday.PNG");
        img2.setAttribute("alt", "holiday");
        img2.style.width = "100%";
        img2.style.height = "100%";

        var span = document.createElement("span");
        span.innerHTML = "Ab 299 EUR";
        span.setAttribute('class', 'Preis');
        span.style.border = "2px solid grey";
        span.style.padding = "20px"
        span.style.color = "black";
        span.style.fontSize = "16px";
        span.style.fontWeight = "bold";
        span.style.float = "right";

        var p3 = document.createElement("p");
        p3.innerHTML = "Lorem ipsum / Lorem ipsum";
        p3.style.fontSize = "10px";
        p3.style.float = "right";
        p3.style.position = "relative";
        p3.style.top = "65px";
        p3.style.left = "125px";

        div.appendChild(a);
        div.appendChild(img);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(img2);
        div.appendChild(span);
        div.appendChild(p3);
        document.getElementById('div1').appendChild(div);
    }
}
window.onload = $(Produkt);

function Teaser() {

    for (var i = 0; i < 9; i++) {
        var div = document.createElement('div');
        div.style.backgroundColor = "#fff";
        div.style.height = "auto";
        div.style.width = "30%";
        div.style.marginRight = "25px";
        div.style.float = "left";
        div.style.marginTop = "100px";

        var img = document.createElement("img");
        img.setAttribute("src", "images/kategorie.PNG");
        img.setAttribute("alt", "kategorie");
        img.style.width = "100%";
        img.style.height = "300px";

        var p = document.createElement("p");
        p.innerHTML = "Lorem ipsum dolor sit amet";
        p.setAttribute("class", "lorem2");
        p.style.color = "black";
        p.style.fontSize = "14px";
        p.style.width = "100%";
        p.style.height = "50px";
        p.style.backgroundColor = "#F2F3F4";
        p.style.textAlign = "left";

        var dv = document.createElement('div');
        dv.style.backgroundColor = "#ACB0B4";
        dv.style.height = "50px";
        dv.style.width = "100%";

        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(dv);
        document.getElementById("div2").appendChild(div);
    }
}
window.onload = $(Teaser);

function Kategorie() {
    for (var i = 0; i < 3; i++) {
        var div = document.createElement('div');
        div.style.backgroundColor = "#fff";
        div.style.height = "auto";
        div.style.width = "30%";
        div.style.marginRight = "25px";
        div.style.float = "left";
        div.style.marginTop = "100px";

        var img = document.createElement("img");
        img.setAttribute("src", "images/kategorie.PNG");
        img.setAttribute("alt", "Produkt");
        img.style.width = "100%";
        img.style.height = "300px";


        var p = document.createElement("p");
        p.innerHTML = "Lorem Ipsum";
        p.style.color = "black";
        p.style.fontSize = "14px";
        p.style.width = "100%";
        p.style.textAlign = "left";
        p.style.backgroundColor = "#F2F3F4";

        var dv = document.createElement('div');
        dv.style.backgroundColor = "#ACB0B4";
        dv.style.height = "50px";
        dv.style.width = "100%";


        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(dv);
        document.getElementById("box").appendChild(div);
}
}
window.onload = $(Kategorie);