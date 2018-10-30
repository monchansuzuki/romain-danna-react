
const initState ={
    isToggle : false,
    onChoice:false
}

const navReducer = (state = initState , action) =>{
    switch (action.type) {
        case "TOGGLE_MENU":
           if (state.isToggle === false) {
               return{
                   ...state,isToggle: true
               }
           }else {
               return{
                   ...state,isToggle : false
               }
           }
        case 'TOGGLE_LINK':{

        }
        default:
            return state

    }
}

export default navReducer