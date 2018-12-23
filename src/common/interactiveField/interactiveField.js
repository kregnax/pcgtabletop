import React, { Component } from 'react';
import './interactiveField.scss';

class InteractiveField extends Component {
    render() {
        if (!this.props.useSign) {
            return <div className="interactiveField">
                <div className="interactiveField__label">{this.props.label}</div>
                <div className="interactiveField__value">{this.props.value}</div>
            </div>
        }
        else {
            var value = this.props.value ? Number(this.props.value) : 0;
            var valueFormatted = value >= 0 ? "+" + value : "-" + value;

            return <div className="interactiveField">
                <div className="interactiveField__label">{this.props.label}</div>
                <div className="interactiveField__value">{valueFormatted}</div>
            </div>
        }
    }
}

export default InteractiveField;