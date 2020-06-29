import React, {Component} from 'react';


export default class BtnLookMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this.map);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <div className="text__look" onClick={() => this.handleClick()}>
                <span>Смотреть на карте
                    {this.state.isToggleOn ? 'Включено' : 'Выключено'}
                </span>
            </div>
        );
    }
}