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



  .controller('AddTextTitle',function($scope,contactServiceTodo){
    $scope.save = function(){
      var contact = {

        title: $scope.title

      }


      contact.title = $scope.title;

if( contact.title  !== " "){
  contactServiceTodo.add(contact);
}

      resetFrom();
    }

    function resetFrom() {

      $scope.title=' ';

    }

});
