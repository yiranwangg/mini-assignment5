
const defaultState = [
    [0,0],
    [0,0]
]

const gridReducer = (state = defaultState, action) => {
    if (action.type ==="CLICK") {
            const value = state[action.x][action.y];
            if (value === 0) {
                state[action.x][action.y] = 1;
            } else {
                state[action.x][action.y] = 0;
            }
            return [...state];
        }
        else {
            return state;
        }
}
export default gridReducer