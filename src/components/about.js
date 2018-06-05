import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../main.css';
import '../css/about.css';


class About extends Component {
  render() {
    return (
      <div>

      <nav>
        <ul className="navbar">
          <li className="navbar buttonwidth1">
          <Link to={'/'} id="idabout" className='selected'>Обо мне</Link>
          </li>
          <li className="navbar buttonwidth2">
          <Link to={'/education'}>Образование</Link>
          </li>
          <li className="navbar buttonwidth3">
            <Link to={'/experience'}>Опыт работ</Link>
          </li>
        </ul>
      </nav>
      <div className="hr-arrow-top"></div>

      <div className="margin">
        <span className="bolded">Личная информация:</span>
        <div className="profiletext margin">
          <div>
            <div className="table-cell bolded width-150">Город проживания:</div>
            <div className="table-cell">Казань</div>
          </div>
          <div>
            <div className="table-cell bolded width-150">Дата рождения:</div>
            <div className="table-cell">14 июня 1986 г. (31 год)</div>
          </div>
          <div>
            <div className="table-cell bolded width-150">Пол:</div>
            <div className="table-cell">Мужской</div>
          </div>
          <div>
            <div className="table-cell bolded width-150">Образование:</div>
            <div className="table-cell">Высшее</div>
          </div>
          <div>
            <div className="table-cell bolded width-150">Семейное положение:</div>
            <div className="table-cell">Женат, двое детей.</div>
          </div>
        </div>
      </div>

      <br/>

      <div className="margin">
        <span className="bolded">Дополнительная информация:</span>
        <div className="profiletext margin">
          <div>
            <div className="table-cell bolded width-150">Иностранные языки:</div>
            <div className="table-cell">английский - Advanced, испанский - Начинающий</div>
          </div>
          <div>
            <div className="table-cell bolded width-150">Водительское удостоверение:</div>
            <div className="table-cell">категории B</div>
          </div>
          <div>
            <div className="table-cell bolded width-150">Наличие автомобиля:</div>
            <div className="table-cell">Да</div>
          </div>
          <div>
            <div className="table-cell bolded width-150">Возможность командировок:</div>
            <div className="table-cell">Да</div>
          </div>
          <div>
            <div className="table-cell bolded width-150">Личные качества:</div>
            <div className="table-cell">исполнительность, умение работать в команде, легкая обучаемость, нацеленность на положительный результат, отсутствие вредных привычек.</div>
          </div>
        </div>
      </div>


      <div className="margin">
        <span className="bolded">Автобиография:</span>
        <p className="profiletext">
          Разработкой сайтов я начал заниматься еще в школе. Тогда я увлекался компьютерными играми и в основном создавал сайты на данную тематику. Сайты, баннеры, логотипы комманд по популярным на тот период играм. Учавствовал в
          конференции проводимой в КГУ (Казанский Государственный Университет) с проектом "Сайт школы №39". В последствии, найдя единомышленников, занимался созданием сайтов на заказ. Столкнувшись с проблемой поиска заказов, начал работать в студиях LaCoNix и Элит Дизайн. Был опыт удаленной работы на американскую компанию, где я занимался разработкой интерфейса. После окончания университета, устроился на вертолетный завод, для приобритения опыта работы по специальности. Разработка сайтов першла
          в разряд хобби. Работая на заводе, я продолжал изучать новые для меня технологии. В тот период меня заинтересовала разработка Android приложений. Одно из моих приложение <a href="http://click-storm.com/ru/articles/379/"><b>Dota 2 Invoker Trainer</b></a>, опубликованное в Play Markete было скачано более 300000 раз.
        </p>
      </div>
      </div>
    )
  }
}

export default About;
