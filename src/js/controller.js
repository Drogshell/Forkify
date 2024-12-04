import 'core-js/stable'
import 'regenerator-runtime/runtime'
import * as model from './model.js'
import recipeView from './views/recipeView';

// Custom API created by Jonas
// https://forkify-api.herokuapp.com/v2

const recipeContainer = document.querySelector('.recipe');

const controlRecipes = async function () {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;

        //Loading recipe
        recipeView.renderSpinner();
        await model.loadRecipe(id);
        //Rendering recipe
        recipeView.render(model.state.recipe);

    } catch (err) {
        alert(err);
    }
}

const init = function (){
    recipeView.addHandlerRender(controlRecipes)
}

init();