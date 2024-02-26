import http from "../http-common";

const signupUser = async (user) =>{
    try{
        const res =await http.post('/signup',user);
        console.log("res in signup service ",res);
        return res.data;
    }catch(error){
        console.log("erroror in signup service ",error);
        throw error;   
    }
}

const loginUser = async (user) =>{
    try{
        const res =await http.post('/login',user);
        console.log("res in login service ",res.data);
        return res.data;

    }catch(error){
        console.log("erroror in login service ",error);
        throw error;
    }
}

const varifyUser = async () => {
    try{

        const token = localStorage.getItem('token');

        // Make sure token exists
        if (!token) {
            return res.status(401).json({
                message: "Token not found"
            });
        }

        // Set token in request header
        const config = {
            headers: {
                'Authorization': token
            }
        };
        const res = await http.get('/dashboard', config);
        console.log("res in verify service ",res.data);
        return res.data;
    }catch(error){
        console.log("erroror in verify service ",error);
        throw error;
    }
}


const editUser = async () =>{
    try{

        const token = localStorage.getItem('token');

        // Make sure token exists
        if (!token) {
            return res.status(401).json({
                message: "Token not found"
            });
        }

        // Set token in request header
        const config = {
            headers: {
                'Authorization': token
            }
        };
        console.log("edit token console ",config)

        console.log("in edit user")
        const res = await http.patch('/edit',{},config);   
        console.log("edit res is ",res.data)
        return res.data;
    }catch(error){
        console.log("erroror in edit service ",error);
        throw error;
    }
}

export default{
    signupUser,loginUser,varifyUser,editUser
}