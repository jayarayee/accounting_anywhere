import React,{ Component } from 'react'
import Add from 'react-icons/lib/md/add'
import '../css/COA.css'

class COA extends Component{
    render(){
        return(
            <div>
                <h1>Chart of Accounts</h1>

                <div id = "btnAddAccount">
                <a href = "./addAccounts" >
                <Add className ="btnAdd"/><label>Add Account</label>
                </a>
                </div>
                
                <table className="COATable" align="center">
                    <tr className = "COARow">
                        <th className="COATitle">Account Code</th>
                        <th className="COATitle">Account Name</th>
                        <th className="COATitle">Normal Side</th>
                        <th className="COATitle">Account Status</th>
                        <th className="COATitle">Initial Balance</th>
                    </tr>
                    <tr className="COATable">
                        <td className="COAData"> 123</td>
                        <td className="COAData">Cash</td>
                        <td className="COAData">Left</td>
                        <td className="COAData">Active</td>
                        <td className="COAData">0</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default COA