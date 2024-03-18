Ext.define("MsTraining.model.Transaction", {

    extend: 'Ext.data.Model',
    idProperty: '_id',
    fields: [
        {name: 'account', type: 'string'},
        {name: 'debit', type: 'float'},
        {name: 'credit', type: 'float'}
    ]
    })