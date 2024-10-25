import * as React from 'react';
import { Link } from 'react-router-dom';
function submenuintrigration() {
    return(
    <div className="dropdown dropdown-right">
        <div tabIndex={0} role="button" className="btn m-1">Another solution</div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><Link to='/Home/STP'>Single Trapezoidal</Link></li>
            <li><Link to='/Home/CTP'>Composit Trapezoidal</Link></li>
            <li><Link to='/Home/Simpson'>Single Trapezoidal</Link></li>
            <li><Link to='/Home/CSimpson'>Composit Trapezoidal</Link></li>
        </ul>
    </div>
    );
}
export default submenuintrigration
