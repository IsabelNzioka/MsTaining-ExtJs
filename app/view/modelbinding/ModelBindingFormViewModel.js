Ext.define('MsTraining.view.modelbinding.ModelBindingFormViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.modelbindingformviewmodel',


    data: {
        firstName: null,
        lastName: null
    },

    formulas: {
        name: function(get) { //data
          
            let firstName = get('firstName');
            let lastName = get('lastName');
            return (firstName && lastName) ? (firstName + ' ' + lastName) : (firstName || lastName || '');
        }
    }

})