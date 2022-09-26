/* #region Food-related objects*/
let recipes = {
    1: "Stuffing",
    2: "Red rice",
    3: "Lemon Pasta",
    4: "Mashed Potatotes",
    5: "Ravioli",
    6: "Tacos",
    7: "Burritos",
    8: "Spaghetti and Tomato Sauce",
    9: "Green Rice",
    10: "Skullburgers",
    11: "Spicy Chinese Noodle Soup",
    12: "Mac and Cheese",
    13: "Fried Rice",
    14: "Chicken Piccata",
    15: "Tortellini",
    16: "Loaded Tater Tots",
    17: "Garlic Herb Couscous",
    18: "Noodles",
    19: "Bread Loaves",
    20: "BBQ burgers",
    21: "Gnocchi",
    22: "Nachos and Chicken Tenders",
};

let ingredients = {

    1: `
        Carb: Stuffing 
        Seasoning: Lawry's salt, Paprika, Pepper
        Add-on 1: Cheddar cheese
        Add-on 2: Lime/lemon zest
        Goes great with: Pork/Dark Chicken and Broccoli/Brussels Sprouts`,
    2: `Carb: Rice
        Seasoning: Cayenne, Paprika, Salt
        Add-on 1: Garlic
        Add-on 2: 
        Goes great with: 
        `,
    3: `Carb: Pasta
        Seasoning: Basil, Parsley, Lemon pepper, Salt
        Add-on 1: Mediterranean Lemon Sauce (Cream cheese, Lemon, Olive oil)
        Add-on 2: 
        Goes great with: 
        `,
    4: "Mashed Potatotes",
    5: "Ravioli",
    6: `Carb: Small tortillas
        Seasoning:
        Add-on 1: Avocado
        Add-on 2: Tomato
        Add-on 3: Cheddar or Mexican Cheese
        Goes great with:
    `,
    7: "Burritos",
    8: "Spaghetti and Tomato Sauce",
    9: "Green Rice",
    10: "Skullburgers",
    11: "Spicy Chinese Noodle Soup",
    12: "Mac and Cheese",
    13: "Fried Rice",
    14: "Chicken Piccata",
    15: "Tortellini",
    16: "Loaded Tater Tots",
    17: "Garlic Herb Couscous",
    18: "Noodles",
    19: "Bread Loaves",
    20: "BBQ burgers",
    21: "Gnocchi",
    22: `Carb: Tortilla Chips & Panko Breadcrumbs`,
};

let steps = {
    1: `1. Bring pot of water to a boil.
        2. Put stuffing in, add seasoning, and cover.
        3. After 2-3 minutes of boiling, add cheese and sauce to stuffing.
        4. Plate everything. Enjoy!`,
    2: `1. Bring pot of water to a boil, using 1 1/2 cups of water for every cup of rice.
        2. Add rice, then seasoning, to pot.
        3. Cover and set heat to low. Cook for 10 minutes, or until rice becomes fluffy.
        4. Plate everything. Enjoy!`,
    3: `This is a placeholder for now.`,
}
/* #endregion*/ 

let blacklist = [];

/* #region Recipe randomizer/Information display*/
let randomizer = function() {
    return Math.random()*Object.keys(recipes).length
}

let selectedRecipe = Math.ceil(randomizer());

let finalDisplay = function() {
return recipes[selectedRecipe] + ingredients[selectedRecipe] + steps[selectedRecipe];
};
let finalText = finalDisplay();
/* #endregion */

/*#region Action Buttons*/
let pickRecipe = "What should I cook?";
let add = "Add a recipe";
let remove = "Remove a recipe";
let cook = "Let's cook!";


let done = "All done";
addEventListener("click", function(){
    recipes.splice()
    blacklist.push()
})

addEventListener("click", function(){
    blacklist.splice()
    recipes.push()
})

let backHome = "Go back";
/*#endregion*/

let counter = "placeholder";