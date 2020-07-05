import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './column-4.css'

class ColumnSoc extends Component {
    render() {
        return (
            <div className="socialBox">
                <div>
                    <h3>Ми в соціальних мережах!</h3>
                </div>
                <div className="socialIcons">
                    <a target='_blank' aria-label="Facebook" href="https://www.facebook.com/%D0%93%D0%9E-%D0%9F%D0%9E%D0%90%D0%9F-%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D1%81%D1%8C%D0%BA%D0%B0-%D0%9E%D0%B1%D0%BB%D0%B0%D1%81%D0%BD%D0%B0-%D0%90%D0%B3%D1%80%D0%B0%D1%80%D0%BD%D0%B0-%D0%9F%D0%B0%D0%BB%D0%B0%D1%82%D0%B0-111022997082489"><FontAwesomeIcon className="social facebook" icon={faFacebookSquare} /></a>
                    <a target='_blank' aria-label="Instagram" href="https://www.instagram.com/olexiysereda/?hl=uk"><FontAwesomeIcon className="social instagram" icon={faInstagram} /></a>
                </div>

            </div>
        )
    }
}

export default ColumnSoc;


