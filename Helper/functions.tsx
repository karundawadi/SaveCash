// Need to make it more verbose 
// Maintaining a strict test case 
export const compareStates = (olderState : any, newerState :any) => {
    if (olderState.firstName === newerState.firstName) {
        if (olderState.lastName === newerState.lastName){
            if (olderState.monthltyIncome === newerState.monthltyIncome){
                if (olderState.household === newerState.household){
                    if (olderState.houseHoldBudget === newerState.houseHoldBudget){
                        if (olderState.entertainmentBudget === newerState.entertainmentBudget){
                            if (olderState.transportationBudget === newerState.transportationBudget){
                                if (olderState.utiltiesBudget === newerState.utiltiesBudget){
                                    if (olderState.selfBudget === newerState.selfBudget){
                                        return true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false
}

// This is to create a hash map for expesneInformation or actions hashmap 
const expenseInformation = (expenseAmount:number,expenseDescription:string, expenseCategory : string, expenseDate: Date, type:string)=>{
    return {
        amount : expenseAmount,
        description: expenseDescription,
        date: expenseDate,
        type : type, 
    }
}
