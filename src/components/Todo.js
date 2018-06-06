import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import Tasks from '../logics/Tasks';
import { Segment, List } from 'semantic-ui-react';

class Todo extends Component {
    componentDidMount() {
        this.props.list();
    }

    render() {
        return (
            <Segment inverted>
                <List divided inverted relaxed>
                    {this.props.tasks.map(task => <Task key={task.ID} task={task} />)}
                </List>
            </Segment>
        );
    }
}

const mapStateToProps = state => {
    return { tasks: state }
};

const mapDispatchToProps = dispatch => {
    return {
        list: () => {
            dispatch(Tasks.list());
        }
    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo)

export default TodoContainer