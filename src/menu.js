class Menulist {
    static counter = 0;

    constructor(name, title, desc, price, pic) {
        this.name = name;
        this.title = title;
        this.desc = desc;
        this.price = price;
        this.pic = pic;
        this.id = `${name}-${Menulist.counter++}`
    }

    createFoodies() {
        const foodDiv = document.createElement("div");
        foodDiv.id = `${this.id}-${this.name}`;

        const foodTitle = document.createElement("h3");
        foodTitle.id = `${this.title}-${this.id}`;
        foodTitle.textContent = this.title;
        foodDiv.appendChild(foodTitle);

        const foodPic = document.createElement("img");
        foodPic.id = `${this.id}-${this.name}-pic`
        foodPic.src = this.pic;
        foodDiv.appendChild(foodPic);

        const foodDesc = document.createElement("p");
        foodDesc.id = `${this.id}-${this.name}-desc`;
        foodDesc.textContent = this.desc;
        foodDiv.appendChild(foodDesc);

        const foodPrice = document.createElement("p");
        foodPrice.id = `${this.id}-${this.name}-price`;
        foodPrice.textContent = "$" + this.price;
        foodDiv.appendChild(foodPrice);

        return foodDiv;
    }
}

const pastries = [
    {
        name: "croissant", title: "Croissant", 
        desc: "The croissant, a renowned French pastry, has a rich history dating back to a period of Viennese influence in France and is one of the most popular pastries.",
        price: 89, pic: `https://foodnhotelasia.com/wp-content/uploads/2023/08/Two-croissants-on-a-platter.jpg`},

    {
        name: "macaron", title: "Macaron",
        desc: "Enter the enchanting world of macarons, a delicate and colorful French confection that has mesmerized dessert enthusiasts across the globe.",
        price: 60, pic: `https://foodnhotelasia.com/wp-content/uploads/2023/08/A-collection-of-macarons.jpg`
    },
    {
        name: "eclair", title: "Éclair",
        desc: "Indulge in the elegance of éclairs, a beloved French dessert known for its elongated shape and delectable combination of choux pastry, creamy filling, and luscious chocolate glaze. Created from pâte à choux, a light and airy dough, the éclair boasts a crisp outer shell that encases a luxurious cream filling.",
        price: 80, pic: `https://foodnhotelasia.com/wp-content/uploads/2023/08/Eclair-with-chocolate-ganache.jpg`
    },
    {
        name: "tiramisu", title: "Tiramisu",
        desc: "Delve into the allure of tiramisu, the classic Italian dessert renowned for its heavenly layers of coffee-soaked ladyfingers and velvety mascarpone cream. This beloved Italian creation has earned a global following and is a culinary excellence symbol.",
        price: 120, pic: `https://foodnhotelasia.com/wp-content/uploads/2023/08/A-tiramisu-portion-topped-with-strawberry.jpg`
    },
    {
        name: "donuts", title: "Doughnuts",
        desc: "Donuts are often enjoyed as a breakfast item or snack paired with coffee, making them a popular breakfast treat in many cultures. With various toppings, from powdered sugar to colorful sprinkles and chocolate, donuts continue to be considered one of the best pastries in the world.",
        price: 70, pic: `https://foodnhotelasia.com/wp-content/uploads/2025/04/Donuts.jpg`
    },
    {
        name: "ensaymada", title: "Ensaymadas",
        desc: "Ensaymadas are a soft, spiral-shaped pastry from Spain’s Balearic Islands that combine rich history and sweet flavor. They originated during the Moorish influence in Spain, mixing ingredients like lard and sugar to form a sweet dough.",
        price: 40, pic: `https://foodnhotelasia.com/wp-content/uploads/2025/04/ensaymadas.jpg`
    }
]


export function createMenu() {
    const menuBody = document.createElement("div");
    menuBody.id = "menuBody";

    const menuTitle = document.createElement("h1");
    menuTitle.id = "menuTitle";
    menuTitle.textContent = "Our Delicious Menu!"
    menuBody.appendChild(menuTitle);

    const menuCont = document.createElement("div");
    menuCont.id = "menuCont";
    menuBody.appendChild(menuCont);

    const pastriesfoodTitle = document.createElement("h2");
    pastriesfoodTitle.id = "pastriesfoodTitle";
    pastriesfoodTitle.textContent = "Pastries:"
    menuCont.appendChild(pastriesfoodTitle)

    const pastriesfoodDiv = document.createElement("div");
    pastriesfoodDiv.id = "pastriesfoodDiv"
    menuCont.appendChild(pastriesfoodDiv);

    for (const item of pastries) {
        const menuItem = new Menulist(item.name, item.title, item.desc, item.price, item.pic);
        const foodElement = menuItem.createFoodies();
        pastriesfoodDiv.appendChild(foodElement);
    }
    
    return menuBody;
}