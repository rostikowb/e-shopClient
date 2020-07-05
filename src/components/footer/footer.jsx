import ColumnLocation from './column-1/column-1'
import ColumnPartners from './column-2/column-2'
import ColumnContacts from './column-3/column-3'
import ColumnSoc from './column 4/column-4'
import Login from './ap/apButt'
import './footer.css';
import React from 'react';

export default function Footer(props) {
    return (
        <footer>
            <div className="wrapperFooter">
                <div className='upFooter'>
                    <ColumnContacts/>
                    <ColumnPartners/>
                    <ColumnSoc/>
                </div>
                <div className='downFooter'>
                    <ColumnLocation/>
                </div>
                <Login func={props.func} />
            </div>

        </footer>
    )
}