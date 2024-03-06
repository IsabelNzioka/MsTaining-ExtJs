Ext.define("MsTraining.model.Todo", {

    extend: 'Ext.data.Model',
    idProperty: '_id',
    fields: [
        '_id', 'userId', 'title', 'completed', {
            name: 'user',
            reference: {
                type: 'User',
                inverse: {
                    // role: 'todos',
                    autoLoad: false
                }
            }
        }
    ],

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/todos',
        reader: {
            type: 'json',
            rootProperty: 'rows',
            totalProperty: 'totalCount'
        }
    }
    
})