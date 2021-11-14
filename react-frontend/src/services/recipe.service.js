import http from "../http-common";

class RecipeService {
    // @GET 
    getAllRecipes() {
        return http.get(`/recipe`);
    }

    getRecipe(id) {
        return http.get(`/recipe/${id}`)
    }

    getRecipeByName() {
        return http.get(`/recipe/names`)
    }

    getRecipeByRestriction() {
        return http.get(`/recipe/restrictions`)
    }

    getRecipeByDiet() {
        return http.get(`/recipe/menu`)
    }

    getRecipeByIngredients() {
        return http.get(`/recipe/ingredients`)
    }
}
export default new RecipeService();