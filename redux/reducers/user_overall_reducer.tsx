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
        // These two are fixed 
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
                totalTransportation : action.payload
            }

        case "SET_UTILITIES":
            return {
                ...state,
                totalUtilities : action.payload
            }

        case "SET_SURPLUS":
            return {
                ...state,
                totalSurplus : action.payload
            }
        case "SET_DEBT":
            return {
                ...state,
                totalDebt : action.payload
            }
        
        // Subtracting cases from here 

        case "SUBTRACT_FROM_ENTERTAINEMENT":
            return {
                ...state,
                totalEntertainment : state.totalEntertainment - action.payload
            }

        case "SUBTRACT_FROM_HOUSEHOLD":
            return {
                ...state,
                totalHousehold : state.totalHousehold - action.payload
            }

        case "SUBTRACT_FROM_SELF":
            return {
                ...state,
                totalSelf : state.totalSelf - action.payload
            }

        case "SUBTRACT_FROM_TRANSPORTATION":
            return {
                ...state,
                totalTransportation : state.totalTransportation - action.payload
            }

        case "SUBTRACT_FROM_UTILITIES":
            return {
                ...state,
                totalUtilities : state.totalUtilities - action.payload
            }

        case "SUBTRACT_FROM_SURPLUS":
            return {
                ...state,
                totalSurplus : state.totalSurplus - action.payload
            }
        case "ADD_TO_DEBT":
            return {
                ...state,
                totalDebt : state.totalDebt + action.payload
            }
        
        case 'PURGE_OVERALL_BALANCE':
            console.log("Deleting overall balance")
            return {
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
    
        default:
            return state
    }
}