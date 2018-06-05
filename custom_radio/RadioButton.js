// @flow
import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Radio, Text} from 'native-base';

type PropTypes = {
    setActiveValue?: Function,
    value: string,
    label?: string,
    activeValue?: string
}
export default class RadioButton extends Component<PropTypes> {

    handleClick = () => {
        if (this.props.setActiveValue) {
            this.props.setActiveValue(this.props.value);
        }
    };

    render() {
        return (
            <TouchableOpacity
                onPress={this.handleClick}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10
                }}>
                <Radio
                    {...this.props}
                    onPress={this.handleClick}
                    selected={this.props.activeValue === this.props.value}
                />
                {this.props.label && <Text style={{marginLeft: 6}}>{this.props.label}</Text>}
            </TouchableOpacity>
        );
    }

}
