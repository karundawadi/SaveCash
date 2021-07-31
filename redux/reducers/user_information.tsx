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
        default:
            return state
    }
}

