import React from 'react';

class ResumoDoCurrículo extends React.Component {
  render() {
    return (
      <div id="div-box">
        <label htmlFor="last-job">Resumo do currículo</label>
        <textarea name="last-job" id="last-job" rows="5" required maxlength="1000" placeholder="Limite de 1000 caracteres"></textarea>
      </div>
    )
  }
}

export default ResumoDoCurrículo