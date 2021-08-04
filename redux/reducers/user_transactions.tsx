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
        case 'ADD_TO_HOUSEHOLD':
            return [
                {
                    ... overallTransactions,
                    household: [
                        ...overallTransactions.household,
                        {
                            amount : action.amount,
                            description: action.description,
                            date: action.date,
                        }
                    ]
                }
            ]

        case 'ADD_TO_SELF_TRANSACTION':
            return [
                {
                    ... overallTransactions,
                    self: [
                        ...overallTransactions.household,
                        {
                            amount : action.amount,
                            description: action.description,
                            date: action.date,
                        }
                    ]
                }
            ]
        
        case 'ADD_TO_TRANSPORTATION_TRANSACTION':
            return [
                {
                    ... overallTransactions,
                    transportation: [
                        ...overallTransactions.household,
                        {
                            amount : action.amount,
                            description: action.description,
                            date: action.date,
                        }
                    ]
                }
            ]
        case 'ADD_TO_UTILITIES_TRANSACTION':
            return [
                {
                    ... overallTransactions,
                    utilities: [
                        ...overallTransactions.household,
                        {
                            amount : action.amount,
                            description: action.description,
                            date: action.date,
                        }
                    ]
                }
            ]

        case 'ADD_TO_ENTERTAINMENT_TRANSACTION':
            return [
                {
                    ... overallTransactions,
                    entertainment: [
                        ...overallTransactions.household,
                        {
                            amount : action.amount,
                            description: action.description,
                            date: action.date,
                        }
                    ]
                }
            ]

        default:
            return state
    }
} 