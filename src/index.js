import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Navbar from './partials/navbar'

/*const mysql = require('mysql');
const db = mysql.createPool({
host: "localhost",
user: "root",
password: "Discord0)",
database:"sakila" 
})*/

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(<Navbar/>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
