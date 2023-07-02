import axios from "axios";

const BASE_URL = "http://54.151.227.164:8080/employees"

class EmployeeService {

    getAll() {
        return axios.get(BASE_URL);
    }

    getOne(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    saveOne(oneData) {
        return axios.post(BASE_URL, oneData);
    }

    updateOne(id, oneData) {
        return axios.put(`${BASE_URL}/${id}`, oneData);
    }

    deleteOne(id) {
        return axios.delete(BASE_URL + "/" + id)
    }

}

export default new EmployeeService();