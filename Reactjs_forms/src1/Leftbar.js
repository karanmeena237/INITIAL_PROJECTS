import React from "react";
import image from './Appereance.png'
function LeftBar() {
    return (
      <div className="Sidenavbar" id="sidebar" style={{"position":"fixed","display":"inline-block","backgroundColor":"#1f1d2b","width":"70px","textAlign":"center","height":"100%","top":"0"}}>
      <nav>
        <ul className="list-unstyled components">
          <li className="active text-white">
            {/* <img src={image} alt="" /> */}
          </li>
          <li>
          {/* <img src={image} alt="" /> */}
          </li>
        </ul>
      </nav>
    </div>
     );
}

export default LeftBar;