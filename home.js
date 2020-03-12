
function Produkt() {
    for (var i = 0; i < 3; i++) {
        var div = document.createElement('div');
        div.setAttribute("class", "firstdiv");

        var a = document.createElement('p');
        // a.setAttribute('href', "#");
        a.setAttribute("class", "linksel");
        a.innerText = "Link zur SEL";


        var img = document.createElement("img");
        img.setAttribute("src", "images/Produkt.PNG");
        img.setAttribute("alt", "Produkt");
        img.style.width = "100%";
        img.style.height = "100%";


        var p1 = document.createElement("p");
        p1.innerHTML = "Lorem ipsum dolor sit amet";
        p1.setAttribute("class", "lorem");

        var p2 = document.createElement("p");
        p2.innerHTML = "Lorem ipsum dolor sit amet";
        p2.setAttribute("class", "lorem2");


        var img2 = document.createElement("img");
        img2.setAttribute("src", "images/holiday.PNG");
        img2.setAttribute("alt", "holiday");
        img2.style.width = "100%";
        img2.style.height = "100%";

        var span = document.createElement("span");
        span.innerHTML = "Ab 299 EUR";
        span.setAttribute('class', 'Preis');

        var p3 = document.createElement("p");
        p3.innerHTML = "Lorem ipsum / Lorem ipsum";
        p3.setAttribute('class', 'lorem3');

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
        div.setAttribute("class", "thirddiv")
        
        var img = document.createElement("img");
        img.setAttribute("src", "images/kategorie.PNG");
        img.setAttribute("alt", "Teaser");
        img.setAttribute("class", "teaser");

        var p = document.createElement("p");
        p.innerHTML = "Lorem ipsum";
        p.setAttribute("class", "lorem4");

        var dv = document.createElement('div');
        dv.setAttribute("class","dv2")
        dv.style.backgroundColor = "#ACB0B4";

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
        div.setAttribute("class", "seconddiv");

        var img = document.createElement("img");
        img.setAttribute("src", "images/kategorie.PNG");
        img.setAttribute("alt", "Produkt");
        img.setAttribute('class', 'imgProdukt');

        var p = document.createElement("p");
        p.innerHTML = "Lorem Ipsum";
        p.setAttribute("class", "ptext");

        var dv = document.createElement('div');
        dv.setAttribute('class', 'dv');
 
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(dv);
        document.getElementById("box").appendChild(div);
    }
}
window.onload = $(Kategorie);