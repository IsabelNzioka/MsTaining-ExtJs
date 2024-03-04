Ext.define("MsTraining.model.Todo", {

    extend: 'Ext.data.Model',
    idProperty: 'id',
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
        url: 'https://jsonplaceholder.typicode.com/todos',
        reader: {
            type: 'json',
        }
    }
    
})