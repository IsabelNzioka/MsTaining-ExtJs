Ext.define("MsTraining.model.Comment", {

    extend: 'Ext.data.Model',
    requires: ['MsTraining.model.Post'],
    fields: [
        {name: 'postId', reference: 'Post', type: 'int'}, 'id', 'name', 'body'
    ],

    proxy: {
        type: 'rest',
        url: 'https://jsonplaceholder.typicode.com/comments',
        reader: {
            type: 'json'
        }
    }
    
})