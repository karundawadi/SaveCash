const overallTransactions = {
    household:[],
    self:[],
    transportation:[],
    utilities:[],
    entertainment:[],
}

// Creating only setters here logic will be written later 
export const allTransactions = (state = overallTransactions, action:any) => {
    switch (action.type){
        case 'ADD_TO_HOUSEHOLD_TRANSACTION':
            return {
                    ...state,
                    household: [
                        ...state.household,
                        {
                            amount : action.amount,
                            description: action.description,
                            date: action.date,
                        }
                    ]
                }

        case 'ADD_TO_SELF_TRANSACTION':
            return {
                    ...state,
                    self: [
                        ...state.self,
                        {
                            amount : action.amount,
                            description: action.description,
                            date: action.date,
                        }
                    ]
                }
            
        
        case 'ADD_TO_TRANSPORTATION_TRANSACTION':
            return {
                    ...state,
                    transportation: [
                        ...state.transportation,
                        {
                            amount : action.amount,
                            description: action.description,
                            date: action.date,
                        }
                    ]
                }
            
        case 'ADD_TO_UTILITIES_TRANSACTION':
            return {
                    ...state,
                    utilities: [
                        ...state.utilities,
                        {
                            amount : action.amount,
                            description: action.description,
                            date: action.date,
                        }
                    ]
                }
            

        case 'ADD_TO_ENTERTAINMENT_TRANSACTION':
            return {
                    ...state,
                    entertainment: [
                        ...state.entertainment,
                        {
                            amount : action.amount,
                            description: action.description,
                            date: action.date,
                        }
                    ]
                }
        case 'PURGE_TRANSACTIONS':
            return overallTransactions

        default:
            return state
    }
} 