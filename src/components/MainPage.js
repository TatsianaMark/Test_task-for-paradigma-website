import React from 'react';
import logo from '../assets/img/logo.png';
import map from '../assets/img/map.png';
import phone_icon from '../assets/img/phone_icon.png';
import clock_icon from '../assets/img/clock_icon.png';
import icon_sign from '../assets/img/icon_sign.png';
import bg_girl from '../assets/img/bg_girl.png';
import wave from '../assets/img/wave.png';
import branch from '../assets/img/branch.png'
import BtnLookMap from "./BtnLookMap";



//MORE EASY CHANGE MAIN BG
// function ibg(){
//
//     let ibg=document.querySelectorAll(".ibg");
//     for (var i = 0; i < ibg.length; i++) {
//         if(ibg[i].querySelector('img')){
//             ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
//         }
//     }
// }

// ibg();

function MainPage() {
    return (
        <div className="container">
                <div className="page">
                    <div className="main-screen">
                        <div className="main-screen__bg">
                            <header className="App-header">
                                <div className="header__row">
                                    {/*--------------------------------header__main-----------------------------------*/}
                                    <div className="header-main">
                                        {/*1--------------------------------main__logo-----------------------------------*/}
                                        <div className="header-main__logo">
                                            <div className="header-main__logo main-img">
                                                <img
                                                    src={logo}
                                                    alt="Logo"
                                                    className="logo"
                                                />


                                            </div>
                                            <div className="header-main__logo main-text">
                                                Студия депиляции и
                                                массажный кабинет
                                                в Бресте
                                            </div>

                                        </div>
                                        {/*2--------------------------------main__location-----------------------------------*/}
                                        <div className="header-main__location">
                                            {/*2--------------------------------map------------*/}
                                            <div className="header-main__location map">
                                                <img
                                                    src={map}
                                                    alt="Map"
                                                    className="map"
                                                />
                                            </div>
                                            {/*2--------------------------------text----------*/}
                                            <div className="header-main__location text">
                                                <div className="text__place">
                                                    <div className="title">Мы находимся в центре:</div>
                                                    <div className="address">г. Брест, ул. Гоголя, д.65</div>
                                                </div>
                                                <BtnLookMap/>
                                            </div>
                                        </div>
                                        {/*3--------------------------------main__contact-----------------------------------*/}
                                        <div className="header-main__contact">
                                            <div className="icons">
                                                <div className="phone-icon">
                                                    <img
                                                        src={phone_icon}
                                                        alt="phone_icon"
                                                        className=""
                                                    />
                                                </div>
                                                <div className="clock-icon">
                                                    <img
                                                        src={clock_icon}
                                                        alt="clock_icon"
                                                        className=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="contact-data">
                                                <div className="contact-text">Звоните, мы сейчас работаем</div>
                                                <div className="contact-number">+375 33 382 24 99</div>
                                                <div className="contact-time">
                                                    <div className="week">Пн-Вс</div>
                                                    <div className="work-time">9:00-21:00</div>
                                                </div>
                                            </div>

                                        </div>

                                        {/*4--------------------------------main__sign-----------------------------------*/}
                                        <div className="header-main__sign">
                                            <div className="sign-online">
                                                <div className="icon-btn">
                                                    <img
                                                        src={icon_sign}
                                                        alt="icon_sign"
                                                        className=""
                                                    />
                                                </div>
                                                <div className="text-sign">Записаться онлайн</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*--------------------------------header__menu-----------------------------------*/}
                                    <nav className="header__menu menu">
                                        <div className="menu__icon icon-menu">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className="menu menu_body">
                                            <ul className="menu__list">
                                                <li><a href=""className="menu__link">Главная</a></li>
                                                <li><a href=""className="menu__link">Шугаринг и депиляция воском</a></li>
                                                <li><a href=""className="menu__link">Антицеллюлитный массаж</a></li>
                                                <li><a href=""className="menu__link">Классический массаж</a></li>
                                                <li><a href=""className="menu__link">Обучение</a></li>
                                                <li><a href=""className="menu__link">Косметика для мастеров</a></li>
                                                <li><a href=""className="menu__link">Статьи</a></li>
                                                <li><a href=""className="menu__link">О студии</a></li>
                                                <li><a href=""className="menu__link">Контакты</a></li>

                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </header>
                            <div className="main-content">
                                <div className="main-content__title">
                                    <div className="large">
                                        Хотите избавиться от
                                        нежелательных волос
                                        или нужен сеанс
                                        антицеллюлитного массажа?
                                    </div>
                                    <div className="details">
                                        <div className="small-title">депиляция воском и Шугаринг;</div>
                                        <div className="small-title">профессиональные сертифицированные мастера;</div>
                                        <div className="small-title">работаем и с женщинами, и с мужчинами;</div>
                                        <div className="small-title">результат уже после первой процедуры.</div>
                                    </div>
                                    <div className="btn-page">
                                    <div className="btn-content">
                                        <div className="btn-content__title">ПОЛУЧИТЬ КАРТУ КЛИЕНТА БЕСПЛАТНО</div>
                                        <div className="btn-content__img">
                                            <img
                                                src={branch}
                                                alt="branch"
                                                className=""
                                            />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="main-content__img">
                                    <img
                                        src={bg_girl}
                                        alt="bg_girl"
                                        className=""
                                    />
                                </div>
                            </div>
                            <div className="content-footer">
                                <div className="main-content__wave">
                                <img
                                src={wave}
                                alt="wave"
                                className=""
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default MainPage;