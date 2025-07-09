
export function createHome() {

const homeBody = document.createElement("div");
homeBody.id = "homeBody";

const homeTitle = document.createElement("h1");
homeTitle.id = "homeTitle";
homeTitle.textContent = "Mei's Pâtisserie Bar"
homeBody.appendChild(homeTitle);

const homeDescCont = document.createElement("div");
homeDescCont.id = "homeDescCont";
homeBody.appendChild(homeDescCont);

const 
return homeBody;
};