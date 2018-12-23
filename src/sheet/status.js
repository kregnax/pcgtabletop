import React, { Component } from 'react';
import LabelledField from '../common/labelledField/labelledField';
import './status.scss';
import InteractiveField from '../common/interactiveField/interactiveField';

class Status extends Component {
    render() {
        var move = this.props.status.basics.move;
        var hitPoints = this.props.status.hit_points;
        var armorClass = this.props.status.armor_class;
        var initiative = this.props.status.initiative;

        return <div>
            <div className="status">
                <div className="status__hp">
                    <InteractiveField label="HP" value={hitPoints.points} />
                    <InteractiveField label="Nonlethal Damage" value={hitPoints.subdual} />
                    <LabelledField label="Damage Reduction" value={hitPoints.damage_reduction} />
                </div>
                <div className="status__move">
                    <LabelledField label="Move" value={move.all} />
                </div>
                <div className="status__initiative">
                    <LabelledField label="Initiative" value={initiative.total} useSign={true} />
                    <LabelledField label="Dex Modifier" value={initiative.dex_mod} useSign={true} />
                    <LabelledField label="Misc Modifier" value={initiative.misc_mod} useSign={true} />
                    <InteractiveField label="Other" value={initiative.other_mod} useSign={true} />
                </div>
                <div className="status__armorClass">
                    <LabelledField label="Armor Class" value={armorClass.total} />
                </div>
            </div>
            {/* <pre>{JSON.stringify(basics, null, 5)}</pre> */}
        </div>
    }
}

export default Status;