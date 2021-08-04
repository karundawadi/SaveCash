const monthlyState = {
    totalForMonth : 0.00,
    entertainmentLeft : 0.0 ,
    householdLeft : 0.00, 
    selfLeft: 0.00,
    transportationLeft : 0.00,
    utilitiesLeft : 0.00,
    debt : 0.00, // This will be added to total debt 
    surplus : 0.00, // Will be added to total surplus 
}

// All of this only sets for now; will add action/ logic upon requirement
export const monthlyBalance = (state = monthlyState, action:any) => {
    switch (action.type){
        case "SET_TOTAL_FOR_MONTH":
            return {
                ...state,
                totalForMonth: action.payload
            }
        case "SET_ENTERTAINMENT_FOR_MONTH":
            return {
                ...state,
                entertainmentLeft: action.payload
            }
        case "SET_HOUSEHOLD_FOR_MONTH":
            return {
                ...state,
                householdLeft: action.payload
            }
        case "SET_SELF_FOR_MONTH":
            return {
                ...state,
                selfLeft: action.payload
            }
        case "SET_TRANSPORTATION_FOR_MONTH":
            return {
                ...state,
                transportationLeft: action.payload
            }
        case "SET_UTILITIES_FOR_MONTH":
            return {
                ...state,
                utilitiesLeft: action.payload
            }
        case "SET_DEBT_FOR_MONTH":
            return {
                ...state,
                debt: action.payload
            }
        case "SET_SURPLUS_FOR_MONTH":
            return {
                ...state,
                surplus: action.payload
            }
        case 'PURGE':
            return monthlyState
        default:
            return state
    }
}