function createObject() {
    // Create a new object
    var me = {

        // Assign constants
        name: "Kyle",
        height: 187.96,

        // Assign function
        aboutYourself: function() {
            console.log("I am " + this.name + ". I am " + this.height + " cm in height");
        }
    }

    // Return what is created
    return me;
}