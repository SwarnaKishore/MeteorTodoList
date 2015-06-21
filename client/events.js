Template.addTodo.events({
   'submit form': function(event){
        event.preventDefault();
        var todoValue = event.target.todoValue.value;
        var currentUser = Meteor.userId();
        var currentList = this._id;
        Todos.insert({
            title: todoValue,
            completed: false,
            createdAt: new Date(),
            createdBy: currentUser,
            listId: currentList
        });
        event.target.todoValue.value = "";
    }
});


Template.todoItem.events({
    'click .delete-todo': function(event){
    var confirm = window.confirm("Delete this task?");
    if(confirm){
        Todos.remove({ _id: this._id });
    }
},


'keyup .todo-value': function(event){
    var todoValue = event.target.value;
    var documentId = this._id;
    Todos.update({_id: documentId}, {$set: {title: todoValue}});

},


'change [type=checkbox]': function(){
    var isCompleted = this.completed;
    if(isCompleted){
        Todos.update({_id: this._id}, {$set: {completed: false}});
    } else {
        Todos.update({_id: this._id}, {$set: {completed: true}});
    }
}


});



Template.addList.events({
 'submit form': function(event){
        event.preventDefault();
        var listName = event.target.listName.value;
        var currentUser = Meteor.userId();
        Lists.insert({
            name: listName,
            createdBy: currentUser
        }, function(error, document){
            Router.go('listPage', {_id: document});
        });
        event.target.listName.value = "";
    }
});