export const setTotalOverall = (total:string) => {
    return {
        type : 'SET_TOTAL',
        payload : total
    }
}

export const setIncomeOverall = (total:string) => {
    return {
        type : 'SET_INCOME',
        payload : total
    }
}

export const setEntertainmentOverall = (total:string) => {
    return {
        type : 'SET_ENTERTAINEMENT',
        payload : total
    }
}

export const setHouseHoldOverall = (total:string) => {
    return {
        type : 'SET_HOUSEHOLD',
        payload : total
    }
}

export const setSelfOverall = (total:string) => {
    return {
        type : 'SET_SELF',
        payload : total
    }
}

export const setTransportationOverall = (total:string) => {
    return {
        type : 'SET_TRANSPORTATION',
        payload : total
    }
}

export const setUtilitesOverall = (total:string) => {
    return {
        type : 'SET_UTILITIES',
        payload : total
    }
}

export const setSurplusOverall = (total:string) => {
    return {
        type : 'SET_SURPLUS',
        payload : total
    }
}

export const setDebtOverall = (total:string) => {
    return {
        type : 'SET_DEBT',
        payload : total
    }
}

// Will hardly be ever used 
export const subtractFromTotalOverall = (total:string) => {
    return {
        type : 'SUBTRACT_FROM_TOTAL',
        payload : total
    }
}

// Hardly will be used 
export const subtractFromIncomeOverall = (total:string) => {
    return {
        type : 'SUBTRACT_FROM_INCOME',
        payload : total
    }
}

export const subtractFromEntertainmentOverall = (total:string) => {
    return {
        type : 'SUBTRACT_FROM_ENTERTAINEMENT',
        payload : total
    }
}

export const subtractFromtHouseHoldOverall = (total:string) => {
    return {
        type : 'SUBTRACT_FROM_HOUSEHOLD',
        payload : total
    }
}

export const subtractFromSelfOverall = (total:string) => {
    return {
        type : 'SUBTRACT_FROM_SELF',
        payload : total
    }
}

export const subtractFromTransportationOverall = (total:string) => {
    return {
        type : 'SUBTRACT_FROM_TRANSPORTATION',
        payload : total
    }
}

export const subtractFromUtilitesOverall = (total:string) => {
    return {
        type : 'SUBTRACT_FROM_UTILITIES',
        payload : total
    }
}

export const subtractFromSurplusOverall = (total:string) => {
    return {
        type : 'SUBTRACT_FROM_SURPLUS',
        payload : total
    }
}

export const subtractFromDebtOverall = (total:string) => {
    return {
        type : 'ADD_TO_DEBT',
        payload : total
    }
}


export const purgeAll = (details:any) => {
    return{
        type: 'PURGE_OVERALL_BALANCE',
    }
}