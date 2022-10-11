
/* #region food */
const recipes = {
    1: "Stuffing with Minced Chicken",
    2: "Fried Rice",
    3: "Lemon Pasta",
    4: "Turkey Mashed Potatoes",
    5: "Ravioli",
    6: "Tacos",
    7: "Burritos",
    8: "Spaghetti with Tomato Sauce",
    9: "Yellow Rice Bowl",
    10: "Skullburgers",
    11: "Chinese Noodle Soup",
    12: "Mac and Cheese",
    13: "Tortellini",
    14: "Loaded Tater Tots",
    15: "Garlic Herb Couscous",
    16: "Texas Toast with Chicken Breast",
    17: "Butter Noodles and Chicken Piccata",
    18: "Loaded Nachos",
    19: "Pho",
    20: "Chicken with Rice",
    21: "Loaded Potato"
  };
  
  const ingredients = {
  
    1: `Stuffing, Chicken thigh, Broccoli,
        Hot sauce, Cheddar cheese, Paprika and garlic salt`,
  
    2: `Rice, Salmon, Carrots,
        Soy Sauce, Green Onions, Eggs, Cayenne and garlic salt,
        `,
        
    3: `Pasta, Ground turkey, Cauliflower, 
        Lemon Cream Sauce, Lemon zest, basil and parsley
        `,

    4: `Potatoes, Chicken tenderloins, Brussel Sprouts,
        Buffalo sauce, Cheddar cheese, bacon bits, paprika and mushroom powder
        `,

    5: `Ravioli, Ground Turkey, Spinach,
        Tomato sauce, Parmesan Cheese, Garlic powder and rosemary
        `,

    6: `Tortillas, Chicken thigh, spinach,
        Hot Sauce, taco blend cheese, Cayenne and Red Pepper
        `,

    7: `Tortillas, Chicken Breast, kale chips,
        Hot Sauce, taco blend cheese, Paprika and garlic powder
        `,

    8: `Pasta, Ground turkey, Asparagus,
        Tomato Sauce, parmesan cheese, Oregano and Rosemary
        `,

    9: `Yellow rice, Steak, Brussel Sprouts,
        Secret sauce, onion, salt and pepper
        `,

    10: `Sesame buns, Ground Turkey, Kale Chips,
         Secret Sauce, avocado, salt and pepper
        `,

    11: `Noodles, Chicken Tenderloin, Broccoli,
         Soy Sauce, green onions, chicken stock, salt and pepper
        `,

    12: `Kraft mac-n-cheese box, Chicken Thigh, Broccoli,
         Peri Peri sauce, breadcrumbs, salt and pepper
        `,

    13: `Tortellini, Ground Turkey, Cauliflower, 
         Tomato Sauce, lemon zest, salt and pepper
        `,

    14: `Tater tots, Drumsticks, Spinach,
         Chick-fil-a sauce, bacon bits, cheddar cheese, salt and pepper
        `,

    15: `Couscous, Salmon, Asparagus,
         Chick-fil-a Sauce, parmesan cheese, salt and pepper
        `,

    16: `Texas toast, Chicken Breast, Carrots
         Buffalo Sauce, avocado, salt and pepper
        `,

    17: `Noodles, Chicken Breast, cauliflower
         Lime stock, green onion, salt and pepper
        `,

    18: `Tortilla chips, Drumsticks, Kale Chips
         Peri Peri sauce, cheddar cheese, avocado, salt and pepper
        `,

    19: `Banh Pho, Chicken tenderloin, carrots, 
         Soy sauce, green onion, salt and pepper
        `,

    20: `Jasmine Rice, Chicken tenderloin, Brussel sprouts
         Peri Peri sauce, onion, salt and pepper
        `,

    21: `Potato, Steak, Asparagus,
         Buffalo Sauce, cheddar cheese, salt and pepper
        `,

  };
  
  const steps = {
    1: `1. Bring pot of water to a boil.
        2. Put stuffing in, add seasoning, and cover.
        3. After 2-3 minutes of boiling, add cheese and sauce to stuffing.
        4. Plate and enjoy!`,

    2: `1. Bring pot of water to a boil, using 1 1/2 cups of water for every cup of rice.
        2. Add rice, then seasoning, to pot.
        3. Cover and set heat to low. Cook for 10 minutes, or until rice becomes fluffy.
        4. Plate and enjoy!`,

    3: `1. Set the oven to 350 degrees.
        2. Dice the vegetables. Add salt, pepper, and olive oil, then put in the oven. 
        3. Cut meat into smaller pieces. Add seasoning and put the meat on a pan over medium-low heat.
        4. Begin cooking all other ingredients.
        5. Monitor all ingredients as they cook.
        6. As each ingredient finishes, remove heat and add it to a plate. Add all remaining ingredients.
        7. Enjoy!
    `,

    4: `1. Set the oven to 350 degrees.
        2. Dice the vegetables. Add salt, pepper, and olive oil, then put in the oven. 
        3. Cut meat into smaller pieces. Add seasoning and put the meat on a pan over medium-low heat.
        4. Begin cooking all other ingredients.
        5. Monitor all ingredients as they cook.
        6. As each ingredient finishes, remove heat and add it to a plate. Add all remaining ingredients.
        7. Enjoy!
    `,    

    5:   `1. Set the oven to 350 degrees.
          2. Dice the vegetables. Add salt, pepper, and olive oil, then put in the oven.
 
        3 4. Cut meat into smaller pieces. Add seasoning and put the meat on a pan over medi-lowum heat.
      4. Begin cooking all other ingredients.
        s. Monitor all ingredients as they cook.
          6. As each ingredient finishes, remove heat and add it to a plate. Add all remaining ingredients.
          7. Enjoy!
`,    

    6:   `1. Set the oven to 350 degrees.
          2. Dice the vegetables. Add salt, pepper, and olive oil, then put in the oven.
 
        3 4. Cut meat into smaller pieces. Add seasoning and put the meat on a pan over medi-lowum heat.
      4. Begin cooking all other ingredients.
        s. Monitor all ingredients as they cook.
          6. As each ingredient finishes, remove heat and add it to a plate. Add all remaining ingredients.
          7. Enjoy!
`,    

    7:   `1. Set the oven to 350 degrees.
          2. Dice the vegetables. Add salt, pepper, and olive oil, then put in the oven.
 
        3 4. Cut meat into smaller pieces. Add seasoning and put the meat on a pan over medi-lowum heat.
      4. Begin cooking all other ingredients.
        s. Monitor all ingredients as they cook.
          6. As each ingredient finishes, remove heat and add it to a plate. Add all remaining ingredients.
          7. Enjoy!
`,    

    8:   `1. Set the oven to 350 degrees.
          2. Dice the vegetables. Add salt, pepper, and olive oil, then put in the oven.
 
        3 4. Cut meat into smaller pieces. Add seasoning and put the meat on a pan over medi-lowum heat.
      4. Begin cooking all other ingredients.
        s. Monitor all ingredients as they cook.
          6. As each ingredient finishes, remove heat and add it to a plate. Add all remaining ingredients.
          7. Enjoy!
`,    

    9:   `1. Set the oven to 350 degrees.
          2. Dice the vegetables. Add salt, pepper, and olive oil, then put in the oven.
 
        3 4. Cut meat into smaller pieces. Add seasoning and put the meat on a pan over medi-lowum heat.
      4. Begin cooking all other ingredients.
        s. Monitor all ingredients as they cook.
          6. As each ingredient finishes, remove heat and add it to a plate. Add all remaining ingredients.
          7. Enjoy!
`,    

    10:  `1. Set the oven to 350 degrees.
          2. Dice the vegetables. Add salt, pepper, and olive oil, then put in the oven.
 
        3 4. Cut meat into smaller pieces. Add seasoning and put the meat on a pan over medi-lowum heat.
      4. Begin cooking all other ingredients.
        s. Monitor all ingredients as they cook.
          6. As each ingredient finishes, remove heat and add it to a plate. Add all remaining ingredients.
          7. Enjoy!
`,    

    11:  `1. Set the oven to 350 degrees.
          2. Dice the vegetables. Add salt, pepper, and olive oil, then put in the oven.
 
        3 4. Cut meat into smaller pieces. Add seasoning and put the meat on a pan over medi-lowum heat.
      4. Begin cooking all other ingredients.
        s. Monitor all ingredients as they cook.
          6. As each ingredient finishes, remove heat and add it to a plate. Add all remaining ingredients.
          7. Enjoy!
`,    

    12:  `1. Set the oven to 350 degrees.
          2. Dice the vegetables. Add salt, pepper, and olive oil, then put in the oven.
 
        3 4. Cut meat into smaller pieces. Add seasoning and put the meat on a pan over medi-lowum heat.
      4. Begin cooking all other ingredients.
        s. Monitor all ingredients as they cook.
          6. As each ingredient finishes, remove heat and add it to a plate. Add all remaining ingredients.
          7. Enjoy!
`,    

    13:  `1. Set the oven to 350 degrees.
          2. Dice the vegetables. Add salt, pepper, and olive oil, then put in the oven.
 
        3 4. Cut meat into smaller pieces. Add seasoning and put the meat on a pan over medi-lowum heat.
      4. Begin cooking all other ingredients.
        s. Monitor all ingredients as they cook.
          6. As each ingredient finishes, remove heat and add it to a plate. Add all remaining ingredients.
          7. Enjoy!
`,    

    14:  `1. Set the oven to 350 degrees.
          2. Dice the vegetables. Add salt, pepper, and olive oil, then put in the oven.
 
        3 4. Cut meat into smaller pieces. Add seasoning and put the meat on a pan over medi-lowum heat.
      4. Begin cooking all other ingredients.
        s. Monitor all ingredients as they cook.
          6. As each ingredient finishes, remove heat and add it to a plate. Add all remaining ingredients.
          7. Enjoy!
`,    

    15:  `1. Set the oven to 350 degrees.
          2. Dice the vegetables. Add salt, pepper, and olive oil, then put in the oven.
 
        3 4. Cut meat into smaller pieces. Add seasoning and put the meat on a pan over medi-lowum heat.
      4. Begin cooking all other ingredients.
        s. Monitor all ingredients as they cook.
          6. As each ingredient finishes, remove heat and add it to a plate. Add all remaining ingredients.
          7. Enjoy!
`,    

    16:   `1. Set the oven to 350 degrees.
          2. Dice the vegetables. Add salt, pepper, and olive oil, then put in the oven.
 
        3 4. Cut meat into smaller pieces. Add seasoning and put the meat on a pan over medi-lowum heat.
      4. Begin cooking all other ingredients.
        s. Monitor all ingredients as they cook.
          6. As each ingredient finishes, remove heat and add it to a plate. Add all remaining ingredients.
          7. Enjoy!
`,    

    17:  `1. Set the oven to 350 degrees.
          2. Dice the vegetables. Add salt, pepper, and olive oil, then put in the oven.
 
        3 4. Cut meat into smaller pieces. Add seasoning and put the meat on a pan over medi-lowum heat.
      4. Begin cooking all other ingredients.
        s. Monitor all ingredients as they cook.
          6. As each ingredient finishes, remove heat and add it to a plate. Add all remaining ingredients.
          7. Enjoy!
`,    

    18:  `1. Set the oven to 350 degrees.
          2. Dice the vegetables. Add salt, pepper, and olive oil, then put in the oven.
 
        3 4. Cut meat into smaller pieces. Add seasoning and put the meat on a pan over medi-lowum heat.
      4. Begin cooking all other ingredients.
        s. Monitor all ingredients as they cook.
          6. As each ingredient finishes, remove heat and add it to a plate. Add all remaining ingredients.
          7. Enjoy!
`,    

    19:  `1. Set the oven to 350 degrees.
          2. Dice the vegetables. Add salt, pepper, and olive oil, then put in the oven.
 
        3 4. Cut meat into smaller pieces. Add seasoning and put the meat on a pan over medi-lowum heat.
      4. Begin cooking all other ingredients.
        s. Monitor all ingredients as they cook.
          6. As each ingredient finishes, remove heat and add it to a plate. Add all remaining ingredients.
          7. Enjoy!
`,    

    20:  `1. Set the oven to 350 degrees.
          2. Dice the vegetables. Add salt, pepper, and olive oil, then put in the oven.
 
        3 4. Cut meat into smaller pieces. Add seasoning and put the meat on a pan over medi-lowum heat.
      4. Begin cooking all other ingredients.
        s. Monitor all ingredients as they cook.
          6. As each ingredient finishes, remove heat and add it to a plate. Add all remaining ingredients.
          7. Enjoy!
`,    

    21:  `1. Set the oven to 350 degrees.
          2. Dice the vegetables. Add salt, pepper, and olive oil, then put in the oven.
 
        3 4. Cut meat into smaller pieces. Add seasoning and put the meat on a pan over medi-lowum heat.
      4. Begin cooking all other ingredients.
        s. Monitor all ingredients as they cook.
          6. As each ingredient finishes, remove heat and add it to a plate. Add all remaining ingredients.
          7. Enjoy!
`,

  }
  /* #endregion*/ 

  function displayInfo () {
    let randomized = Math.ceil(Math.random()*Object.keys(recipes).length);
    const firstLine = `How to cook ${recipes[randomized]}:`
    const secondLine  = `Ingredients needed: ${ingredients[randomized]} `
    const thirdLine  = `Steps: ${steps[randomized]}`
    return (
    <div>
      {firstLine}
      <br/>
      <br/>
      {secondLine}
      <br />
      <br />
      {thirdLine}
    </div>)
  };


export default displayInfo