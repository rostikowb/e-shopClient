import s from './menu.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
// import Logo from '../../../menuContent/logo/logo'
// import Auth from '../../../menuContent/auth/auth'
// import Info from '../../../menuContent/info/info'
// import Filter from '../../../menuContent/filter/filter'
import {menuContent as Menu} from '../../../menuContent/menuContent'
import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    list: {
        width: '30vw',
        transition: 'all 1s',
        position: 'center',
        // backgroundColor: '#f5f5f5'
    },
    fullList: {
        width: 'auto',
        // backgroundColor: '#f5f5f5'
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

        </div>
    );

    return (
        <div className={s.menu}>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><FontAwesomeIcon className={s.icon} icon={faBars}/></Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}


                        {/*------------------ТУТ МЕНЮ---------------------*/}


                        <div className={s.menuBox}>

                        <Menu/>

                            {/*<Logo/>*/}
                            {/*<Auth/>*/}
                            {/*<Info/>*/}
                            {/*<Filter/>*/}
                            {/*/!*<a style={{color:'black'}} href="#">ssssssss</a>*!/*/}

                            {/*/!*<button className={s.menuBtnCls} onClick={toggleDrawer(anchor, false)}><FontAwesomeIcon className={s.icon} icon={faTimes} size={150} /></button>*!/*/}
                        </div>


                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}