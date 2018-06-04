import React, { Component } from 'react';
import './main.css';


function newTextdesign(){
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
      <table>
        <tr onMouseOver={newTextdesign} onMouseOut={designout} className="info hover">
          <td className="info">Дизайн</td><td><div className="p80" id="designhover"></div></td><td>80%</td>
          <td rowspan="3" className="arrowbox" id="arrowbox"><div className="arrow"></div></td>
          <td rowspan="3" className ="td3">

            <div className="design-html-es6" id="skillstext">
              PhotoShop, 3Ds max
            </div>

          </td>
        </tr>
        <tr onMouseOver={newTexthtml} onMouseOut={htmlout} className="info hover">
          <td className="info">HTML/CSS</td><td><div className="p90" id="htmlhover"></div></td><td>90%</td>
        </tr>
        <tr onMouseOver={newTextjava} onMouseOut={esout} className="info hover">
          <td className="info">ES6</td><td><div className="p65" id="eshover"></div></td><td>65%</td>
        </tr>
      </table>
      <p className="noalign small">* Данная информация субьективна и основана на моем личном представлении.</p>
      </div>
    )
  }
}

export default Skills;
