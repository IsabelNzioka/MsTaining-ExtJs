Ext.define("MsTraining.view.posts.PostGridViewController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.postgridviewcontroller',

    onAddPostClicked: function(btn, e, eOpts) {
        console.log(btn.getText() + " was clicked");

        var wd = Ext.create({
            xtype: 'postformwindow',

        });
        wd.show();
    },

    // onPostSave: function() {
    //     var form = this.getView().down("form").getForm();
    //     console.log("Saving data to: https://jsonplaceholder.typicode.com/posts");
    //     console.log("Data: " + form.getValues())
    //     form.reset(true)
    // }

})