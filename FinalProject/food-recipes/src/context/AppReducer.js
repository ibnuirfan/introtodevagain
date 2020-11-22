export default (state, action) => {
    switch(action.type) {
        case "ADD_RECIPE_TO_FAVOURITELIST":
            return {
                ...state,
                favouritelist: [action.payload, ...state.favouritelist]
            }
        case "REMOVE_RECIPE_FROM_FAVOURITELIST":
            return {
                ...state,
                favouritelist: state.favouritelist.filter(
                    (recipe) => recipe.id !== action.payload
                ),
            };    
        default:
            return state;
    }
}