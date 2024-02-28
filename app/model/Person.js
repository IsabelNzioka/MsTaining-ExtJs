Ext.define("MsTraining.model.Person", {
    name: "Bella",
    constructor: function(name) {
        if(name) {
            this.name == name
        }
    },

    eat: function (foodType) {
        alert(this.name + " is eating: " + foodType)
    }
},
()=> {
    var bob = Ext.create("MsTraining.model.Person");
    bob.eat("Salad")
})