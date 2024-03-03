Ext.define('MsTraining.view.todos.TodoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'todogrid1',
    store: {
        type: 'todos'
    },
    
    title: 'Todos',
    // width: 680,
    height: 600,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    columns: [
        {dataIndex: 'id', text: 'ID' },
        {dataIndex: 'title', text: 'TITLE' , flex: 2 },
        {dataIndex: 'userId', text: 'User Id' },
        {dataIndex: 'completed', text: 'Completed' },
    ],

    selModel: {
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable:true,
   
})











// Ext.define('MsTraining.view.todos.TodoGrid', {
//     extend: 'Ext.grid.Panel',
//     xtype: 'todogrid',
//     store: {
//         type: 'todos'
//     },
//     columns: [
//         {dataIndex: 'id', text: 'ID' },
//         {dataIndex: 'title', text: 'TITLE' , flex: 2 },
//         {dataIndex: 'userId', text: 'User Id' },
//         {dataIndex: 'completed', text: 'Completed' },
//     ],

//     selModel: {
//         mode: 'SINGLE'
//     },
//     bbar: {
//         xtype: 'pagingtoolbar',
//         displayInfo: true
//     },
//     scrollable:true,
//     height: 800
// })