Ext.define('MsTraining.view.todos.TodoViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.todoviewmodel',

    data: {
        isCompleted: true
    },
    stores: {
        alltodos: {
            model: 'MsTraining.model.Todo',
            autoLoad: true,
        },
        completedtodos: {
            source: '{alltodos}',
            filters: [{
                property: 'completed',
                value: '{isCompleted}',
                operator: '=='
            }],
            sorters: [{
                property: 'completed',
            }]
        }
    }

})