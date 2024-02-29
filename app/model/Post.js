Ext.define("MsTraining.model.Post", {

    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        'id','userId', 'title', 'body'
    ],

    proxy: {
        // type: 'ajax',
        type: 'rest',
        url: 'https://jsonplaceholder.typicode.com/posts',
        reader: {
            type: 'json',
        }
    }
    
})