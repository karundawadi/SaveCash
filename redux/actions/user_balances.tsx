// This subtracts from the total avaialble balance 
export const changeUserTotalBalance = (amount:number) => {
    return {
        type : 'SUBTRACT_FROM_TOTAL',
        payload : amount
    }
}

// Add to the total balance - Will be labeled misallenous 
export const addUserBalance = (amount:number) => {
    return {
        type: 'ADD_TO_TOTAL',
        payload: amount
    }
}

// Computes available balance 
export const computerAvalBalance = (amount:number)=>{
    return{
        type:'COMPUTE_TOTAL_BALANCE',
        payload:amount
    }
}

// Updates total amount left in each category

// Household Budget 
export const computeRemainingHouseHoldBudget = (expense:number) => {
    return{
        type:'COMPUTE_HOUSEHOLD_BUDGET',
        payload: expense,
    }
}

// Entertainment Budget 
export const computeRemainingEntertainmentBudget = (expense:number) => {
    return{
        type:'COMPUTE_ENTERTAINMENT_BUDGET',
        payload: expense,
    }
}

// Self Budget 
export const computeRemainingSelfBudget = (expense:number) => {
    return{
        type:'COMPUTE_SELF_BUDGET',
        payload: expense,
    }
}

// Transportation Budget 
export const computeRemainingTransportationBudget = (expense:number) => {
    return{
        type:'COMPUTE_TRANSPORTATION_BUDGET',
        payload: expense,
    }
}

// Utilities Budget 
export const computeRemainingUtilitesBudget = (expense:number) => {
    return{
        type:'COMPUTE_UTILITIES_BUDGET',
        payload: expense,
    }
}
