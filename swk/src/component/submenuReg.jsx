import * as React from 'react';
import { Link } from 'react-router-dom';
function SubmenuREG() {
    return(
    <div className="dropdown dropdown-right">
        <div tabIndex={0} role="button" className="btn m-1">Another solution</div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><Link to='/Home/reg'>Simple Regression</Link></li>
            <li><Link to='/Home/regMulti'>Multiple Regression</Link></li>
        </ul>
    </div>
    );
}

export default SubmenuREG
