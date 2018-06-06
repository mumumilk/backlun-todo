import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

export default class Task extends Component {
    render() {
        return (
            <List.Item>
                <List.Content>
                    <List.Header>{this.props.task.Title}</List.Header>
                    {this.props.task.Text}
                </List.Content>
            </List.Item>
        );
    }
}