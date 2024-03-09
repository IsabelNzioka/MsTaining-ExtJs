Ext.define('MsTraining.view.todos.TodoForm', {
    extend: 'Ext.window.Window',
    xtype: 'todoform',

    // controller: "todogridcontroller",
    controller: 'todoformcontroller',

    height: 250,
    width: 520,
    layout: 'fit',

    // title: "Add A Post",
    height: 310,
    width: 490,
    bodyPadding: 10,
    autoShow: true,
    closable: true,
    modal: true,

    viewModel: {
        data: {
            newTitle: null,  //default title
            record: null
        }
    },
    bind: {
        title: "{newTitle}"
    },

    items: [{
        xtype: 'form',
        layout: 'form',
        reference:'todoform',
        jsonSubmit: true,
        defaultType: 'textfield',
        items:[{
            fieldLabel:  'Todo ID',
            name: '_id',
            reference: 'todoIdField',
            bind: {
                value: '{record._id}'
            }
        },
        {
            fieldLabel:  'Title',
            name: 'title',
            allowBlank: false,
            minLength: 10,
            bind: {
                value: '{record.title}'
            }
        },
        {
            fieldLabel:  'Completed',
            xtype: 'checkbox',
            boxLabel: 'Completed',
            name: 'Completed',
            bind: {
                value: '{record.completed}'
            }
        },
        {
            fieldLabel:  'User ID',
            name: 'userId',
            bind: {
                value: '{record.userId}'
            }
        },
        
    ],
    buttons: [
        {text: 'Cancel'},
        {
            text: 'Save', 
            formBind: true, //check if the form is valid
            handler: 'onSave'
         }
    ]
    }],

    // buttons: [
    //     {text: 'Cancel'},
    //     {
    //         text: 'Save', 
    //         formBind: true //check if the form is valid
    //      }
    // ]

})