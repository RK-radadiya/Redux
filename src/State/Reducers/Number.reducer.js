


const number_reducer = (state = { number_name: "GOLDEN", number_value: 100 }, action) => {
    if (action.type === "GET") {
        return state
    }
    else if (action.type === "CREATE") {
        return state
    }
    else{
        return state
    }
}

export default number_reducer