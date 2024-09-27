import * as React from 'react';
import { Link } from 'react-router-dom';
function SubmenuAGB() {
    return(
    <div className="dropdown dropdown-right">
        <div tabIndex={0} role="button" className="btn m-1">Submenu</div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><Link to='/Home/Linear'>Carmer Rule</Link></li>
            <li><Link to='/Home/GaussElit'>Gauss Elimination</Link></li>
        </ul>
    </div>
    );
}

export default SubmenuAGB
