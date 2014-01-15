/**
 * Created with JetBrains PhpStorm.
 * User: workzentre
 * Date: 1/15/14
 * Time: 8:03 AM
 * To change this template use File | Settings | File Templates.
 */

function MyObject(id,nombre){
  this.id = id;
  this.nombre = nombre;
}
MyObject.prototype.display = function(){
  var container = document.createElement('div');
  $(container).addClass('col-md-12');
  $(container).html('El id del objeto es: '+this.id+' y su nombre es: '+this.nombre);

  $('#output').append(container);
};

var objeto1 = new MyObject(1,"El primer Objeto");

objeto1.display();


var objeto2 = new MyObject(123,"Un objeto al azar");

objeto2.display();