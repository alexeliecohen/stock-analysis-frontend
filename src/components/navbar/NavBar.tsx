import React from 'react';
import classes from './NavBar.module.scss';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import ProductList from "../ProductList";
import ProductForm from "../ProductForm/ProductForm";
import Home from "../home/Home";

const NavBar = () => {
    return (
        <Router>
            <nav className={classes.navbar}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/view">View products</Link></li>
                <li><Link to={"/add"}> Create Product</Link></li>
            </nav>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path="/dd" element={<ProductList/>}/>
                <Route path="/add" element={<ProductForm/>}/>
            </Routes>
        </Router>
    );
};

export default NavBar;