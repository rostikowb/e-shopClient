import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import './navMobile.css';

class NavMobile extends Component {
    state = {
        open: '',
        downMenu: []
    };

    downSubMenu(id) {
        if(!this.state.downMenu.includes(id)){
            this.setState({downMenu: [...this.state.downMenu, id]});
        } else{
            this.setState({downMenu: this.state.downMenu.filter(el => el !== id)})
        }
    }

    render() {
        const {downMenu} = this.state;
        return (
            <nav>
                <ul className="topmenuMobile">
                    <li className="sub">
                        <span onClick={() => this.downSubMenu(0)} className="">Про нас {downMenu.includes(0) ? <ExpandLess /> : <ExpandMore />}</span>

                        <ul className={downMenu.includes(0) ? 'submenuMobileActive1' : 'submenuMobile'}>
                            <li><NavLink to="">Про нас</NavLink></li>
                            <li><NavLink to="/statut">Статут</NavLink></li>
                            <li><NavLink to="">Структура</NavLink></li>
                            <li><NavLink to="">Команда</NavLink></li>
                        </ul>
                    </li>
                    <li className="sub"><NavLink to="/news"><span>Новини</span></NavLink>
                    </li>
                    <li><NavLink to=""><span>Корисні посилання</span></NavLink></li>
                    <li><NavLink to="/contact"><span>Контакти</span></NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default NavMobile;