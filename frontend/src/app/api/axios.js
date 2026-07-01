import axios from "axios";

//created centralized axios instance
//set the baseURL to ease up writing it everywhere
const api=axios.create({
    baseURL:"https://linkvault-beta-virid.vercel.app/api"
});

//automatically adds token before every request
api.interceptors.request.use((config)=>{
    const token=localStorage.getItem("token");
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    return config;
})
export default api;