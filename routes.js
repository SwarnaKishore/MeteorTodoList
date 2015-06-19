Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', function(){
    this.render('main');
}, {
    name: 'main'    
});


Router.route('/list/:_id', function(){
    this.render('listPage', {
        data: function(){
            var currentList = this.params._id;
            return Lists.findOne({ _id: currentList })
        }
    });
}, {
    name: 'listPage'    
});