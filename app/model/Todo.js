Ext.define("MsTraining.model.Todo", {

    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        'id','userId', 'title', 'completed'
    ],

    proxy: {
        type: 'rest',
        url: 'https://jsonplaceholder.typicode.com/todos',
        reader: {
            type: 'json',
        }
    }
    
})