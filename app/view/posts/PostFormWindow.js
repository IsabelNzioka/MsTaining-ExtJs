Ext.define('MsTraining.view.posts.PostFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'postformwindow',

    requires: ["MsTraining.view.posts.PostGridViewController"],
    controller: "postformcontroller",

    title: "Add A Post",
    height: 310,
    width: 490,
    bodyPadding: 10,
    autoShow: true,
    closable: true,
    modal: true,

    items:[{
       xtype: 'form',
       reference: 'postform',
       itemId: 'postform',
       layout: "anchor",
       jsonSubmit: true,

       defaults: {
        anchor: "95%"
       },
       items:[
   
           {
            //    allowBlank: true,
            //    readOnly: true,
               reference: 'postid',
               xtype:'textfield',
               fieldLabel: 'Post ID',
               name: 'id',
               emptyText: 'Post id',
               anchor: "90%"
           },
           {
               allowBlank: false,
               xtype: 'textfield',
               fieldLabel: 'User ID',
               name: 'userId',
               emptyText: 'user id',
             
           },
           {
               allowBlank: false,
               xtype: 'textfield',
               fieldLabel: 'Title',
               name: 'title',
               emptyText: 'title',
           
           },
           {
            allowBlank: true,
            xtype: 'datefield',
            fieldLabel: 'DOB',
            name: 'dateOfBirth',
            emptyText: 'Date of Birth',
            maxValue: Ext.Date.add(new Date(), Ext.Date.YEAR,-18) //above 18yrs
        },
        {
            allowBlank: true,
            xtype: 'datefield',
            fieldLabel: 'Booking',
            name: 'dateOfBooking',
            emptyText: 'Date of Booking',
            minValue: new Date(),
            maxValue: Ext.Date.add(new Date(), Ext.Date.MONTH, 2) // 2 months from now
        },
        
           {
               allowBlank: false,
               xtype: 'textareafield',
               fieldLabel: 'Body',
               name: 'body',
               emptyText: 'body',
               
           },
       ],
      
   
    buttons: [
        // { text: 'Cancel', handler: 'OnCancelClick' }, //close modal
        {
            text: 'Reset',
            disabled: false,
            handler: function() {
                this.up("form").getForm().reset(true);
            }
       },
        { 
            text: 'Save',
            // formBind: true,
            // disabled: true, //be enabled when form is valid
            listeners: {
                click: "onPostSave"
            }
         },
    ]
}]
})