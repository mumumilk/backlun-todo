export function taskReducer(state = [], action) {
    if (action.type === 'LIST') {
        return action.tasks;
    }

    return state;
}