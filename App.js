// @flow
import React, {Component} from 'react';
import {Button, Container, Content, Text} from 'native-base';
import RadioGroup from './custom_radio/RadioGroup';
import RadioButton from './custom_radio/RadioButton';

type PropTypes = {}

type StateTypes = {
    activeGender: string
}
export default class App extends Component<PropTypes, StateTypes> {

    constructor(props: PropTypes) {
        super(props);

        this.state = {
            activeGender: ''
        };
    }

    render() {
        return (
            <Container>

                <Content padder>

                    <RadioGroup

                        //Direction
                        row

                        //Callback
                        onChangeValue={(activeGender) => this.setState({activeGender})}

                        //Default
                        selectedValue="male">

                        <RadioButton label="Male" value="male"/>
                        <RadioButton label="Female" value="female"/>

                    </RadioGroup>

                    <Button onPress={() => alert('Genre is ' + this.state.activeGender)}
                            style={{marginTop: 10}}>
                        <Text>GET GENRE</Text>
                    </Button>

                </Content>
            </Container>
        );
    }
}




