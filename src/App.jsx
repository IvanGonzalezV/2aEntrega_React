import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios"; // Importa axios para hacer solicitudes HTTP

import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./Pages/HomePage/Home";
import CategoriesPage from "./Pages/CategoriesPage/Categories";
import ContactPage from "./Pages/ContactPage/Contact";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [], // Inicializa el estado con un array vacío
    };
  }

  componentDidMount() {
    // Obtén datos de la API y actualiza el estado
    axios.get("https://fakestoreapi.com/products").then((response) => {
      const products = response.data;
      this.setState({ products });
    });
  }

  render() {
    // Divide el array de productos en subconjuntos de 4 elementos
    const rows = this.state.products.reduce((rows, product, index) => {
      return (index % 4 === 0 ? rows.push([product]) : rows[rows.length - 1].push(product)) && rows;
    }, []);

    return (
      <Router>
        <div className="App">
          <Header title="" subtitle="" />
          <NavBar />

          {/* Mapea cada fila de productos */}
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="UserSection">
              {/* Mapea cada producto en la fila */}
              {row.map((product) => (
                <UserCard
                  key={product.id}
                  img={product.image}
                  name={product.title}
                  offer={`$${product.price}`}
                  date={product.category}
                />
              ))}
            </div>
          ))}

          <Routes className="App">
            <Route path="/" element={<HomePage />} />
            <Route path="/Categories" element={<CategoriesPage />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
