function navActive() {
    var oDiv_Nav = document.getElementById('nav');
    var aLi_Nav = oDiv_Nav.getElementsByTagName('li');
    var aA_Nav = oDiv_Nav.getElementsByTagName('a');
    var oDiv_Nav = document.getElementById('content');
    var change = document.getElementById('change');

    for (var i = 0; i < aLi_Nav.length; i++) {

        aLi_Nav[i].onmouseover = function() {
            for (var i = 0; i < aLi_Nav.length; i++) {
                aLi_Nav[i].style.backgroundColor = '';
                aLi_Nav[i].firstChild.style.color = '';
            }
            if (this.className.indexOf('active')) {
                this.style.backgroundColor = '#ffbb55';
                this.firstChild.style.color = '#333344';
            }
        }

        aLi_Nav[i].onmouseout = function() {
            for (var i = 0; i < aLi_Nav.length; i++) {
                aLi_Nav[i].style.backgroundColor = '';
                aLi_Nav[i].firstChild.style.color = '';
            }
        }
    }

    var preview = document.getElementById("preview");
    var links = document.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
        links[i].onmouseover = function() {
            var destination = this.getAttribute("href");

            if (destination.indexOf("index.html") != -1) {
                moveElement("preview", 0, 0, 10);
            }
            if (destination.indexOf("about.html") != -1) {
                moveElement("preview", -150, 0, 10);
            }
            if (destination.indexOf("photos.html") != -1) {
                moveElement("preview", -300, 0, 10);
            }
            if (destination.indexOf("live.html") != -1) {
                moveElement("preview", -450, 0, 10);
            }
            if (destination.indexOf("contact.html") != -1) {
                moveElement("preview", -600, 0, 10);
            }
        }
    }
}

function moveElement(elementID, final_x, final_y, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;

    var elem = document.getElementById(elementID);
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    if (!elem.style.left) {
        elem.style.left = "0px";
    }
    if (!elem.style.top) {
        elem.style.top = "0px";
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) {
        var dist = Math.ceil((final_x - xpos) / 10);
        xpos = xpos + dist;
    }
    if (xpos > final_x) {
        var dist = Math.ceil((xpos - final_x) / 10);
        xpos = xpos - dist;
    }
    if (ypos < final_y) {
        var dist = Math.ceil((final_y - ypos) / 10);
        ypos = ypos + dist;
    }
    if (ypos > final_y) {
        var dist = Math.ceil((ypos - final_y) / 10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
    elem.movement = setTimeout(repeat, interval);
}

function showText() {
    if (!document.getElementById('content_abt')) return false;
    if (!document.getElementsByTagName('li')) return false;
    var oDiv_abt = document.getElementById('content_abt');
    var aLi_abt = oDiv_abt.getElementsByTagName('li');
    var oDiv_p1 = document.getElementById('skript');
    var oDiv_p2 = document.getElementById('domsters')

    aLi_abt[0].onclick = function() {
        oDiv_p2.style.display = '';
        oDiv_p1.style.display = 'block';
    }

    aLi_abt[1].onclick = function() {
        oDiv_p1.style.display = '';
        oDiv_p2.style.display = 'block';
    }
}

function changeImg() {
    if (!document.getElementById('photo')) return false;
    if (!document.getElementsByTagName('img')) return false;
    if (!document.getElementById('Img_pht')) return false;
    if (!document.getElementById('text_pht')) return false;
    var oDiv_pht = document.getElementById('photo');
    var aLi_pht = oDiv_pht.getElementsByTagName('li');
    var aImg_pht = oDiv_pht.getElementsByTagName('img');
    var oImg_pht = document.getElementById('Img_pht');
    var oP_Pht = document.getElementById('text_pht');

    aImg_pht[0].onclick = function() {
        oImg_pht.src = "images/photos/concert.jpg";
        oP_Pht.innerHTML = aImg_pht[0].alt;
        return false;
    }
    aImg_pht[1].onclick = function() {
        oImg_pht.src = "images/photos/bassist.jpg";
        oP_Pht.innerHTML = aImg_pht[1].alt;
        return false;
    }
    aImg_pht[2].onclick = function() {
        oImg_pht.src = "images/photos/guitarist.jpg";
        oP_Pht.innerHTML = aImg_pht[2].alt;
        return false;
    }
    aImg_pht[3].onclick = function() {
        oImg_pht.src = "images/photos/crowd.jpg";
        oP_Pht.innerHTML = aImg_pht[3].alt;
        return false;
    }
}

function colorLi() {
    var oDiv_live = document.getElementById('content_live');
    var aTbody = oDiv_live.getElementsByTagName('tbody')[0];


    for (var i = 0; i < aTbody.rows.length; i++) {
        if (aTbody.rows[i].rowIndex % 2 == 1) {
            aTbody.rows[i].style.backgroundColor = '#eecc88';
        } else {
            aTbody.rows[i].style.backgroundColor = '#eebb66';
        }
    }

    for (var i = 0; i < aTbody.rows.length; i++) {
        aTbody.rows[i].onmouseover = function() {
            for (var i = 0; i < aTbody.rows.length; i++) {
                if (aTbody.rows[i].rowIndex % 2 == 1) {
                    aTbody.rows[i].style.backgroundColor = '#eecc88';
                } else {
                    aTbody.rows[i].style.backgroundColor = '#eebb66';
                }
            }
            this.style.backgroundColor = '#ccbbaa';
        }
    }
}

function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    var defs = new Array();
    for (var i = 0; i < abbreviations.length; i++) {
        var current_abbr = abbreviations[i];
        if (current_abbr.childNodes.length < 1) continue;
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    var dlist = document.createElement("dl");
    for (key in defs) {
        var definition = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (dlist.childNodes.length < 1) return false;
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    var articles = document.getElementsByTagName("article");
    if (articles.length == 0) return false;
    articles[0].appendChild(header);
    articles[0].appendChild(dlist);
}


function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

addLoadEvent(navActive);
addLoadEvent(showText);
addLoadEvent(changeImg);
addLoadEvent(colorLi);
addLoadEvent(displayAbbreviations);