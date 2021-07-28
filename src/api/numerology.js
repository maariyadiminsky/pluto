import axios from "axios";

// mock api I created see ref: https://github.com/maariyadiminsky/numerology-mock-api 
export default axios.create({
    baseURL: "https://numerology-mock-api.herokuapp.com",
});