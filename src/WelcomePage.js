import React, { Component } from "react";
import "./WelcomePage.css";
import {ReactComponent as Arrow} from "./arrow_right.svg";
import {ReactComponent as Flag} from './flag.svg';
import {ReactComponent as Logo} from './WoofLogo.svg';

export default class WelcomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="header" >
          <Flag className="flag"/>
          <button>Войти</button>
          <button>Контакты</button>
          <button>О нас</button>
          <Logo className="logo" />
        </div>
        <div className="block">
          <img className="image" src="/Assets/2.jpg" alt="block 1" />
          <p className="text">Ищу питомца</p>
          <Arrow className="icon"/>
        </div>
        <div className="block">
          <img className="image" src="/Assets/1.jpg" alt="block 2" />
          <p className="text">Я владелец</p>
          <Arrow className="icon"/>
        </div>
        <div className="block">
          <img className="image" src="/Assets/3.jpg" alt="block 3" />
          <p className="text">Я заводчик</p>
          <Arrow className="icon"/>
        </div>
      </div>
    );
  }
}
