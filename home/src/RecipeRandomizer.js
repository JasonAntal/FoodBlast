const recipes = {
    1: "Stuffing",
    2: "Red rice",
    3: "Lemon Pasta",
  };

  let recipeInfo = () => {
    let randomized = Math.ceil(Math.random()*Object.keys(recipes).length);
    let pickedRecipe = `${recipes[randomized]}`; 
    return pickedRecipe 
  };

export default recipeInfo;