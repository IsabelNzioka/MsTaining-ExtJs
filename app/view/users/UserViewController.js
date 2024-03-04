Ext.define("MsTraining.view.users.UserViewController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userviewcontroller',


    onUserSelectionChange: function(selModel, selectedRecords) {
        console.log(selectedRecords);
    
        if (selectedRecords.data._id) {
            var selectedUserId = selectedRecords.data._id;

            var viewModel = this.getViewModel();
            var userTodosStore = viewModel.getStore('userTodos');
    
            userTodosStore.clearFilter(); 
            userTodosStore.filter('userId', selectedUserId);
        }
    }
 
})