export const addHouseHoldTransaction = (details:any) => {
    return{
        type: 'ADD_TO_HOUSEHOLD_TRANSACTION',
        amount : details.amount,
        description: details.description,
        date: details.date,
    }
}

export const addSelfTransaction = (details:any) => {
    return{
        type: 'ADD_TO_SELF_TRANSACTION',
        amount : details.amount,
        description: details.description,
        date: details.date,
    }
}


export const addTransportationTransaction = (details:any) => {
    return{
        type: 'ADD_TO_TRANSPORTATION_TRANSACTION',
        amount : details.amount,
        description: details.description,
        date: details.date,
    }
}


export const addUtilitesTransaction = (details:any) => {
    return{
        type: 'ADD_TO_UTILITIES_TRANSACTION',
        amount : details.amount,
        description: details.description,
        date: details.date,
    }
}

export const addEntertainmentBudget = (details:any) => {
    return{
        type: 'ADD_TO_ENTERTAINMENT_TRANSACTION',
        amount : details.amount,
        description: details.description,
        date: details.date,
    }
}

export const purgeAll = (details:any) => {
    return{
        type: 'PURGE_TRANSACTIONS',
    }
}