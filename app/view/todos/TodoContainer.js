Ext.define('MsTraining.view.todos.TodoContainer', {
    extend: 'Ext.container.Container',
    xtype: 'todogrid',

    store: {
        type: 'todos'
    },
    viewModel: 'todoviewmodel',

    // title: 'Todos',
    // width: 680,
    height: 600,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

   


    items: [{
        xtype: 'grid',
        bind:   '{alltodos}' ,
        title: 'All Todos',
        flex: 1,

        columns: [
        {dataIndex: '_id', text: 'ID' },
        {dataIndex: 'title', text: 'TITLE' , flex: 2 },
        {dataIndex: 'userId', text: 'User Id' },
        {dataIndex: 'completed', text: 'Completed' },
    ]
    },
    {
        xtype: 'grid',
        bind: '{completedtodos}',
        title: 'Completed',
        flex: 1,

        columns: [
        {dataIndex: '_id', text: 'ID' },
        {dataIndex: 'title', text: 'TITLE' , flex: 2 },
        {dataIndex: 'userId', text: 'User Id' },
        {dataIndex: 'completed', text: 'Completed' },
    ]
    }
]

})