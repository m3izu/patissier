class Menulist {

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
        foodDiv.className = `foodies`;

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
        desc: "Ensaymadas are a soft, spiral-shaped pastry from Spain's Balearic Islands that combine rich history and sweet flavor. They originated during the Moorish influence in Spain, mixing ingredients like lard and sugar to form a sweet dough.",
        price: 40, pic: `https://foodnhotelasia.com/wp-content/uploads/2025/04/ensaymadas.jpg`
    }
]

const cakes = [
    {
        name: "ube", title: "Ube Cake",
        desc: "This creamy ube isn't just for eating on its own, though. It's a key ingredient in many Filipino desserts. In this case, ube jam makes the most decadent cake. The sponge cake layers are infused with ube, and the buttercream filling is loaded with it.",
        price: 130, pic: `https://i.pinimg.com/736x/67/96/d3/6796d3b8dfd72a4a7042d7db87915f01.jpg`
    },
    {
        name: "bibingka", title: "Bibingka",
        desc: "It's a thick, fluffy hot cake that gets its unique texture from rice flour. Coconut milk adds a sweet richness that sets it apart.  Melted butter, shredded cheese, toasted coconut, and salted egg slices create a perfect mix of sweet and salty. ",
        price: 110, pic: `https://i.pinimg.com/736x/01/90/8b/01908be162ba8292bc619e9c5da6c050.jpg`
    },
    {
        name: "red", title: "Red Velvet",
        desc: " Red velvet cake has some of the same depth as a chocolate cake, but with the subtle tang of buttermilk and a sweet cream cheese frosting. The complexity of flavor and sensations in a red velvet cake (along with its astonishing color, which was originally attributed to the use of certain types of cocoa powder used in the sponge, per Southern Living), is what makes red velvet cake one of our timeless favorites.",
        price: 200, pic: `https://www.tastingtable.com/img/gallery/ranking-27-popular-cake-flavors-from-worst-to-best/red-velvet-cake-1672771728.webp`
    },
    {
        name: "chocolate", title: "Chocolate Cake",
        desc: "When we say chocolate cake, we're referring to the stick-to-your-ribs, significant-other-just-broke-up-with-you, dense cake that everyone dreams of. You can make it into a nostalgic chocolate layer cake with a fudge frosting or bake it into a sheet cake for a crowd.",
        price: 180, pic: `https://www.tastingtable.com/img/gallery/ranking-27-popular-cake-flavors-from-worst-to-best/chocolate-cake-1672771728.webp`
    },
    {
        name: "carrot", title: "Carrot Cake",
        desc: "Carrot is a versatile cake flavor that includes an important ingredient to help break up the monotony of the spiced sponge.",
        price: 179, pic: `https://www.tastingtable.com/img/gallery/ranking-27-popular-cake-flavors-from-worst-to-best/carrot-cake-1672771728.webp`
    },
    {
        name: "white", title: "White Cake",
        desc: "White cake is a very delicate type of vanilla cake used for weddings and special celebrations. The crumb texture is delicate because it is leavened using egg whites and baking powder. While the crumb structure on a white cake is something of beauty, the flavor is as exciting as its color.",
        price: 200, pic: `https://www.tastingtable.com/img/gallery/ranking-27-popular-cake-flavors-from-worst-to-best/white-cake-1672771728.webp`
    },
    {
        name: "cheese", title: "Cheese Cake",
        desc: "Cheesecake is actually a tart because it is enclosed on three sides with a pastry shell, can have its top decorated, and does not require baking to be safe to eat.",
        price: 160, pic: `https://www.tastingtable.com/img/gallery/ranking-27-popular-cake-flavors-from-worst-to-best/cheesecake-1672771728.webp`
    },
    {
        name: "funfetti", title: "Funfetti Cake",
        desc: "The inclusion of sprinkles within the sponge creates streaks of color that look super youthful and exciting to the eye but tastes mediocre when you take a bite.",
        price: 189, pic: `https://www.tastingtable.com/img/gallery/ranking-27-popular-cake-flavors-from-worst-to-best/funfetti-cake-1672771728.webp`
    },
    {
        name: "mariel", title: "Mariel Cake",
        desc: "sweetest cake of all",
        price: "pricelesssss", pic: `https://i.ibb.co/tpVC4cF6/Screenshot-2025-07-10-030719.png`
    }
]


export function createMenu() {
    Menulist.counter = 0;

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

    const cakefoodTitle = document.createElement("h2");
    cakefoodTitle.id = "cakefoodTitle";
    cakefoodTitle.textContent = "Cakes:"
    menuCont.appendChild(cakefoodTitle);

    const cakesfoodDiv = document.createElement("div");
    cakesfoodDiv.id = "cakesfoodDiv"
    menuCont.appendChild(cakesfoodDiv);
    
    for (const item of cakes) {
        const menuItem = new Menulist(item.name, item.title, item.desc, item.price, item.pic);
        const foodElement = menuItem.createFoodies();
        cakesfoodDiv.appendChild(foodElement);
    }


    return menuBody;
}