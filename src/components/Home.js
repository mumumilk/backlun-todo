import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import Todo from './Todo';

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background: whitesmoke;
`;

const Header = styled.header`
    width: 100%;
    height: auto;
    background: black;
    color: white;
    padding: 20px 0;
    text-align: center;
    color: whitesmoke;
`;

const Title = styled.h1`
    font-family: 'IBM Plex Sans', sans-serif;
`;


export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <Title></Title>
                <Todo store={this.props.store}/>
            </Container>
        );
    }
}