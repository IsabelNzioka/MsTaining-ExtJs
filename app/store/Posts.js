Ext.define("MsTraining.store.Posts",
{
    // 
    extend: "Ext.data.Store",
    // 
    alias: 'store.posts',
    model:'MsTraining.model.Post',
    requires: ['MsTraining.model.Post'],
    autoLoad: true,
    pageSize: 25,
    sorters: ['id', 'title'],
    // filters: {
    //    property: 'userId',
    //    value: 10 
    // }
    
        // proxy: {
        //     // type: 'ajax',
        //     type: 'rest',
        //     url: 'https://jsonplaceholder.typicode.com/posts',
        //     reader: {
        //         type: 'json',
        //     }
        // }
    
   
})