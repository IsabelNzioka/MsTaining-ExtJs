Ext.define("MsTraining.model.Album", {

    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        'id','userId', 'title'
    ],

    proxy: {
        type: 'rest',
        url: 'https://jsonplaceholder.typicode.com/albums',
        reader: {
            type: 'json',
        }
    }
    
})