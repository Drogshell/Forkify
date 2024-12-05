import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';
import bookmarksView from './views/bookmarksView';

// Custom API created by Jonas
// https://forkify-api.herokuapp.com/v2

const controlRecipes = async function () {
	try {
		const id = window.location.hash.slice(1);
		if (!id) return;

		//Loading recipe
		recipeView.renderSpinner();

		resultsView.update(model.getSearchResultsPage());

		bookmarksView.update(model.state.bookmarks);

		await model.loadRecipe(id);

		//Rendering recipe
		recipeView.render(model.state.recipe);
	} catch (err) {
		recipeView.renderError();
	}
};

const controlSearchResults = async function () {
	try {
		resultsView.renderSpinner();
		const query = searchView.getQuery();

		if (!query) return;

		await model.loadSearchResults(query);

		resultsView.render(model.getSearchResultsPage());
		paginationView.render(model.state.search);
	} catch (err) {
		console.log(err);
	}
};

const controlPagination = function (goToPage) {
	resultsView.render(model.getSearchResultsPage(goToPage));
	paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
	model.updateServings(newServings);

	recipeView.render(model.state.recipe);
};

const controlAddBookmark = function () {
	if (!model.state.recipe.bookmarked) {
		model.addBookmark(model.state.recipe);
	} else model.removeBookmark(model.state.recipe.id);

	recipeView.update(model.state.recipe);

	bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
	bookmarksView.render(model.state.bookmarks);
};

const init = function () {
	bookmarksView.addHandlerRender(controlBookmarks);
	recipeView.addHandlerRender(controlRecipes);
	recipeView.addHandlerServings(controlServings);
	recipeView.addHandlerAddBookmark(controlAddBookmark);
	searchView.addHandlerSearch(controlSearchResults);
	paginationView.addHandlerClick(controlPagination);
};

init();
