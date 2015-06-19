 Template.todosList.helpers({
    'todo': function(){
        var currentList = this._id;
        var currentUser = Meteor.userId();
        return Todos.find({ listId: currentList, createdBy: currentUser }, {sort: {createdAt: -1}})
    }
});



 Template.todoItem.helpers({
    'checked': function(){
        var isCompleted = this.completed;
        if(isCompleted){
            return "checked";
        } else {
            return "";
        }
    }
});

Template.todosCount.helpers({
    'totalTodos': function(){
        var currentList = this._id;
        return Todos.find({listId: currentList}).count();
    },
    'completedTodos': function(){
        var currentList = this._id;
        return Todos.find({listId: currentList, checked: true}).count();
    }
});



Template.lists.helpers({
    'list': function(){
        var currentUser = Meteor.userId();
        return Lists.find({ createdBy: currentUser }, {sort: {name: 1}})
    }
});