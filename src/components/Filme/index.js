import React from 'react';

const Filme = ({ filme }) => {

  return (
    <tr>
      <td>{filme.nome}</td>
      <td>{filme.categoria}</td>
      <td>{filme.ano}</td>
      <td className="text-right">
        
      </td>
    </tr>
  )
}

export default Filme;