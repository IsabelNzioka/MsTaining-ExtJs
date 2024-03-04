Ext.define('MsTraining.view.todos.TodoContainer', {
    extend: 'Ext.container.Container',
    xtype: 'todogrid',

    store: {
        type: 'todos'
    },

    // title: 'Todos',
    // width: 680,
    height: 600,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    viewModel: 'todoviewmodel',


    items: [{
        xtype: 'grid',
        bind:   '{alltodos}' ,
        title: 'All Todos',
        flex: 1,

        columns: [
        {dataIndex: 'id', text: 'ID' },
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
        {dataIndex: 'id', text: 'ID' },
        {dataIndex: 'title', text: 'TITLE' , flex: 2 },
        {dataIndex: 'userId', text: 'User Id' },
        // {dataIndex: 'completed', text: 'Completed' },
    ]
    }
]

})