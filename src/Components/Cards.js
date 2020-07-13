import React from 'react';
import '../App.css';
class Cards extends React.Component {
  render() { 
    return ( 
        <div className="card-design">
          <form method="post" action="#" id="#">
            <div className="file-design">
              <input type="file" className="form-control"/>
            </div>
          </form>
        </div>
     );
  }
}
 
export default Cards;
