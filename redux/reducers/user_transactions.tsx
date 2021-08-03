const monthlyTransactions = {
    household:[],
    self:[],
    transportation:[],
    utilities:[],
    entertainment:[],
}

export const allTransactions = (state = monthlyTransactions, action:any) => {
    switch (action.type){
        case 'ADD_TO_HOUSEHOLD':
            return [
                {
                    ... monthlyTransactions,
                    household: [
                        ...monthlyTransactions.household,
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