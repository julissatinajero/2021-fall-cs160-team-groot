import http from "../http-common";

class UserDataService {

    // @POST
    postSignup(data){
        return http.post("/auth/signup", data);
    }

    // @GET
    getUser(id){
        return http.get(`/users/${id}`);
    }

    getPreferences(id){
        return http.get(`/users/preferences/${id}`);
    }

    getFavorites(id){
        return http.get(`/users/favorites/${id}`);
    }

    getUploads(id){
        return http.get(`/users/uploads/${id}`);
    }

    /**
    put(id, data){
        return http.put(`/users/${id}`, data);
    }

    delete(id){
        return http.delete(`/users/${id}`);
    }*/
}
export default new UserDataService();