Ext.define("MsTraining.store.Transactions",
{
    // 
    extend: "Ext.data.Store",
  
    alias: 'store.transactions',
    model:'MsTraining.model.Transaction',

    data: [
        { account: 'Cash', debit: 224250000, credit: 0 },
        { account: 'Bank', debit: 0, credit: 40615000 },
        { account: 'Capital', debit: 0, credit: 250000000 },
        { account: 'Motor Vehicle', debit: 21000000, credit: 0 },
        { account: 'CIC Investment', debit: 10000000, credit: 0 },
        { account: 'Treasury Bonds', debit: 10000000, credit: 0 },
        { account: 'Safaricom Ordinary Shares', debit: 40000000, credit: 0 },
        { account: 'KCB Preference Shares', debit: 23750000, credit: 0 },
        { account: 'Dividend Income', debit: 0, credit: 95000000 },
        { account: 'Account Payable', debit: 0, credit: 2500000 },
        { account: 'Electricity Expense', debit: 100000, credit: 0 },
        { account: 'Rent Expense', debit: 2500000, credit: 0 },
        { account: 'Water Expense', debit: 15000, credit: 0 },
        { account: 'Security Service Expense', debit: 70000, credit: 0 },
        { account: 'Wages', debit: 2000000, credit: 0 },
        { account: 'Training Expense', debit: 2000000, credit: 0 },
        { account: 'Staff Retreat Expense', debit: 1000000, credit: 0 },
        { account: 'Laptops', debit: 180000, credit: 0 },
        { account: 'Government Rate Expense', debit: 50000, credit: 0 },
        { account: 'RBA Subscription Expense', debit: 200000, credit: 0 },
        { account: 'Housing Units', debit: 50000000, credit: 0 },
        { account: 'Pension Management Software', debit: 2000000, credit: 0 },
        { account: 'Rent Income', debit: 0, credit: 1500000 },
        { account: 'Directors Fee Expense', debit: 500000, credit: 0 }
    ]

})