import React from 'react'
import heroLogo from '../Telerik & Kendo UI - .NET Components Suites & JavaScript UI Libraries_files/hero-02.jpg';
import hoemLogo from '../Telerik & Kendo UI - .NET Components Suites & JavaScript UI Libraries_files/home-mobile-hero.svg';
import { useLocation } from 'react-router-dom'
import Login from './__component/Login';
import ForgetPass from './__component/ForgetPass';
import Registration from './__component/Registration';
import Contact from './__component/Contact';
const SingUp = () => {
  const Location = useLocation();

  return (
    <>
      <div id="ContentPlaceholder1_C418_Col00" className="sf_colsIn PageWrapper tlrk " data-sf-element="EmptyWrapper"
        data-placeholder-label="EmptyWrapper">

        <div className="Section Section--hero u-ha u-pt0 u-pb0 u-oh" data-sf-element="Row">
          <div id="ContentPlaceholder1_C425_Col00" className="sf_colsIn" data-sf-element="Column 1"
            data-placeholder-label="Column 1">

            <link rel="stylesheet"
              href=""
              id="js-tlrk-nav-styles" className="is-loading&#39"
            />


          </div>
          <div id="ContentPlaceholder1_C425_Col01" className="sf_colsIn Section-bg u-m-Section-bg--c u-bg-blue"
            data-sf-element="Column 2" data-placeholder-label="Column 2">

            <img src={heroLogo}
              loading="lazy" title="Hero Banner Home Page" alt="Hero Banner Home Page" className="u-m-dn" /><img
              src={hoemLogo}
              loading="lazy" title="Hero Banner Mobile" alt="Hero Banner Mobile" className="u-dn u-m-db" />
          </div>
          <div id="ContentPlaceholder1_C425_Col02" className="sf_colsIn container u-zi2" data-sf-element="Column 3"
            data-placeholder-label="Column 3">
            <div className="row u-pt1 u-pt15" data-sf-element="Row">
              <div id="ContentPlaceholder1_C339_Col00" className="sf_colsIn col-9" data-sf-element="Column 1"
                data-placeholder-label="Column 1">
                {Location.search === "?Login" ?
                  <h3 className="Text--b9 u-mb2 u-fs70">Login on RYS Code Platform</h3>
                  :

                  <h3 className="Text--b9 u-mb2 u-fs70">Registration on RYS Code Platform</h3>
                }
              </div>
            </div>
            <div className="row u-mb8" data-sf-element="Row">
              <div id="ContentPlaceholder1_C344_Col00" className="sf_colsIn col-7 u-modest-full" data-sf-element="Column 1"
                data-placeholder-label="Column 1">
                {Location.search === "?Login"
                  ?
                  < Login />
                  :
                  Location.search === "?registration" ?
                    <Registration />
                    : 
                      Location.search === "?forgetpassword" ?
                      <ForgetPass />
                      :

                       <Contact />
             }

              </div>

            </div>
          </div>

          <div id="ContentPlaceholder1_C425_Col03" className="sf_colsIn Section-decor u-bg- u-pr u-pb15 u-pt3"
            data-sf-element="Column 4" data-placeholder-label="Column 4">
            <div id="ContentPlaceholder1_C346_Col00" className="sf_colsIn container" data-sf-element="GridContainer"
              data-placeholder-label="GridContainer">



              <div className="row  u-mb6 reveal-content-2 u-m-mb4" data-sf-element="Row">
                <div id="ContentPlaceholder1_C369_Col00" className="sf_colsIn col-4" data-sf-element="Column 1"
                  data-placeholder-label="Column 1">

                  <ul className="BulletCheck BulletCheck--custom u-fs22 u-fw3">
                    <li>On demand technical product training</li>
                  </ul>
                </div>
                <div id="ContentPlaceholder1_C369_Col01" className="sf_colsIn col-4" data-sf-element="Column 2"
                  data-placeholder-label="Column 2">

                  <ul className="BulletCheck BulletCheck--custom u-fs22 u-fw3">
                    <li>Performance, accessibility, localization and security guaranteed</li>
                  </ul>
                </div>
                <div id="ContentPlaceholder1_C369_Col02" className="sf_colsIn col-4" data-sf-element="Column 3"
                  data-placeholder-label="Column 3">

                  <ul className="BulletCheck BulletCheck--custom u-fs22 u-fw3">
                    <li>Continuous innovation to cover your needs today and tomorrow</li>
                  </ul>
                </div>
              </div>
              <div className="row  u-mb6 reveal-content-2 u-m-mb4" data-sf-element="Row">
                <div id="ContentPlaceholder1_C369_Col00" className="sf_colsIn col-4" data-sf-element="Column 1"
                  data-placeholder-label="Column 1">

                  <ul className="BulletCheck BulletCheck--custom u-fs22 u-fw3">
                    <li>On demand technical product training</li>
                  </ul>
                </div>
                <div id="ContentPlaceholder1_C369_Col01" className="sf_colsIn col-4" data-sf-element="Column 2"
                  data-placeholder-label="Column 2">

                  <ul className="BulletCheck BulletCheck--custom u-fs22 u-fw3">
                    <li>Performance, accessibility, localization and security guaranteed</li>
                  </ul>
                </div>
                <div id="ContentPlaceholder1_C369_Col02" className="sf_colsIn col-4" data-sf-element="Column 3"
                  data-placeholder-label="Column 3">

                  <ul className="BulletCheck BulletCheck--custom u-fs22 u-fw3">
                    <li>Continuous innovation to cover your needs today and tomorrow</li>
                  </ul>
                </div>
              </div>


            </div>


            <div class="Section-decorElement Section-decorElement--3 animation-container reveal-fragment-2"
              data-animation-length="12" data-animation-top-offset="-100" data-animation-scale="false"
            ></div>


          </div>
        </div>

      </div>
    </>
  )
}

export default SingUp
