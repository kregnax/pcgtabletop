import React, { Component } from 'react';
import LabelledField from '../common/labelledField/labelledField';
import './abilities.scss';
import InteractiveField from '../common/interactiveField/interactiveField';

class Abilities extends Component {
    render() {
        var abilities = this.props.abilities;

        var abilityList = abilities.map((ability) =>
            <div>{ability.name.short}</div>
        )

        return <div className="abilities">
            {abilityList}
        </div>
    }
}

export default Abilities;