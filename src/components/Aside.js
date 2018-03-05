import React from 'react';
import GraceHopper from './assets/images/Grace Hopper.jpg' 
import './Aside.css';

class Aside extends React.Component {
  render() {
    return(
      <aside className='summary'>
        <table className='summary-table'>
          <thead>
            <tr>
              <th colSpan={2}>Grace Murray Hopper</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>
                <img src={GraceHopper} alt='Grace Hopper'/>
                <p>Rear Admiral Grace M. Hopper, 1984</p>
                <hr/>
              </td>
            </tr>
            <tr>
              <th>Nickname</th>
              <td>"Amazing Grace"</td>
            </tr>
            <tr>
              <th>Born</th>
              <td>December 9, 1906</td>
            </tr>
            <tr>
              <th>Died</th>
              <td>January 1, 1992 (aged 85)</td>
              </tr>
            <tr>
              <th>Allegiance</th>
              <td><img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png' alt='EE.UU'/>United States of America</td>
            </tr>
          </tbody>
        </table>
      </aside>
    )
  }
}

export default Aside;