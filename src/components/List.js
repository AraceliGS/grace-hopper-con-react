import React from 'react';

class List extends React.Component {
  render() {
    const career = ['World War II', 'UNIVAC', 'COVOL', 'Standars'];
    return(
      <ol>
        <li>World War II</li>
        <li>UNIVAC</li>
        <li>COVOL</li>
        <li>Standars</li>
      </ol>
    )
  }
}

export default List;