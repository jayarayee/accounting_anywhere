import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter} from 'react-router-dom'
import { Route } from 'react-router-dom'
import App from './js/App'
import Heading from './js/Heading'
import Home from './js/Home'
import AddAccount from './js/AddAccount'
import COA from './js/COA'
import Logs from './js/Logs'
import Help from './js/Help'
import ActiveAccount from './js/ActiveAccount'
import Users from './js/Users'
import './css/index.css'
import registerServiceWorker from './js/registerServiceWorker'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path ='/' component = {Heading}/>
            <Route path ='/home' component ={Home}/>
            <Route path ='/addAccounts' component = {AddAccount}/>
            <Route path ='/ChartOfAccounts' component = {COA}/>
            <Route path ='/ActiveAccounts' component = {ActiveAccount}/>
            <Route path ='/Logs' component = {Logs}/>
            <Route path ='/Help' component = {Help}/>
            <Route path ='/Users' component = {Users}/>
        </div>
    </BrowserRouter>,
     document.getElementById('root'));
registerServiceWorker();
