import http from "../http-common";

class UserDataService {
    post(data){
        return http.post("/users", data);
    }

    get(id){
        return http.get(`/users/${id}`);
    }

    // Below are untested, use at your own risk
    put(id, data){
        return http.put(`/users/${id}`, data);
    }

    delete(id){
        return http.delete(`/users/${id}`);
    }
}
export default new UserDataService();