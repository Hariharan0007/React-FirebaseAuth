import React from 'react';
import {Flex,Image} from 'antd';
import Logo from './images/firebase.png';

const AuthHeader = () => {


  return (
    <div>
        <header className="mt-5">
            <Flex justify="center" align="center"
                  style={{
                    borderBottomWidth:'1px',
                    borderBottomColor:'black',
                    height:'5rem',
                  }}>
                <img className="w-14" src={Logo} alt="" />
                <p className="text-4xl font-bold">Firebase Authetication</p>
            </Flex>
        </header>
    </div>
  )
}

export default AuthHeader