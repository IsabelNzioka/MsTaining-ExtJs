Ext.define("MsTraining.", {
   extend:'Ext.app.ViewController',
   alias: 'controller.postformcontroller',

   init: function() {

   },

  
   onClearClick() {

   },

   onPostSave: function() {
        let window = this.getView()
            let  references = window.getReferences();
            let form = references['postform'].getForm();

            // console.log(references);
            if(form.isValid()) {
                // send ajax request to submit
                form.submit({
                    method: 'POST',
                    url: 'https://jsonplaceholder.typicode.com/posts',
                    success: function(form, action) {
                        // add the recorf to the post store -> post grid
                        Ext.Msg.alert('Success', action.result.msg)

                    },
                    failure: function(form, action) {
                        Ext.Msg.alert('Failed', action.result.msg)
                    }
                })
            } else {
                Ext.Msg.alert('Invalid Data','Please coreect form errors')
            }
        



    // var form = this.getView().down("form").getForm();
    // console.log("Saving data to: https://jsonplaceholder.typicode.com/posts");
    // console.log("Data: " + form.getValues())
    // form.reset(true)
}
})