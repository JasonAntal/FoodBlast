import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Navbar from './partials/navbar'
import reportWebVitals from './reportWebVitals';

const mysql = require('mysql');
const db = mysql.createPool({
host: "localhost",
user: "root",
password: "Discord0)",
database:"sakila" 
})

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(<Navbar/>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();