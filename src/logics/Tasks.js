import { list } from '../actions/actionCreator';

export default class Tasks {

    static list() {
        return dispatch => {
            fetch('http://localhost:5000/api/tasks/get_all')
                .then(response => {
                    return response.json();
                })
                .then((json) => {
                    return json.body;
                })
                .then((tasks) => {
                    dispatch(list(tasks));
                    return tasks;
                });
        };
    }
}