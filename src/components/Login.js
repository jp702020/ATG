import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ handleLogin }) => {
  const [loginIdentifier, setLoginIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { loginIdentifier, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .then((err) => console.log(err));

    // Implement client-side validation if needed
    // For example, check if email, username, and password are not empty
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2 className="text-center">Login</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicLoginIdentifier">
              <Form.Label>Email address or Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email or username"
                value={loginIdentifier}
                onChange={(e) => setLoginIdentifier(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button className="btn btn-secondary btn-lg" type="submit" block>
              Login
            </Button>
          </Form>
          <p>Don't have an account?</p>
          <Link to={"/register"}>
            <Button className="btn btn-secondary btn-lg">Signup</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
