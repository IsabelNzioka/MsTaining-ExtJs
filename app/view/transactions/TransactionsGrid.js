Ext.define('MsTraining.view.transactions.TransactionsGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'transactionsgrid',
    with: 700,

    title: 'Kenya Power Trial Balance as at 31st January 2019',
    store: {
        type: 'transactions'
    },

    features: [{
        ftype: 'summary' 
    }],
   style: {
        border: '5px solid #ccc',
        padding: '5px 2rem'
     
   },
    columns: [
        { text: 'Accounts', dataIndex: 'account', flex: 1 },
        { text: 'Dr', dataIndex: 'debit',summaryType: 'sum', flex: 1,renderer: function(value, metaData) {
            if (value >= 40000000) {
                metaData.style = 'color: blue;'; 
            }
            return value;
        } ,
        summaryRenderer: function(value, summaryData, dataIndex) {
            return Ext.String.format( value,);
        }
     },
        { text: 'Cr', dataIndex: 'credit',summaryType: 'sum', flex: 1,
        renderer: function(value, metaData) {
            if (value >= 40000000) {
                metaData.style = 'color: blue;'; 
            }
            return value;
        } ,
        summaryRenderer: function(value, summaryData, dataIndex) {
            return Ext.String.format( value,);
        }
     }
    ],

    // listeners: {
    //     viewready: function(grid) {
          
    //     }
    // }

})