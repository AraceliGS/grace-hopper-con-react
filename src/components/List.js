import React from 'react';

class List extends React.Component {
  render() {
    const career = ['World War II', 'UNIVAC', 'COVOL', 'Standars'];
    return(
      <ol>
        {career.map((el, index) => {
          return <li key={index}>{el}</li>
        })}
      </ol>
    )
  }
}

export default List;