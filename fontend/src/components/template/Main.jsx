import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
    <React.Fragment>
        <Header />
        <main className="content container-fluid">
            Conteudo
        </main>
    </React.Fragment>