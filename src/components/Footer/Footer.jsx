import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='container'>
                <div className='column'>
                    <h2>Contactanos en Redes Sociales</h2>
                    <p>Twiter</p>
                    <p>Whatsapp</p>
                    <p>Facebook</p>
                </div>
                <div className='column'>
                    <h2>Correo Electronico</h2>
                    <p><a href="#">maxshop@online.com</a></p>
                </div>
                <div className='column'>
                    <h2>Mapa del Sitio</h2>
                    <p>Home</p>
                    <p>Categories</p>
                    <p>Contact</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer 