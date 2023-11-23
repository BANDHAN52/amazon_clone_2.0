export const initialState={
    basket:[],
};

function reducer(state, action) {
    switch(action.type)
    case "ADD_TO_BASKET":
        // logic for adding item to basket
        break;
    case "REMOVE_FROM_BASKET":
    // LOGIC FOR REMOVING ITEM FROM BASKET
        break;
     default:
        return state;

}
export default reducer;