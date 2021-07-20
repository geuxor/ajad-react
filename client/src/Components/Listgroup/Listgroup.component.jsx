import React from 'react';
import './Listgroup.style.css'

function Listgroup(props) {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item px-5">Cras justo odio</li>
        <li className="list-group-item px-5">Dapibus ac facilisis in</li>
        <li className="list-group-item px-5">Morbi leo risus</li>
        <li className="list-group-item px-5">Porta ac consectetur ac</li>
        <li className="list-group-item px-5">Vestibulum at eros</li>
      </ul>
    </div>
  );
}

export default Listgroup;
