import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { signupUser } from '../RTK/slice/userSlice';


const SignUp = () => {
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setUser( {...user, [e.target.name]: e.target.value} );
    }
    const handleSubmit = (e) => {
        dispatch(signupUser(user))
        e.preventDefault();
        setUser("");
        console.log(user)
    }
    // useEffect(()=>{
    //     console.log("user")
    //     setUser()
    // },[handleSubmit])
    // console.log("user is ",user);
    return (
        <div >
            <Form className="col-6" onSubmit={handleSubmit}>
                {/* <Row className="mb-3"> */}
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="first name" name="firstName" value={user.firstName} onChange={handleChange} required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="last name" name="lastName" value={user.lastName} onChange={handleChange} required />
                </Form.Group>
                {/* </Row> */}

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="email" name="email" value={user.email} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Phone No</Form.Label>
                        <Form.Control type="number" placeholder="phone" name="phone" value={user.phone} onChange={handleChange} required />
                    </Form.Group>
                </Row>

                {/* <Row className="mb-3"> */}
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' value={user.password} onChange={handleChange} required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" required />
                </Form.Group>
                {/* </Row> */}

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SignUp
