// alert("It's Working!");

/*

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content

pic - image src
alt - the alt tag for the image
desc - a description of the coffee
day - the day of the week for the coffee
color - color associated with coffee
name - the name of the coffee

*/

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
    
    <p>
             <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>

    `;

    return myReturn;
}

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//data on queryString, load from queryString
    myDay = urlParams.get("day");
}

// conver to int
myDay = parseInt(myDay);

switch(myDay){

    case 0:
        today = "Sunday";

        coffee = {
            color:"gold",
            name: "Caramel latte",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            day: "Sunday",
            desc: `Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk-forward warm-up.`
        };

    break;

    case 1:
        today = "Monday";

        coffee = {
            color:"black",
            name: "Drip Coffee",
            pic: "images/drip.jpg",
            alt: "A picture of a Drip Coffee",
            day: "Monday",
            desc: `This full-bodied coffee with bold, robust flavors showcases our roasting and blending artistry—an essential blend of balanced and lingering flavors.`
        };

    break;

    case 2:
        today = "Tuesday";

        coffee = {
            color:"brown",
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A picture of a Frappaccino",
            day: "Tuesday",
            desc: `Coffee meets milk and ice in a blender for a rumble-and-tumble togetherness to create one of our most-beloved original Frappuccino blended beverages.`
        };

    break;

    case 3:
        today = "Wednesday";

        coffee = {
            color:"Pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Wednesday",
            desc: `Combination of smoothness and sweetness blending nicely with our freshly brewed tea`
        };

    break;

    case 4:
        today = "Thursday";

        coffee = {
            color:"brown",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a Mocha",
            day: "Thursday",
            desc: `Our rich, full-bodied espresso combined with bittersweet mocha sauce, milk and ice, then topped with sweetened whipped cream. The classic iced coffee drink that always sweetly satisfies.`
        };

    break;

    case 5:
        today = "Friday";

        coffee = {
            color:"orange",
            name: "Pumpkin Spice latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a Pumpkin Spice latte",
            day: "Friday",
            desc: `Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg and clove. Enjoy it topped with whipped cream and real pumpkin-pie spices.`
        };

    break;

    case 6:
        today = "Saturday";

        coffee = {
            color:"blue",
            name: "Cold Brew Coffee",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a Cold Brew Coffee",
            day: "Saturday",
            desc: `Handcrafted in small batches daily, slow-steeped in cool water for 20 hours, without touching heat our Cold Brew is made from our custom blend of beans grown to steep long and cold for a super-smooth flavor!`
        };

    break;


    default:
        today = "Something went wrong";
}

// let coffeeData = coffeeTemplate(coffee);

// alert(coffeeData);

// load coffee data to the page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color
