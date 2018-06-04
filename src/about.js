import React, { Component } from 'react';
import './main.css';
import { Link } from 'react-router-dom';

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
      <p className="margin">


        <span className="bolded">Личная информация:</span>
        <table className="profiletext margin">
          <tr>
            <td className="bolded">Город проживания:</td><td>Казань</td>
          </tr>
          <tr>
            <td className="bolded">Дата рождения:</td><td>14 июня 1986 г. (31 год)</td>
          </tr>
          <tr>
            <td className="bolded">Пол:</td><td>Мужской</td>
          </tr>
          <tr>
            <td className="bolded">Уровень образования:</td><td>Высшее</td>
          </tr>
          <tr>
            <td className="bolded">Семейное положение:</td><td>Женат, двое детей.</td>
          </tr>
        </table>
      </p>
      <br/>
      <p className="margin">
        <span className="bolded">Дополнительная информация:</span>
        <table className="profiletext margin vertical-align-all">
          <tr>
            <td className="bolded">Иностранные языки</td><td>английский - Advanced <br/>испанский - Начинающий</td>
          </tr>
          <tr>
            <td className="bolded">Водительское удостоверение</td><td>категории B</td>
          </tr>
          <tr>
            <td className="bolded">Наличие автомобиля</td><td>да</td>
          </tr>
          <tr>
            <td className="bolded">Возможность командировок</td><td>да</td>
          </tr>
          <tr>
            <td className="bolded">Личные качества</td><td>исполнительность, умение работать в команде, легкая обучаемость, нацеленность на положительный результат, отсутствие вредных привычек</td>
          </tr>
          <tr>
            <td className="bolded">Хобби</td><td>чтение, сочинительство, дизайн, спорт</td>
          </tr>
        </table>

      </p>

      <p className="margin">
        <span className="bolded">Автобиография:</span>
        <p className="profiletext">Разработкой сайтов я начал заниматься еще в школе. Тогда я увлекался компьютерными играми и в основном создавал сайты на данную тематику. Сайты, баннеры, логотипы комманд по популярным на тот период играм. Учавствовал в
        конференции проводимой в КГУ (Казанский Государственный Университет) с проектом "Сайт школы №39". В последствии, найдя единомышленников, занимался созданием сайтов на заказ. Столкнувшись с проблемой поиска заказов, начал работать в студиях LaCoNix и Элит Дизайн. Был опыт удаленной работы на американскую компанию, где я занимался разработкой интерфейса. После окончания университета, устроился на вертолетный завод, для приобритения опыта работы по специальности. Разработка сайтов першла
        в разряд хобби. Работая на заводе, я продолжал изучать новые для меня технологии. В тот период меня заинтересовала разработка Android приложений. Одно из моих приложение <a href="http://click-storm.com/ru/articles/379/"><b>Dota 2 Invoker Trainer</b></a>, опубликованное в Play Markete было скачано более 300000 раз.</p>
      </p>
      </div>
    )
  }
}

export default About;
