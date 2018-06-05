import React, { Component } from 'react';
import '../main.css';
import '../css/skills.css';


function newTexdivesign(){
    var x=document.getElementById('skillstext');
    x.innerHTML="PhotoShop, 3Ds max";
    document.getElementById('arrowbox').style.verticalAlign = "top";
    document.getElementById('designhover').style.backgroundColor = "#327197";
}

function designout(){
  document.getElementById('designhover').style.backgroundColor = "#3c434a";
}

function htmlout(){
  document.getElementById('htmlhover').style.backgroundColor = "#3c434a";
}

function esout(){
  document.getElementById('eshover').style.backgroundColor = "#3c434a";
}

function newTexthtml(){
    var x=document.getElementById('skillstext');
    x.innerHTML="Адаптивная верстка, flex, препроцессор LESS, SVG";
    document.getElementById('arrowbox').style.verticalAlign = "middle";
      document.getElementById('htmlhover').style.backgroundColor = "#327197";
}
function newTextjava(){
    var x=document.getElementById('skillstext');
    x.innerHTML="Node.js, React, Redux";
    document.getElementById('arrowbox').style.verticalAlign = "bottom";
    document.getElementById('eshover').style.backgroundColor = "#327197";
}

class Skills extends Component {
  render() {
    return (
      <div>

        <div className="table-container info">
          <div className="table-cell">

            <div className="hover" onMouseOver={newTexdivesign} onMouseOut={designout}>
              <div className="table-cell first">Дизайн</div>
              <div className="table-cell">
                <div className="p80" id="designhover"></div>
              </div>
              <div className="table-cell">80%</div>

            </div>

            <div className="hover" onMouseOver={newTexthtml} onMouseOut={htmlout}>
              <div className="table-cell first">HTML/CSS</div>
              <div className="table-cell">
                <div className="p90" id="htmlhover"></div>
              </div>
              <div className="table-cell">90%</div>

            </div>

            <div className="hover" onMouseOver={newTextjava} onMouseOut={esout}>
              <div className="table-cell first">JavaScript</div>
              <div className="table-cell">
                <div className="p65" id="eshover"></div>
              </div>
              <div className="table-cell">65%</div>

            </div>

          </div>

            <div className="table-cell arrowbox" id="arrowbox"><div className="arrow"></div></div>
            <div className="table-cell design-html-es6" id="skillstext">PhotoShop, 3D max</div>
        </div>

        <p className="noalign small">* Данная информация субьективна и основана на моем личном представлении.</p>
      </div>
    )
  }
}

export default Skills;
