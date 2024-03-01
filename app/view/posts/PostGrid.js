Ext.define('MsTraining.view.posts.PostGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'postgrid',
    controller: "postgridviewcontroller",
    
    store: {
        type: 'posts'
    },
    tbar:[{
        text: 'Add Post',
        listeners: {
            click: 'onAddPostClicked'
        }
    }],
    columns: [
        {dataIndex: 'id', text: 'ID' },
        {dataIndex: 'title', text: 'TITLE' , flex: 1},
       
        {dataIndex: 'body', text: 'BODY', flex: 2 , sortable: false},
        {dataIndex: 'userId', text: 'User Id'},
        // {dataIndex: 'userId', text: 'User Id', hidden: true },
    ],

    selModel: {
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable:true,
    height: 800
})

