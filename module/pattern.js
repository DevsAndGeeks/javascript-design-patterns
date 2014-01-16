/**
 * Created with JetBrains PhpStorm.
 * User: workzentre
 * Date: 1/15/14
 * Time: 8:03 AM
 * To change this template use File | Settings | File Templates.
 */

var MyClass = (function(){
//  Variable privada
  var privateVar = "Privado!";
//  Método privado
  var privateMethod = function(){
    console.log("Un método privado!");
  };


  return {
    publicVar : "Publico!",
    foo: function(){ console.log('Otro método público!') },
    publicMethod : function(){
      console.log("Esta es un método público");
      console.log("Puede acceder propiedades públicas");
      console.log(this.publicVar);
      console.log("Pueden acceder propiedades privadas");
      console.log(privateVar);
      console.log("Pueden acceder métodos privados");
      console.log(privateMethod());
      console.log("Pueden acceder, otros métodos públicos");
      console.log(this.foo());
    }
  }

})();

//var myObject = new MyClass();
//console.log(MyClass.privateVar); // undefined es privado
//MyClass.privateMethod(); // TypeError: MyClass.privateMethod is not a function
console.log(MyClass.publicVar); // Publico!
MyClass.foo(); // Otro metodo publico
MyClass.publicMethod(); // log de todo lo que puede acceder