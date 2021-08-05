const initialState = {
    firstName : '',
    lastName : '',
    monthltyIncome : 0.00,
    houseHoldBudget : 0.00,
    entertainmentBudget : 0.00,
    transportationBudget : 0.00,
    utiltiesBudget : 0.00,
    selfBudget : 0.00,
}

export const changeUserInfo = (state = initialState, action:any) => {
    switch (action.type){
        case 'SET_FIRST_NAME':
            return {
                ...state, 
                firstName : action.payload
            }
        case 'SET_LAST_NAME':
            return {
                ...state, 
                lastName : action.payload
            }
        case 'SET_MONTHLY_INCOME':
            return {
                ...state, 
                monthltyIncome : action.payload
            }
        case 'SET_ENTERTAINMENT_BUDGET':
            return {
                ...state, 
                entertainmentBudget : action.payload
            }
        case 'SET_HOUSEHOLD_BUDGET':
            return {
                ...state, 
                houseHoldBudget : action.payload
            }
        case 'SET_TRANSPORTATION_BUDGET':
            return {
                ...state, 
                transportationBudget : action.payload
            }
        case 'SET_UTILITIES_BUDGET':
            return {
                ...state, 
                utiltiesBudget : action.payload
            }
        case 'SET_SELF_BUDGET':
            return {
                ...state, 
                selfBudget : action.payload
            }
        case 'PURGE_USER_DETAILS':
            return initialState

        default:
            return state
    }
}

