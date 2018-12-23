import React, { Component } from 'react';
import './labelledField.scss';

class LabelledField extends Component {
    render() {
        if (!this.props.useSign) {
            return <div className="labelledField">
                <div className="labelledField__label">{this.props.label}</div>
                <div className="labelledField__value">{this.props.value}</div>
            </div>
        }
        else {
            var value = this.props.value ? Number(this.props.value) : 0;
            var valueFormatted = value >= 0 ? "+" + value : "-" + value;

            return <div className="labelledField">
                <div className="labelledField__label">{this.props.label}</div>
                <div className="labelledField__value">{valueFormatted}</div>
            </div>
        }
    }
}

export default LabelledField;