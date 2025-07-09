console.log("nigga");

import { createHome } from './home.js'
const content = document.getElementById("content");
content.innerHTML = "";
content.appendChild(createHome())