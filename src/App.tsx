import React from 'react';
import Product from "./components/Product";
import ProductForm from "./components/ProductForm/ProductForm";
import NavBar from "./components/navbar/NavBar";
import ProductList from "./components/ProductList";

function App() {
    return (
        <div className="App">
            {/*<NavBar/>*/}
            <ProductList/>
            {/*<Product {...{name: "plate", quantity: 100, price: 150.5}}/>*/}
            {/*<ProductForm/>*/}
        </div>
    );
}

export default App;
