const initialState = {
    totalForMonth : 0.00,
    entertainmentLeft : 0.00,
    householdLeft : 0.00,
    selfLeft : 0.00, 
    transportationLeft : 0.00,
    utilitiesLeft : 0.00
}

export const changeUserBalance = (state = initialState, action:any) => {
    switch (action.type){
        case 'SUBTRACT_FROM_TOTAL':
            return {
                ...state, 
                totalForMonth : action.payload
            }
        default:
            return state
    }
}

