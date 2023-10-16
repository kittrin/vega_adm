import React from 'react';
import './top_menu.css'


const TopMenu = () => {
    return (
        <div id='top_menu_vega'>
            <div className='cont'>
                <div className='li'><a href='/main'>Главная</a></div>
                <div className='li'><a href='/tutors'>Репетиторы</a></div>
                <div className='li'><a href='/universities'>ВУЗЫ</a></div>
                <div className='li'><a href='/college'>ССУЗЫ</a></div>
                <div className='li'><a href='/tests'>Тесты</a></div>
                <div className='li'><a href=''>Профиль</a></div>
            </div>
        </div>
    );
};

export default TopMenu;