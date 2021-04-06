import React from 'react';

class DescriçãoDoCargo extends React.Component {
  render() {
    return (
      <div id="div-box">
        <label htmlFor="job-description">Descrição do Cargo</label>
        <textarea name="job-description" id="job-description" rows="5" placeholder="Limite de 500 caracteres" maxlength="500"></textarea>
      </div>
    )
  }
}

export default DescriçãoDoCargo