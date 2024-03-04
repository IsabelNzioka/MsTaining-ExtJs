Ext.define('MsTraining.view.users.TUserViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.userviewmodel',
    stores: {
        users: {
            model: 'MsTraining.model.User',
            autoLoad: true,
            
        },
        userTodos: {
            model: 'MsTraining.model.Todo',
            autoLoad: true,
           filters: [] 
        }
    },
    
    
});
