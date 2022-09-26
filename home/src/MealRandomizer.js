
/* #region food */
const recipes = {
    1: "Stuffing",
    2: "Red rice",
    3: "Lemon Pasta",
  
  };
  
  const ingredients = {
  
    1: `1: Stuffing 
        2. Dark meat chicken (thighs or drumsticks)
        3. Savory vegetables (broccoli, cauliflower, asparagus, brussel sprouts, spinach, carrots, red cabbage, kale)
        4. Hot sauces(peri peri, buffalo, taco) or savory sauces(shiv, chick fil-a, soy)
        5. Any add-on works here.
        6. Hot seasoning or savory seasoning`,
  
    2: `Carb: Rice
        Seasoning: Cayenne, Paprika, Salt
        Add-on 1: Garlic
        Goes great with: 
        `,
    3: `Carb: Pasta
        Seasoning: Basil, Parsley, Lemon pepper, Salt
        Add-on 1: Mediterranean Lemon Sauce (Cream cheese, Lemon, Olive oil)
        Add-on 2: 
        Goes great with: 
        `,
  
  };
  
  const steps = {
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

  let displayInfo = () => {
    let randomized = Math.ceil(Math.random()*Object.keys(recipes).length);
    let finalText = `How to cook ${recipes[randomized]}; 
    First, prep this list of ingredients: ${ingredients[randomized]} 
    Then, ${steps[randomized]}`  
    return finalText 
  };


export default displayInfo