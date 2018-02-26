import React,{ Component } from 'react'
import "../css/AddAccount.css"


class AddAccount extends Component{
    render(){
        return(
            <div id = "container">
                <h1>Add An Account</h1>
                <form>
                    <table className="AAccount"align="center">
                        <tr>
                        <td className="AAcount"><label>Account Name: </label></td>
                        <td className="AAcount"><input type="text"></input></td>
                        </tr>
                        <tr>
                        <td className="AAcount"><label>Account Number: </label></td>
                        <td className="AAcount"><input type="number"></input></td>
                        </tr>
                        <tr>
                        <td className="AAcount"><label>Type</label></td>
                        <td className="AAcount"><select name="Type" value="Choose"> 
                                                    <option value="Assets">Assets</option>
                                                    <option value="Liabiliies">Liabiliies</option>
                                                    <option value="Owner's Equity">Owner's Equity</option>
                                                    <option value="Revenue">Revenue</option>
                                                    <option value="Expense">Expense</option>
                                                </select></td>
                        
                        </tr>
                        <tr>
                        <td className="AAcount"><label>Subcategory: </label></td>
                        <td className="AAcount"><input type="text"></input></td>
                        </tr>
                        <tr>
                        <td className="AAcount"><label>Normal Side: </label></td>
                        <td className="AAcount"><select name="Normal Side">
                                                    <option value="Left">Left</option>
                                                    <option value="Right">Right</option> 
                                                </select></td>
                        </tr>
                        <tr>
                        <td className="AAcount"><label>Initial Balance: </label></td>
                        <td className="AAcount"><input type="number"></input></td>
                        </tr>
                    </table>
                    <div id="formbtns">
                    <button>Cancel</button>&nbsp;&nbsp;
                    <button>Save</button>
                    </div>
                </form>      
            </div>
        );
    }
}
export default AddAccount