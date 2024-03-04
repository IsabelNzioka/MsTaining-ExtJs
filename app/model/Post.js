Ext.define("MsTraining.model.Post", {

    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        'id','userId', 'title', 'body'
    ],

    proxy: {
        // type: 'ajax',
        type: 'rest',
        url: 'http://localhost:3000/posts',
        reader: {
            type: 'json',
            rootProperty: 'rows',
            totalProperty: 'totalCount'
        }
    }
    
})