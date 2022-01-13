import React, { useEffect, useState } from 'react';
import Filme from '../../components/Filme'
import './index.css';

const Home = () => {

  const [filmes, setFilmes] = useState([]);
  const [filme, setFilme] = useState({
    nome: '',
    ano: 0,
    categoria: null
  })

  const cadastrar = () => {
    setFilmes([filme, ...filmes])
  }

  return (
    <div className="container">
      <h1 className="lista-text">Cadastre um filme</h1>
      <br />
      <div className="jumbotron">
        <div className="row">
          <div className="col-4">
            <label className="nome-text">Nome:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nome do filme"
              onChange={(e) => {
                setFilme({
                  ...filme,
                  nome: e.target.value
                })
              }}
            />
          </div>
          <div className="col-4">
            <label className="categoria-text">Categoria:</label>
            <select
              onChange={(e) => {
                setFilme({
                  ...filme,
                  categoria: e.target.value
                })
              }}
              className="form-control">
              <option>Aventura</option>
              <option>Ação</option>
              <option>Comédia</option>
              <option>Drama</option>
              <option>Terror</option>
              <option>Histórico</option>
              <option>Ficção</option>
            </select>
          </div>
          <div className="col-4">
            <label className="ano-text">Ano:</label>
            <input
              onChange={(e) => {
                setFilme({
                  ...filme,
                  ano: e.target.value
                })
              }}
              type="number" className="form-control"></input>
          </div>
        </div>
        <br />
        <button
        onClick={cadastrar} 
        className="btn-sucess btn-lg btn-block">Cadastrar</button>
      </div>
      <br />
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nome:</th>
            <th scope="col">Categoria:</th>
            <th scope="col">Ano:</th>
          </tr>
        </thead>
        <tbody>
          {filmes.map(filme => (
            <Filme filme={filme} />
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default Home;