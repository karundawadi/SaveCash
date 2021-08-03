const yearlyState = {
    totalExpenses : 0.00,
    totalincome : 0.00,
    totalEntertainment : 0.00,
    totalHousehold : 0.00,
    totalSelf : 0.00,
    totalTransportation : 0.00,
    totalUtilities : 0.00,
    totalSurplus: 0.00,
    totalDebt : 0.00
}

// Same thing here writng setters only here for now 
export const yearlyBalance = (state = yearlyState, action:any) => {
    switch (action.type){
        case "SET_TOTAL":
            return {
                ...state,
                totalExpenses : action.payload
            }

        case "SET_INCOME":
            return {
                ...state,
                totalincome : action.payload
            }

        case "SET_ENTERTAINEMENT":
            return {
                ...state,
                totalEntertainment : action.payload
            }

        case "SET_HOUSEHOLD":
            return {
                ...state,
                totalHousehold : action.payload
            }

        case "SET_SELF":
            return {
                ...state,
                totalSelf : action.payload
            }

        case "SET_TRANSPORTATION":
            return {
                ...state,
                totalUtilities : action.payload
            }

        case "SET_UTILITIES":
            return {
                ...state,
                totalSurplus : action.payload
            }

        case "SET_SURPLUS":
            return {
                ...state,
                totalDebt : action.payload
            }
    
        default:
            return state
    }
}