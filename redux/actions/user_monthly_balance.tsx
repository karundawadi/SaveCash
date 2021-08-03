export const setTotalForMonth = (total:string) => {
    return {
        type : 'SET_TOTAL_FOR_MONTH',
        payload : total
    }
}

export const setEntertainment = (total:string) => {
    return {
        type : 'SET_ENTERTAINMENT_FOR_MONTH',
        payload : total
    }
}

export const setHouseHold = (total:string) => {
    return {
        type : 'SET_HOUSEHOLD_FOR_MONTH',
        payload : total
    }
}

export const setSelf = (total:string) => {
    return {
        type : 'SET_SELF_FOR_MONTH',
        payload : total
    }
}

export const setTransportation = (total:string) => {
    return {
        type : 'SET_TRANSPORTATION_FOR_MONTH',
        payload : total
    }
}

export const setUtilites = (total:string) => {
    return {
        type : 'SET_UTILITIES_FOR_MONTH',
        payload : total
    }
}

export const setDebt = (total:string) => {
    return {
        type : 'SET_DEBT_FOR_MONTH',
        payload : total
    }
}

export const setSurplus = (total:string) => {
    return {
        type : 'SET_SURPLUS_FOR_MONTH',
        payload : total
    }
}