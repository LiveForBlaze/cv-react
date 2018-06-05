import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../main.css';
import '../css/education.css';

class Education extends Component {
  render() {
    return (
      <div>

      <nav>
        <ul className="navbar">
          <li className="navbar buttonwidth1">
          <Link to={'/'} id="idabout">Обо мне</Link>
          </li>
          <li className="navbar buttonwidth2">
          <Link to={'/education'} className='selected' >Образование</Link>
          </li>
          <li className="navbar buttonwidth3">
            <Link to={'/experience'}>Опыт работ</Link>
          </li>
        </ul>
      </nav>
      <div className="hr-arrow-top"></div>

      <div className="margin">
        <div className="profiletext margin">
          <div className="padding-bottom">
            <div className="table-cell bolded minwidth">2012 - 2015</div>
            <div className="table-cell">Международный центр переподготовки
            кадров, технологий обучения и развития бизнеса КНИТУ-КАИ. <br/> Специальность: Переводчик в профессиональной сфере.</div>
          </div>
          <div className="padding-bottom">
            <div className="table-cell bolded minwidth">2003 - 2009</div>
            <div className="table-cell">КГТУ им. А.Н. Туполева (КАИ). Факультет &Prime;ИРЭТ&Prime; (Институт Радиоэлектроники и Телекоммуникаций).
            Специальность: Техническая эксплуатация транспортного радиоэлектронного оборудования. Инженер.</div>
          </div>
          <div>
            <div className="table-cell bolded minwidth">Курсы</div>
            <div className="table-cell">Прошел ряд онлайн курсов: htmlacademy, codecademy, egghead, javascript, itvdn, codewars</div>
          </div>
        </div>

      </div>      
      <br/>
      </div>
    )
  }
}

export default Education;
