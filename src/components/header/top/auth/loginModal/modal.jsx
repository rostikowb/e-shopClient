import React from 'react';
import {connect} from 'react-redux'
import {Login} from "../../../../dopComp/loginForm/login.jsx"
import s from './modal.module.css';
import {changeStateAuthModal} from "../../../../../redux/actions";

const mapStateToProps = state => {
    return {isActive: state.loginModal.isActiveModal}
};

export default connect(mapStateToProps, {changeStateAuthModal})((isActive) => {
    // constructor(props){
    //     super(props);
    //     console.log(this.props.pr);
    //     this.state = {
    //         isActiveModal: this.props.pr,
    //     };
    // }
    //
    //
    // handleChangeStateModal = () => {
    //     this.setState({isActiveModal: !this.state.isActiveModal})
    // };
    //
    // render() {
    // console.log(this.state.isActiveModal);
    // return (
    //     <div style={{display: this.state.isActiveModal ? 'block' : 'none'}}
    //
    //          onClick={() => this.handleChangeStateModal()} className='modal_login_box'>
    //         <div className='modal_login'>
    //             <Login isModal/>
    //         </div>
    //     </div>
    // )
    // }

    return (
        isActive.isActive ?
            <div>
                <div onClick={() => isActive.changeStateAuthModal()} className={s.modal_login_box}>

                </div>
                <div className={s.modal_login}>
                    <Login/>
                </div>
            </div>
            : null
    )
})

