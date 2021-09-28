import http from "../http-common";

class RecipeDataService {
    getAllRecipes() {
        return http.get("/recipes");
    }

    create(data){
        return http.post("/recipes", data);
    }

    deleteAllRecipes(){
        return http.delete("");
    }
}

export default new RecipeDataService();