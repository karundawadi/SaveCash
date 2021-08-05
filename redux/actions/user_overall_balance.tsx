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

export const purgeAll = (details:any) => {
    return{
        type: 'PURGE_OVERALL_BALANCE',
    }
}