/**
 * Created with JetBrains PhpStorm.
 * User: workzentre
 * Date: 1/15/14
 * Time: 8:03 AM
 * To change this template use File | Settings | File Templates.
 */


var singleton1 = {
  id : 1,
  nombre : "Objeto Singleton"
}

//var objeto = new singleton1; TypeError: singleton is not a constructor

var Singleton = (function(){
  var instance = null;
  var init = function(id,nombre){
    return {
      id  : id,
      nombre : nombre,
      display : function(){
      var container = document.createElement('div');
      $(container).addClass('col-md-12');
      $(container).html('El id del objeto es: '+this.id+' y su nombre es: '+this.nombre);

      $('#output').append(container);
      }
    }
  };

  return {
    getInstance : function(id,nombre){
      if(!instance){
        instance = init(id,nombre);
      }
      return instance;
    }
  }

})();

var singleton = Singleton.getInstance(15,"Un Objeto");
singleton.display();

//var singleton2 = Singleton.init(123123, "Otro nombre"); TypeError: Singleton.init is not a function
var singleton2 = Singleton.getInstance(123123,"asfdasfafs");
singleton2.display();

(function(){
  console.log('Se auto ejecutooo!!!')
})();