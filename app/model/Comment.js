Ext.define("MsTraining.model.Comment", {

    extend: 'Ext.data.Model',
    requires: ['MsTraining.model.Post'],
    // Associations
    fields: [
        {name: 'postId', reference: 'Post', type: 'int'}, 'id', 'name', 'body'
    ],

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/comments',
        reader: {
            type: 'json'
        }
    },

    validators: [
        {
            postId: [
                
            ]
        }
    ]
    

}, function() {
    // Traverse
    MsTraining.model.Post.load(1, {  
    callback: function(post) {
        console.log('Post: ' + post.get('title'));
           post.comments(function(comments) {   
                  comments.each(function(comment) {           
                        //    console.log(comment.get('name'));           
                                  });  }); }
                                
                                });

     //   Inverse relationship
   MsTraining.model.Comment.load(1, {
    callback: function(comment) {
           comment.getPost(function(post) {   
            // console.log('Got post from: ' + post.get('title'));
                    }); } 
   })                         
})