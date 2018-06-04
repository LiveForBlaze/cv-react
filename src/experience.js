import React, { Component } from 'react';
import './main.css';
import { Link } from 'react-router-dom';

class Experience extends Component {
  render() {
    return (
      <div>
      <nav>
        <ul className="navbar">
          <li className="navbar buttonwidth1">
          <Link to={'/'} id="idabout">Обо мне</Link>
          </li>
          <li className="navbar buttonwidth2">
          <Link to={'/education'} >Образование</Link>
          </li>
          <li className="navbar buttonwidth3">
            <Link to={'/experience'} className='selected'>Опыт работ</Link>
          </li>
        </ul>
      </nav>
      <div className="hr-arrow-top"></div>
      <p className="margin">


        <span className="bolded">Опыт работы:</span>
        <table className="profiletext">
          <tr>
            <td className="grey">Февраль 2009 -<br/> настоящее время<br/>7 лет 9 месяцев</td>
            <td className="vertical">
              <b>ПАО "Казанский Вертолетный Завод"</b><br/><span className="grey">Россия</span>
              <p>Инженер по наладке и испытаниям</p>
              <p>За время работы на заводе:<br/><br/>- Участвовал, контролировал и проводил множество испытаний позволивших повысить качество производсва.<br/>- Занимался подготовкой кадров и обучением специалистов из сторонних организаций.
              <br/>- Помогал в решении технических вопросов смежным подразделениям.
              <br/>- Провел в общей сложности 9 месяцев в индии в составе гарантийной бригады и бригады установки и наладки контрольно-проверочной аппаратуры, работая в качестве инженера и помощника перводчика. </p></td>
          </tr>
          <tr>
            <td className="grey">2012 -<br/>2013<br/>1 год</td>
            <td className="vertical">
              <b>-</b><br/><span className="grey">Россия</span>
              <p>Занимался разработкой приложений на Android (код + дизайн)</p>
            </td>
          </tr>
          <tr>
            <td className="grey">ноябрь 2007 -<br/> декабрь 2008<br/>1 год 1 месяц</td>
            <td className="vertical">
              <b>Студия веб дизайна "Элит Дизайн"</b><br/><span className="grey">Россия</span>
              <p>Верстка готовых дизайн проектов, интеграция с CMS (Joomla, Mamba, Bitrix), оптимизация отображения на различных платформах.</p>
              <p>- Свертсал более 60 проектов
              <br/>- Занимался размещением проектов на серверах и дальнейшей их поддержкой.
              </p></td>
          </tr>
          <tr>
            <td className="grey">декабрь 2006 -<br/> сентябрь 2007<br/>9 месяц</td>
            <td className="vertical">
              <b>Студия веб дизайна "LaCoNix"</b><br/><span className="grey">Россия</span>
              <p>Web дизайнер.</p>
              <p>- Занимался созданием дизайн проектов
              <br/>- Работал с крупным иностранным проектом, разрабатывая элементы UI.
              </p></td>
          </tr>
          <tr>
            <td className="grey">2005 -<br/> сентябрь 2011<br/>6 лет</td>
            <td className="vertical">
              <b>-</b><br/><span className="grey">Россия</span>
              <p>Freelance разработка сайтов</p>
              <p>- Занимался созданием дизайн проектов сайтов, баннеров, полиграфии, видео роликов.
              <br/>- Участвовал в конкурсах и тендерах.
              </p></td>
          </tr>
        </table>
      </p>
      <br/>
      </div>
    )
  }
}

export default Experience;
