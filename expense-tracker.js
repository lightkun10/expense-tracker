const account = {
  name: 'Pandu Panda',
  income: [],
  expenses: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    })
  }, 
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount
    })
  }, 
  getAccountSummary: function () {
    let totalExpenses = 0
    let totalIncome = 0
    this.expenses.forEach(function(expense, index){
      return totalExpenses += expense.amount
    })

    this.income.forEach(function(income, index){
      return totalIncome += income.amount
    })
    let balance = totalIncome - totalExpenses

    return `${this.name} has balance of Rp.${balance}. Rp.${totalIncome} in income. Rp.${totalExpenses} in expenses`
  }
} 

account.addExpense('Gym Membership', 120000)
account.addExpense('Eat', 20000)
account.addExpense('Dzakat', 5000)

account.addIncome('Clean dishes', 200000)
account.addIncome('Clean the house', 100000)
console.log(account.getAccountSummary())