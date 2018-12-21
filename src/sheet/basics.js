import React, { Component } from 'react';
import LabelledField from '../common/labelledField/labelledField';
import './basics.scss';

class Basics extends Component {
    render() {
        var basics = this.props.basics;

        return <div>
            <div className="basics">
                <LabelledField label="Name" value={basics.name} />
                <LabelledField label="Class" value={basics.classes.shortform} />
                <LabelledField label="Player" value={basics.playername} />
                <LabelledField label="Age" value={basics.age} />
                <LabelledField label="Alignment" value={basics.alignment.long} />
                <LabelledField label="Deity" value={basics.deity.name} />
                <LabelledField label="Languages" value={basics.languages.all} />
                <LabelledField label="Move" value={basics.move.all} />
                <LabelledField label="Race" value={basics.race.reduce(function(acc, el) { return acc.concat(el + " ")}, "")} />
            </div>
            {/* <pre>{JSON.stringify(basics, null, 5)}</pre> */}
        </div>
    }
}

export default Basics;