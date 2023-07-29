import React from 'react'

import HTML from '../../Telerik & Kendo UI - .NET Components Suites & JavaScript UI Libraries_files/HTML2.png';
import CSS from '../../Telerik & Kendo UI - .NET Components Suites & JavaScript UI Libraries_files/CSS2.png';
import BOOTSTRAP from '../../Telerik & Kendo UI - .NET Components Suites & JavaScript UI Libraries_files/BOOTSTRAP2.png';
import JAVASCRIPT from '../../Telerik & Kendo UI - .NET Components Suites & JavaScript UI Libraries_files/JAVASCRIPT2.png';
import PHP from '../../Telerik & Kendo UI - .NET Components Suites & JavaScript UI Libraries_files/PHP2.png';
import PYTHON from '../../Telerik & Kendo UI - .NET Components Suites & JavaScript UI Libraries_files/PYTHON2.png';
import { Link } from 'react-router-dom';

const LanguageCard = () => {
    return (
        <>
            <div id="ContentPlaceholder1_C352_Col00" className="sf_colsIn col-2" data-sf-element="Column 1"
                data-placeholder-label="Column 1">
                <Link to= "content?lag=html">  <button type="button" aria-label="expand Web Components" className="Box u-p0 u-pr0 u-oh">
                    <div className="Box-aside u-pr u-oh">
                        <div className="u-mb1">
                            <img src={HTML} width="32" height="32" alt="" />
                        </div>
                        <h3 className="Text--b9 u-fs26 u-mb0 u-pr u-zi1 h5">HTML <br /> WEBSITE</h3>
                    </div>
                </button></Link>
            </div>
 
            <div id="ContentPlaceholder1_C352_Col00" className="sf_colsIn col-2" data-sf-element="Column 1"
                data-placeholder-label="Column 1">
                 <Link to= "/content?lag=css"> <button type="button" aria-label="expand Web Components" className="Box u-p0 u-pr0 u-oh">
                    <div className="Box-aside u-pr u-oh">
                        <div className="u-mb1">
                            <img src={CSS} width="32" height="32" alt="" />
                        </div>
                        <h3 className="Text--b9 u-fs26 u-mb0 u-pr u-zi1 h5">CSS <br /> WEBSITE</h3>
                    </div>
                </button></Link>
            </div>
            <div id="ContentPlaceholder1_C352_Col00" className="sf_colsIn col-2" data-sf-element="Column 1"
                data-placeholder-label="Column 1">
                 <Link to= "/content?lag=javascript"> <button type="button" aria-label="expand Web Components" className="Box u-p0 u-pr0 u-oh">
                    <div className="Box-aside u-pr u-oh">
                        <div className="u-mb1">
                            <img src={JAVASCRIPT} width="37" height="37" alt="" />
                        </div>
                        <h3 className="Text--b9 u-fs26 u-mb0 u-pr u-zi1 h5">JAVASCRIPT <br /> WEBSITE</h3>
                    </div>
                </button></Link>
            </div>
            <div id="ContentPlaceholder1_C352_Col00" className="sf_colsIn col-2" data-sf-element="Column 1"
                data-placeholder-label="Column 1">
                 <Link to= "/content?lag=php"> <button type="button" aria-label="expand Web Components" className="Box u-p0 u-pr0 u-oh">
                    <div className="Box-aside u-pr u-oh">
                        <div className="u-mb1">
                            <img src={PHP} width="58" height="58" alt="" />
                        </div>
                        <h3 className="Text--b9 u-fs26 u-mb0 u-pr u-zi1 h5">PHP <br /> WEBSITE</h3>
                    </div>
                </button></Link>
            </div>
            <div id="ContentPlaceholder1_C352_Col00" className="sf_colsIn col-2" data-sf-element="Column 1"
                data-placeholder-label="Column 1">
                 <Link to= "/content?lag=bootstrap"> <button type="button" aria-label="expand Web Components" className="Box u-p0 u-pr0 u-oh">
                    <div className="Box-aside u-pr u-oh">
                        <div className="u-mb1">
                            <img src={BOOTSTRAP} width="45" height="45" alt="" />
                        </div>
                        <h3 className="Text--b9 u-fs26 u-mb0 u-pr u-zi1 h5">BOOTSTRAP<br /> WEBSITE</h3>
                    </div>
                </button></Link>
            </div>
            <div id="ContentPlaceholder1_C352_Col00" className="sf_colsIn col-2" data-sf-element="Column 1"
                data-placeholder-label="Column 1">
               <Link to= "/content?lag=python"> <button type="button"  aria-label="expand Web Components" className="Box u-p0 u-pr0 u-oh">
                    <div className="Box-aside u-pr u-oh">
                        <div className="u-mb1">
                            <img src={PYTHON} width="35" height="35" alt="" />
                        </div>
                        <h3 className="Text--b9 u-fs26 u-mb0 u-pr u-zi1 h5">PYTHON <br /> WEBSITE...</h3>
                    </div>
                </button> </Link>
            </div>
        </>

    )
}

export default LanguageCard
