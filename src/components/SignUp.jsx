import React, { useState } from 'react';
import { Button, Flex, Form, Input } from 'antd';
import Logo from './images/firebase.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const SignUp = () => {

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

  const SignUpHeaderText = {
    'font-weight':'500',
    'font-size':'30px',
    'line-height':'36px'
  }

  const { signup } = useAuth();

  const [loading,setLoading] = useState(false);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const nav = useNavigate();

  const onSignUp = (e) =>{
    e.preventDefault();
    if(password!==confirmPassword){
      console.log("Password not match !!!");
      return ;
    }

    
    try{
        const trySignUp = async() => {
          setLoading(true)
          console.log(email,password);
          await signup(email,password);
          nav("/");
        }
        trySignUp();
    } catch{
        console.log("Failed to create an Account");
    }
    
    setLoading(false);
  }

  

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
                    <p style={SignUpHeaderText}>Sign Up</p>
                </Flex>
                <Flex justify="center" style={{marginTop:'50px'}}>
                    <Form
                      name="SignUp"
                      labelCol={{
                        span:10,
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

                        <Form.Item
                          label="Confirm Password"
                          name="confirm-password"
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
                                    onChange={(e)=>setConfirmPassword(e.target.value)}
                                    />
                        </Form.Item>


                        <Flex align="center" justify="center" style={{marginTop:'3rem',marginBottom:'30px'}}>

                          <Button type="default" onClick={onSignUp} disabled={loading}>
                            Sign Up
                          </Button>

                        </Flex>
                    </Form>
                </Flex>
                <p style={{
                    marginTop:'1rem',
                    marginBottom:'1rem',
                    fontStyle:"italic"
                }}>Already have an Account ? <Link to="/Login">Login</Link></p>
            </div>
        </section>
        
    </div>
  )
}

export default SignUp