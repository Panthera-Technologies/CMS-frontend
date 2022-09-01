import axios from "axios";

// A mock function to mimic making an async request for data
export async function loginUser(email, password) {
    await axios.post('http://localhost:8000/cms-api/login', {email, password})
    .then((res) => {
        return 
    })
}
  