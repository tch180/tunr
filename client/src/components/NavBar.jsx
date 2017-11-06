import React from 'react';
import {Link } from 'react-router-dom'
import styled from 'styled-components';

 const Navstyle = styled.div`
 display: flex;
 justify-content: space-between;
color: black;
align-items: center;


h1  {
    background-color: teal;
    height: 25%;
    box-shadow: 2px -2px 2px 3px black;
    width: 90vw;
}
a {
    text-align: right;
}
`







const NavBar = () => {

    return (
        <Navstyle>
        
        <div>        
            <h1> Tunr'z Radio</h1>
            <h3><Link to='/'>All Artist</Link><br/></h3>
            <h3><Link to='/signup'>Sign-up</Link></h3>
    
        </div>
        </Navstyle>



    );
};



export default NavBar;