const countReducer = (state=0, action) => {
    switch(action.value){
        case 0:
            return state+1
        case 1:
            return state-1
        default:
            return state
    }
}
export default countReducer