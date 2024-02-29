Ext.define('MsTraining.view.todos.TodoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'todogrid',
    store: {
        type: 'todos'
    },
    columns: [
        {dataIndex: 'id', text: 'ID' },
        {dataIndex: 'title', text: 'TITLE' , flex: 2 },
        {dataIndex: 'userId', text: 'User Id' },
        {dataIndex: 'completed', text: 'Completed' },
    ],

    selModel: {
        selType: 'checkboxmodel'
    }
})