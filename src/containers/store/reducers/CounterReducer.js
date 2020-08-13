export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function increaseCount() {
    return ({ type: INCREMENT });
}

export function decreaseCount() {
    return ({ type: DECREMENT });
}

export function resetCount() {
    return ({ type: RESET });
}

const INITIAL_STATE = {
    count: 0,
    history: [],
}

function handleChange(state, change) {
    const { count, history } = state;
    return ({
        count: count + change,
        history: [count + change, ...history]
    })
}

export default function counter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case INCREMENT:
            return handleChange(state, 1);
        case DECREMENT:
            return handleChange(state, -1);
        case RESET:
            return (INITIAL_STATE)
        default:
            return state;
    }
}