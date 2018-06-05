import React, { Component } from 'react';
import '../main.css';

class Infosmall extends Component {
  render() {
    return (
      <div>
      <div className="photofaceline">
          <div className="photofaceleft">
            <div className="photofacesmall"></div>
          </div>
          <div className="photofaceright">
            <ul className="infofield">
              <li>
                <div className="icon big"><i className="fa fa-address-book" aria-hidden="true"></i></div><div className="icontext"><span>ФИО:</span>Мухамедов Рустам Альфэридович</div>
              </li>
              <li>
                <div className="icon big"><i className="fa fa-map-marker" aria-hidden="true"></i></div><div className="icontext"><span>Адрес:</span>г. Казань, ул. Закиева д.23</div>
              </li>
              <li>
                <div className="icon big"><i className="fa fa-phone" aria-hidden="true"></i></div><div className="icontext"><span>Телефон: </span><i className="fa fa-whatsapp" aria-hidden="true"></i> +7 (937) 280-90-98 </div>
              </li>
              <li>
                <div className="icon big"><i className="fa fa-envelope-open" aria-hidden="true"></i></div><div className="icontext"><span>E-mail:</span>liveforblaze@gmail.com</div>
              </li>
            </ul>
          </div>
    </div>

      <ul className="social hide">
        <li>
          <div className="icon big"><i className="fa fa-skype" aria-hidden="true"></i></div><div className="icontext"><span>Skype</span>liveforblaze1</div>
        </li>
        <li>
          <div className="icon big"><i className="fa fa-facebook-square" aria-hidden="true"></i></div><div className="icontext"><span>Facebook</span><a href="https://www.facebook.com/liveforblaze">https://www.facebook.com/ liveforblaze</a></div>
        </li>
        <li>
          <div className="icon big"><i className="fa fa-vk" aria-hidden="true"></i></div><div className="icontext"><span>Вконтакте</span><a href="https://vk.com/mukhamedov">https://vk.com/mukhamedov</a><br/><br/></div>
        </li>
      </ul>



      </div>
    )
  }
}

export default Infosmall;
