import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../assets/logo 1.png";
import "./Login.scss";
import { BiUserCircle, BiLock } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
function Login() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const handleToggleEye = (e, val) => {
    setVisiblePassword(val);
  };
  const navigate=useNavigate()
  return (
    
    <div className="abcon min-vh-100  d-flex flex-row">
      <Container fluid>
        <Row className="min-vh-100">
          <Col md={6}>
            <div className="leftside ">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="leftcontent">
                <h1>Transform your Employee Lifecycle Management</h1>
                <p>
                  Get all-around productivity and engaged employees—the crucial
                  ingredients for growth.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="rightside">
              <div className="form">
                <div className="head">
                  <h5>User Login</h5>
                  <p>Get all-around productivity and engagement</p>
                </div>
                <form>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <BiUserCircle className="icon" />
                    </div>
                    <input type="text" name="username" placeholder="Email Id" />
                  </div>
                  <div className="input-group mt-4">
                    <div className="input-group-prepend">
                      <BiLock className="icon" />
                    </div>
                    <input
                      type={visiblePassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                    
                    <div className="input-group-append">
                      {visiblePassword ? (
                        <AiOutlineEyeInvisible
                          className="icon eyetoggleclass"
                          onClick={(e) => handleToggleEye(e, false)}
                        />
                      ) : (
                        <AiOutlineEye
                          className="icon eyetoggleclass"
                          onClick={(e) => handleToggleEye(e, true)}
                        />
                      )}
                    </div>
                    </div>
                    <div className="rememberMe my-4">
                      <input type="checkbox" name="rememberMe" />
                      Remember me
                    </div>
                    <Button onClick={() =>{
        navigate("/dsj")
    }} variant="primary"  className="but">
                      Sign In
                    </Button>
                    <div className="forgotPassword mt-2">Forgot Password?</div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
