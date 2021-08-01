export const changeFirstName = (firstName:string) => {
    return {
        type : 'SET_FIRST_NAME',
        payload : firstName
    }
}

export const changeLastName = (lastName:string) => {
    return {
        type : 'SET_LAST_NAME',
        payload : lastName
    }
}

export const changeMonthlyIncome = (monthltyIncome:number) => {
    return {
        type : 'SET_MONTHLY_INCOME',
        payload : monthltyIncome
    }
}

export const changeHouseHoldIncome = (houseHoldBudget:number) => {
    return{
        type: 'SET_HOUSEHOLD_BUDGET',
        payload: houseHoldBudget
    }
}

export const changeEntertainmentBudget = (entertainmentBudget:number) => {
    return{
        type: 'SET_ENTERTAINMENT_BUDGET',
        payload: entertainmentBudget
    }
}

export const changeTransportationBudget = (transportationBudget:number) => {
    return{
        type: 'SET_TRANSPORTATION_BUDGET',
        payload: transportationBudget
    }
}

export const changeUtilitiesBudget = (utiltiesBudget:number) => {
    return{
        type: 'SET_UTILITIES_BUDGET',
        payload: utiltiesBudget
    }
}

export const changeSelfBudget = (selfBudget:number) => {
    return{
        type: 'SET_SELF_BUDGET',
        payload: selfBudget
    }
}
