
const numberReducer = (state, action) =>{
    switch (action.input_val) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
    }
}

export default numberReducer;