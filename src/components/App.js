import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../main.css';

import Skills from './skills';
import About from './about';
import Education from './education';
import Experience from './experience';
import Info from './info';
import Infosmall from './infosmall';


var a = 0;

function slide(){
    var x=document.getElementById('topmobile');
    if (a === 0) {
    x.style.display = "block";
    a = 1;
  } else {
    x.style.display = "none";
    a = 0;
  }

}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="topmobilemenu">
          <div className="mainleftbutton" onClick={slide}><i className="fa fa-user-o" aria-hidden="true"></i></div>
</div>
<div className="topmobile" id="topmobile">
  <Infosmall/>
</div>
      <div className="shadow-box shadow-effect">
        <div className="mainleft" id="mainleft">
          <div className="photoface"></div>
            <Info/>
          </div>
        <div className="mainright">
          <h1>Мухамедов Рустам Альфэридович</h1>
          <h3>Front-end разработчик</h3>

          <div className="profiletext">
            Информационные технологии, интернет, мобильные технологии.
            <ul>
              <li>Создание HTML-страницы сайта на основе дизайн-макетов</li>
              <li>Верстка сайта и шаблонов для CMS</li>
              <li>Привязка к пользовательскому интерфейсу скриптов</li>
              <li>Обеспечение необходимого уровня UI и UX</li>
              <li>Разработка дизайна</li>
            </ul>
          </div>
          <div className="profiletext">
            <b>Занятость:</b> полная занятость, частичная занятость, проектная работа
          </div>
          <div className="profiletext">
            <b>График работы:</b> полный день, гибкий график, удаленная работа
          </div>
          <div className="profiletext">
            <b>Желательное время в дороге до работы:</b> не более часа
          </div>
          <br/>
          <div className="hr"></div>
          <div className="profiletext">
            <Skills />
          </div>

                <Route exact path="/" component={About}/>
                <Route exact path="/education" component={Education}/>
                <Route exact path="/experience" component={Experience}/>
            <div className="hr-arrow-bottom"></div>


        </div>
      </div>
</div>
</Router>
    );
  }
}

export default App;
