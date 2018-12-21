import React, { Component } from 'react';
import './labelledField.scss';

class LabelledField extends Component {
    render() {
        return <div className="labelledField">
            <div className="labelledField__label">{this.props.label}</div>
            <div className="labelledField__value">{this.props.value}</div>
        </div>
    }
}

export default LabelledField;