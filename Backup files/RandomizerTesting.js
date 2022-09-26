

let recipes = {
    1: "Stuffing",
    2: "Red rice",
};

let ingredients = {

    1: `Carb: Stuffing 
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
}

let randomizer = function() {
    return Math.random()*Object.keys(recipes).length
}

let selectedRecipe = Math.ceil(randomizer());
