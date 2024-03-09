Ext.define('MsTraining.view.todos.TodoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'todosgrid',
    reference: 'todosgrid',
    store: {
        type: 'todos'
    },

    controller: 'todogridcontroller',

    // title: 'Todos',
    // width: 680,
    height: 600,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    columns: [
        {dataIndex: '_id', text: 'ID' },
        {dataIndex: 'title', text: 'TITLE' , flex: 2 },
        {dataIndex: 'userId', text: 'User Id' },
        {dataIndex: 'completed', text: 'Completed' },
    ],

    selModel: {
        selType:'checkboxmodel',
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },

    tbar: [
        {
            text: 'Add Todo',
            handler: 'onAddTodo'

        },{
            text: 'Add View',
            handler: 'onViewTodo' ,
            bind: {
                disabled: '{!todosgrid.selection}'
            }
        }
    ],
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