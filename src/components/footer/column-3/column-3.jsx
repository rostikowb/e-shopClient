import React, {Component} from 'react';
import './column-3.css'

class ColumnContacts extends Component{
    render(){
        return(
            <div className='contacts'>

                <h3>Є питання?</h3>
                <ul>
                    <li><a href="tel:+380665090487">+380665090487</a></li>
                    <li><a href="tel:+380664493431">+380664493431</a></li>
                    {/*<li>Напишіть нам!</li>*/}
                </ul>
            </div>
        )
    }
}
export default ColumnContacts;