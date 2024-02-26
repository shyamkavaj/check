import React from 'react'
import {useDispatch} from 'react-redux'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { loginUser } from '../RTK/slice/userSlice';
const Login = () => {

    const [login,setLogin]=React.useState({ })
    const dispatch = useDispatch();
    const handleChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }
    const handleSubmit =(e) =>{
        console.log("val")
        dispatch(loginUser(login))
        e.preventDefault();
        // e.target.reset();
        setLogin({user:null});
    }
    
    // console.log(login)
    return (
        <div>
            <Form onSubmit={handleSubmit} method="post">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} value={login.email} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleChange} value={login.password} placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
                {/* <Button variant="primary" onClick={handleClick}>is Authenticated</Button> */}
            </Form>
        </div>
    )
}

export default Login
