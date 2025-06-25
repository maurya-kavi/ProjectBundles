async function fetchRecipe() {
    try {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log("Fetched Data:", data); // Debugging Step 1

        if (!data.drinks || data.drinks.length === 0) {
            throw new Error("No drinks found in API response"); // Debugging Step 2
        }

        displayCocktail(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayCocktail(data) {
    const cocktail = data.drinks[0];
    if (!cocktail) {
        console.error("Error: Cocktail data is null or undefined");
        return; // Stop function execution if data is invalid
    }

    const cocktailDiv = document.getElementById("cocktail");
    if (!cocktailDiv) {
        console.error("Error: Cannot find element with id='cocktail'");
        return;
    }

    cocktailDiv.innerHTML = ""; // Clear previous data

    // ✅ Cocktail Name
    const cocktailName = cocktail.strDrink;
    const heading = document.createElement("h1");
    heading.innerText = cocktailName;
    cocktailDiv.appendChild(heading);

    // ✅ Cocktail Image
    const cocktailImg = document.createElement("img");
    cocktailImg.src = cocktail.strDrinkThumb || "";
    cocktailImg.alt = cocktailName;
    cocktailDiv.appendChild(cocktailImg);

    // ✅ Set Background Image
    if (cocktail.strDrinkThumb) {
        document.body.style.backgroundImage = `url('${cocktail.strDrinkThumb}')`;
    }

    // ✅ Create Ingredients List Dynamically
    const cocktailIngredients = document.createElement("ul");
    cocktailDiv.appendChild(cocktailIngredients);

    for (let i = 1; i <= 15; i++) { 
        const ingredient = cocktail[`strIngredient${i}`];
        if (ingredient) {
            let listItem = document.createElement("li");
            listItem.innerText = ingredient;
            cocktailIngredients.appendChild(listItem);
        }
    }
}

// ✅ Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    fetchRecipe();
});
