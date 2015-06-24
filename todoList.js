Todos = new Meteor.Collection('todos');

Lists = new Meteor.Collection('lists');

Todos.initEasySearch(['title'], {
    'limit' : 6,
    'use' : 'mongo-db'
});
