angular.module('ContactAppTodo',[])
  .service('contactServiceTodo', function()  {
    var self = this

    self.contacts = [
      { title: 'Thunyaporn' },
      { title: 'Chutiporn' },
    ]

    self.list = function (){
      return self.contacts
    }

          self.add = function (contact){
          self.contacts.push(contact)
  }

  })

  .controller('ListTextTitle', function ($scope, contactServiceTodo) {

    $scope.newContacts = {

      title: '',
    };

    $scope.contacts = contactServiceTodo.list()


})


  .controller('AddTextTitle',function($scope,contactServiceTodo){

    $scope.save = function(){
      var contact = {
        title: $scope.title
      }


    if( contact.title !== ' '  ||  contact.title !== NULL ){
      contactServiceTodo.add(contact);
      resetFrom();
      }

    function resetFrom() {

      $scope.title= ' ';

    }
  }

});
