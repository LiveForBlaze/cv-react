import React, { Component } from 'react';
import './main.css';
import { Link } from 'react-router-dom';

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
      <p className="margin">

        <table className="profiletext margin">
          <tr>
            <td className="bolded minwidth">2012 - 2015</td><td>Международный центр переподготовки
            кадров, технологий обучения и развития бизнеса КНИТУ-КАИ. <br/> Специальность: Переводчик в профессиональной сфере. <br/><br/></td>
          </tr>
          <tr>
            <td className="bolded">2003 - 2009</td><td>КГТУ им. А.Н. Туполева (КАИ). Факультет &Prime;ИРЭТ&Prime; (Институт Радиоэлектроники и Телекоммуникаций).
            Специальность: Техническая эксплуатация транспортного радиоэлектронного оборудования. Инженер.</td>
          </tr>

        </table>
        <table className="profiletext margin">
          <tr>
            <td className="bolded minwidth">Курсы</td>
            <td>Прошел ряд онлайн курсов: htmlacademy, codecademy, egghead, javascript, itvdn, codewars <br/><br/></td>
          </tr>

        </table>
      </p>
      <br/>
      </div>
    )
  }
}

export default Education;
