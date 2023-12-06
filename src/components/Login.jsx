import React, { useState } from 'react';
import { Button, Flex, Form, Input } from 'antd';
import Logo from './images/firebase.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

const Login = () => {

  const sectionStyle = {
    'width' : '100%',
    'height': '100%',
    'display' : 'flex',
    'justify-content': 'center',
    'margin-top' : '5%'
  }

  const flexHeader = {
    'justify-content':'center',
    'flex-direction':'column',
    'align-items':'center',
    'margin-top':'30px'
  }

  const loginHeaderText = {
    'font-weight':'500',
    'font-size':'30px',
    'line-height':'36px'
  }

  const [loading,setLoading] = useState(false);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const { login } = useAuth();
  const nav = useNavigate();

  const onLogin = (e) =>{
    e.preventDefault();

    
    try{
        const tryLogin = async() => {
          setLoading(true)
          console.log(email,password);
          await login(email,password);
          nav("/")
        }
        tryLogin();
    } catch{
        console.log("Failed to create an Account");
    }
    
    setLoading(false);
  }


  console.log(email,password);

  return (
    <div>
        <section style={sectionStyle}>
            <div style={{width:'20%',
                        minWidth:'fit-content',
                        paddingLeft:'1rem',
                        paddingRight:'1rem',
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:'center',
                        alignItems:"center",
                        border:"1px solid",
                        borderRadius:"10px",
                        }}>
                <Flex style={flexHeader}>
                    <img style={{width:'120px'}} src={Logo} alt="" />
                    <p style={loginHeaderText}>Login</p>
                </Flex>
                <Flex justify="center" style={{marginTop:'50px'}}>
                    <Form
                      name="login"
                      labelCol={{
                        span:8,
                      }}
                      wrapperCol={{
                        span:24,
                      }}
                      initialValues={{
                        remember : true,
                      }}
                      autoComplete="off"
                      >
                        <Form.Item
                          label="Mail Id"
                          name="mailid"
                          labelAlign="left"
                          rules={[
                            {
                              required:true,
                              message:"Please enter your E-mail id",
                            },
                          ]}
                          >
                            <Input type="mail"
                                    placeholder="example@mail.com"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    />
                        </Form.Item>

                        <Form.Item
                          label="Password"
                          name="password"
                          labelAlign="left"
                          rules={[
                            {
                              required:true,
                              message:"Please enter you password",
                            },
                          ]}
                          style={{
                            marginTop:'2rem',
                          }}
                          >
                            <Input type="password" 
                                    placeholder="**********"
                                    onChange={(e)=>setPassword(e.target.value)}
                                    />
                        </Form.Item>
                        <Flex align="center" justify="center" style={{marginTop:'3rem',marginBottom:'30px'}}>

                          <Button type="default" onClick={onLogin}>
                            Login
                          </Button>

                        </Flex>
                    </Form>
                </Flex>
                <p style={{
                  marginTop:'1rem',
                  marginBottom:'1rem',
                  fontStyle:"italic"
                }}>Need an Account ? <Link to="/SignUp">Sign Up</Link></p>
            </div>
        </section>
    </div>
  )
}

export default Login