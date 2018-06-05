import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../main.css';


class Experience extends Component {
  render() {
    return (
      <div>

        {/* Навигация */}
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
      {/* ---------------------------------------- */}
        <div className="hr-arrow-top"></div>
      {/* Основная часть ------------------------- */}
        <div className="margin">
          <div className="profiletext margin">
            <div className="padding-bottom">
              <div className="table-cell grey">Февраль 2009 -<br/> настоящее время<br/>7 лет 9 месяцев</div>
              <div className="table-cell vertical">
                <b>ПАО "Казанский Вертолетный Завод"</b><br/>
                <span className="grey">Россия</span>
                <p>Инженер по наладке и испытаниям</p>
                <p>За время работы на заводе:<br/><br/>- Участвовал, контролировал и проводил множество испытаний позволивших повысить качество производсва.<br/>- Занимался подготовкой кадров и обучением специалистов из сторонних организаций.
                <br/>- Помогал в решении технических вопросов смежным подразделениям.
                <br/>- Провел в общей сложности 9 месяцев в индии в составе гарантийной бригады и бригады установки и наладки контрольно-проверочной аппаратуры, работая в качестве инженера и помощника переводчика. </p>
              </div>
            </div>
            <div className="padding-bottom">
              <div className="table-cell grey">Январь 2016 -<br/> Август 2016<br/>8 месяцев</div>
              <div className="table-cell vertical">
                <b>IDS Infotech</b><br/>
                <span className="grey">Индия</span>
                <p>Front-end</p>
                Разработка UI, верстка, адаптация сайтов под мобильные устройства, работа с базой данных, работа с библиотекой React.js.
              </div>
            </div>
            <div className="padding-bottom">
            <div className="table-cell grey">2012 -<br/>2013<br/>1 год</div>
            <div className="table-cell vertical">
              <b>-</b><br/>
              <span className="grey">Россия</span>
              <p>Занимался разработкой приложений на Android (код + дизайн)</p>
            </div>
            </div>
            <div className="padding-bottom">
            <div className="table-cell grey">ноябрь 2007 -<br/> декабрь 2008<br/>1 год 1 месяц</div>
            <div className="table-cell vertical">
              <b>Студия веб дизайна "Элит Дизайн"</b><br/>
              <span className="grey">Россия</span>
              <p>Верстка готовых дизайн проектов, интеграция с CMS (Joomla, Mamba, Bitrix), оптимизация отображения на различных платформах.</p>
              <p>- Сверстал более 40 проектов
                <br/>- Занимался размещением проектов на серверах и дальнейшей их поддержкой.
              </p>
            </div>
            </div>
            <div className="padding-bottom">
            <div className="table-cell grey">декабрь 2006 -<br/> сентябрь 2007<br/>9 месяц</div>
            <div className="table-cell vertical">
              <b>Студия веб дизайна "LaCoNix"</b><br/>
              <span className="grey">Россия</span>
              <p>Web дизайнер.</p>
              <p>- Занимался созданием дизайн проектов
              <br/>- Работал с крупным иностранным проектом, разрабатывая элементы UI.
              </p>
            </div>
            </div>
            <div className="padding-bottom">
            <div className="table-cell grey">2005 -<br/> сентябрь 2011<br/>6 лет</div>
            <div className="table-cell vertical">
              <b>-</b><br/>
              <span className="grey">Россия</span>
              <p>Freelance разработка сайтов</p>
              <p>- Занимался созданием дизайн проектов сайтов, баннеров, полиграфии, видео роликов.
              <br/>- Участвовал в конкурсах и тендерах.
              </p>
            </div>
            </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Experience;
