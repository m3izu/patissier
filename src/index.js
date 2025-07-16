import "./styles.css"
import { createHome } from './home.js'
import { createMenu } from './menu.js'
import { createAbout } from './about.js'

const content = document.getElementById("content");
content.innerHTML = "";
content.appendChild(createHome());


function navButton(choice) {
    content.innerHTML = '';
    return content.appendChild(choice);
}

document.getElementById("homeButton").addEventListener("click",() => navButton(createHome()));
document.getElementById("menuButton").addEventListener("click",() => navButton(createMenu()));
document.getElementById("aboutButton").addEventListener("click",() => navButton(createAbout()));