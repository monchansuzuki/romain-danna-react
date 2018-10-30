
const initState = {
    fetching :false,
    fetch: false,
    imageCatalogue : [],
    imagePromotion:[],
    imageMagazine:[],
    catSelect:"",
    err : null
}

export const userReducer = (state = initState , action)=>{

    switch (action.type) {
        case "FETCH_IMAGE_CATALOGUE":{
            return {...state, fetching: true}
        }
        case 'RECEIVED_CATALOGUE':{
            return {...state,
                fetching: false,
                fetch: true,
                imageCatalogue: action.payload.map(img=>{
                    return {
                        version:img.version,
                        public_id:img.public_id
                    }
                })}
        }
        case 'RECEIVED_PROMOTION':{
            return{...state,
                fetching: false,
                fetch: true,
                imagePromotion: action.payload.map(img=>{
                    return{
                        version:img.version,
                        public_id:img.public_id
                    }
                })}
        }
        case 'RECEIVED_MAGAZINE':{
            return{...state,
                fetching: false,
                fetch: true,
                imageMagazine: action.payload.map(img=>{
                    return{
                        version:img.version,
                        public_id:img.public_id
                    }
                })}
        }
        case 'FECTCH_MAGAZINE_ERROR':{
            return {...state, fetching: false,err: action.payload}
        }
        case "ON_CHANGE":{
            return {...state, catSelect: action.payload}
        }
        default: return state
    }

}

