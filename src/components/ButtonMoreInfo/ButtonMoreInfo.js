import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


class ButtonMoreInfo extends Component {
    

    render() {
        return(
            <div>
                <FontAwesomeIcon icon={faPlus} className="plusIcon" size="sm" />
            </div>
        );
    }
}

export default ButtonMoreInfo;