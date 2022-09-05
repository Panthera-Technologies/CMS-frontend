import axios from "axios";

const API_URL = "http://localhost:8000/cms-api/";

const register = async (user) => {
    const res = await axios.post(`${API_URL}register`, user);
    if (res.status === 200) {
      localStorage.setItem("user", JSON.stringify(res.data.data));
    }
};

const login = async (data) => {
  const res = await axios.post(`${API_URL}login`, data);
  if(res.status === 200){
    localStorage.setItem("user", JSON.stringify(res.data.data));
  }
};

const userAction = {
    register,
    login
}

export default userAction;
