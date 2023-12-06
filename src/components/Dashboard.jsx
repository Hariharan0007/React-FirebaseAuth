import React, { useState } from 'react';
import { Button, Flex, Form, Input } from 'antd';
import Logo from './images/firebase.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {

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

  const {currentUser, logout} = useAuth();


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
                    <p style={loginHeaderText}>Welcome</p>
                </Flex>
                <Flex justify="center" style={{marginTop:'50px'}}>
                  <p>{currentUser && currentUser.email}</p>
                        <Flex align="center" justify="center" style={{marginTop:'3rem',marginBottom:'30px'}}>
                          
                          <Button type="default">
                            LogOut
                          </Button>

                        </Flex>
                    
                </Flex>
               
            </div>
        </section>
    </div>
  )
}

export default Dashboard