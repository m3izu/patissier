class Description {

    constructor(name, title, desc) {
        this.name = name;
        this.title = title;
        this.desc = desc;
        this.id = `${name}-${Description.counter++}`
    }

    createElement() {
        const container = document.createElement("div");
        container.id = `${this.id}-${this.name}`;

        const elementTitle = document.createElement("h3");
        elementTitle.id = `${this.id}-title`;
        elementTitle.textContent = this.title;


        const elementDesc = document.createElement("p");
        elementDesc.id = `${this.id}-desc`;
        elementDesc.textContent = this.desc;

        container.appendChild(elementTitle);
        container.appendChild(elementDesc);

        return container;
    }
}



export function createHome() {
Description.counter = 0;

const homeBody = document.createElement("div");
homeBody.id = "homeBody";

const homeTitle = document.createElement("h1");
homeTitle.id = "homeTitle";
homeTitle.textContent = "Mei's Pâtisserie"
homeBody.appendChild(homeTitle);

const homeDescCont = document.createElement("div");
homeDescCont.id = "homeDescCont";
homeBody.appendChild(homeDescCont);

const descri = new Description("intro", "CDO's Best Patisserie!!!", "lorem ipsum lorem ipsum lorem ipsum")
homeDescCont.appendChild(descri.createElement());

const hours = new Description("hours", "Hours:", 
    "Sunday: 8am - 8pm Monday: 6am - 6pm Tuesday: 6am - 6pm Wednesday: 6am - 6pm Thursday: 6am - 10pm Friday: 6am - 10pm Saturday: 8am - 10pm"
);
homeDescCont.appendChild(hours.createElement());

const location = new Description("location", "Location:", "Kauswagan, CDOC");
homeDescCont.appendChild(location.createElement());

return homeBody;
};