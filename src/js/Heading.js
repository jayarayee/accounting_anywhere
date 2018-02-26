import React, { Component } from 'react';
import '../css/Heading.css';
import Logo from '../imgs/AALogo.PNG';

class Heading extends Component{
render(){
    return(
<div id = "head-container">
    <div className ="welcome">
        <label className="lblNameOff">Welcome, first name and last name!</label>&emsp;
        <label className="lblNameOff">LogOff</label>
    </div>
    
     <img id ="title" src= {Logo} alt="Accounting Anywhere"/>
   
        <table id ="nav-buttons">
            <tr>
                <td id ="home"><a href="./home">Home</a></td>
                <td id = "COA"><a href="./ChartOfAccounts">Chart of Accounts</a></td>
                <td id ="actAccount"><a href="./ActiveAccounts">Active Accounts</a></td>
                <td id ="Logs"><a href="./Logs">Logs</a></td>
                <td id = "users"><a href="./Users">Users</a></td>
                <td id ="help"><a href="./help">Help</a></td>
            </tr>
        </table>
    
</div>
    );
}
}

export default Heading;