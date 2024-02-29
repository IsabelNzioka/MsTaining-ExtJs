Ext.define("MsTraining.model.Person", {
    name: "Unknown",
    requires: ['MsTraining.util.Util'],
    init: function() {
        throw new Error('[' +  + ']')
    },


    constructor: function(name) {
        if(name) {
            this.name == name
        }
    },

    eat: function (foodType) {
        MsTraining.util.Util.logInfo(this.name + " is eating: " + foodType)
        // alert(this.name + " is eating: " + foodType)
    }
},
()=> {
    var bob = Ext.create("MsTraining.model.Person", "Bella");
    bob.eat("Salad")
})