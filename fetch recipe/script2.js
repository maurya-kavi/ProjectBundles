async function fetchRecipe(){
    try{
        const promise=await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        if(!promise.ok) throw new Error(`HTTP error! Status: ${promise.status}`);
        const data =await promise.json();
        console.log(data);
        displayCocktail(data);
    }
    catch(error){
        console.error("Error fetching data:", error);
    }
}

fetchRecipe();

function displayCocktail(data) {
    const cocktail = data.drinks[0];
    const cocktailDiv = document.getElementById("cocktail");
    // cocktail name
    const cocktailName = cocktail.strDrink;
    const heading = document.createElement("h1");
    heading.innerHTML = cocktailName;
    cocktailDiv.appendChild(heading);
    // cocktail image
    const cocktailImg = document.createElement("img");
    cocktailImg.src = cocktail.strDrinkThumb;
    cocktailDiv.appendChild(cocktailImg);
    document.body.style.backgroundImage = "url('" + cocktail.strDrinkThumb + "')";
    // cocktail ingredients
    const cocktailIngredients = document.createElement("ul");
    cocktailDiv.appendChild(cocktailIngredients);

    const listItem1 = document.createElement('li');
    const listItem2 = document.createElement('li');
    const listItem3 = document.createElement('li');

    listItem1.innerText=cocktail.strIngredient1;
    listItem2.innerText=cocktail.strIngredient2;
    listItem3.innerText=cocktail.strIngredient3;

    cocktailIngredients.appendChild(listItem1);
    cocktailIngredients.appendChild(listItem2);
    cocktailIngredients.appendChild(listItem3);

    // for (let i = 1; i <= 15; i++) { 
    //     const ingredient = cocktail[`strIngredient${i}`];
    //     if (ingredient) {
    //         let listItem = document.createElement("li");
    //         listItem.innerText = ingredient;
    //         cocktailIngredients.appendChild(listItem);
    //     }
    // }
    

}


// fetchRecipe();