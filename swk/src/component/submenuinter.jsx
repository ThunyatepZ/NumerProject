import * as React from 'react';
import { Link } from 'react-router-dom';
function Submenuinter() {
    return(
    <div className="dropdown dropdown-right">
        <div tabIndex={0} role="button" className="btn m-1">Another solution</div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><Link to='/Home/Carmer'>Carmer Rule</Link></li>
            <li><Link to='/Home/GaussElit'>Gauss Elimination</Link></li>
            <li><Link to='/Home/GaussJordan'>Gauss Jordan Elimination</Link></li>
            <li><Link to='/Home/MatrixINV'>Matrix invertion</Link></li>
            <li><Link to='/Home/LU_decomposit'>LU decomposition methods</Link></li>
            <li><Link to='/Home/Jacobi'>Jacobi iteration method</Link></li>
            <li><Link to='/Home/GaussSeidel'>GaussSeidel</Link></li>
            <li><Link to='/Home/conjugate'>Conjugate Gradient Method</Link></li>
        </ul>
    </div>
    );
}

export default Submenuinter
