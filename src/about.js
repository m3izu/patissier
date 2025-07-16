class someInfo {
    constructor(name, title, description) {
        this.name = name;
        this.title = title;
        this.description = description;
        this.id = `${name}-${someInfo.counter++}`
    }

    createInfo() {
        const div = document.createElement("div");
        div.id = `${this.id}-${this.name}`;

        const title = document.createElement("h3");
        title.id = `${this.id}-infoTitle`
        title.textContent = this.title;
        
        const desc = document.createElement("p");
        desc.id = `${this.id}-infoDesc`;
        desc.textContent = this.description;

        div.appendChild(title);
        div.appendChild(desc);

        return div;
    }
}

export function createAbout() {
    someInfo.counter = 0;
    const infoBody = document.createElement("div");
    infoBody.id = "infoBody";

    const infoTitle = document.createElement("h1");
    infoTitle.id = "infoTitle";
    infoTitle.textContent = "About";
    infoBody.appendChild(infoTitle);

    const infoDescCont = document.createElement("div");
    infoDescCont.id = `infoDescCont`;
    infoBody.appendChild(infoDescCont);

    const info1 = new someInfo("test1", "test1", "test1");
    const info2 = new someInfo("test2", "test2", "test2");
    const info3 = new someInfo("test3", "test3", "test3");

    infoDescCont.appendChild(info1.createInfo());
    infoDescCont.appendChild(info2.createInfo());
    infoDescCont.appendChild(info3.createInfo());

    return infoBody;
};