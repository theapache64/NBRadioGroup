// @flow
import * as React from 'react';
import {View} from 'react-native';
type PropTypes = {
    selectedValue: string,
    onChangeValue?: Function,
    children?: any,
    row: boolean
}
type StateTypes = {
    selectedValue: string
}
export default class RadioGroup extends React.Component<PropTypes, StateTypes> {

    static defaultProps = {
        selectedValue: '',
        row: false
    };

    constructor(props: PropTypes) {
        super(props);
        this.state = {
            selectedValue: this.props.selectedValue
        };
    }

    setActiveValue = (selectedValue: string) => {
        this.setState({selectedValue});

        if (this.props.onChangeValue) {
            this.props.onChangeValue(selectedValue);
        }
    };

    render() {

        const {children} = this.props;
        const childrenWithProp = React.Children.map(children, child => {
            return React.cloneElement(child, {
                activeValue: this.state.selectedValue,
                setActiveValue: this.setActiveValue
            });
        });

        return (
            <View style={{
                flex: 1,
                flexDirection: this.props.row ? 'row' : 'column'
            }}>
                {childrenWithProp}
            </View>
        );
    }
}
