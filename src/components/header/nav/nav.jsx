import React, {Component} from 'react';
import NavPc from './navPc/navPc'
import NavMobile from './NavMobile/navMobile'
import './nav.css'

class Nav extends Component {
    state = {
        isShow: false,
        isShowMobileMenu: false,
        widthScreen: 0
    };
    orientCh() {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.setState({isShow: true});
        } else {
            this.setState({isShow: false});
        }

        // window.addEventListener("orientationchange", () => {
        //     if (window.innerWidth >= 800) {
        //         this.setState({isShow: true});
        //     } else {
        //         this.setState({isShow: false});
        //     }
        //     console.log(window.innerWidth);
        //     console.log("the orientation of the device is now " + window.innerWidth);
        // });
    }
    // componentDidMount() {
        // this.windowResize();
        // window.addEventListener('resize', this.windowResize);
        // if (window.innerWidth <= 600 && window.innerWidth !== 0) {
        //     this.setState({isShow: true});
        // }
    //     this.orientCh()
    // }

    componentWillMount(){
        this.orientCh()
    }

    // componentWillUnmount() {
    //     window.addEventListener('resize', this.windowResize);
    // }

    // windowResize = () => {
    //     const {widthScreen} = this.state;
    //     this.setState({widthScreen: window.innerWidth});
    //     if (widthScreen <= 600 && widthScreen !== 0) {
    //         this.setState({isShow: true});
    //     } else {
    //         this.setState({isShow: false});
    //     }
    // };

    render() {
        return (this.state.isShow ? <NavMobile/> : <NavPc/>)
    }
}

export default Nav;
