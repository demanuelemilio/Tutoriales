var EventEmitter = require('events').EventEmitter;

var ee = new EventEmitter();

ee.on('AlgunEvento',function(data){
		console.log('Algun Evento' , data);

});

ee.emit('AlgunEvento',{option:true, title:'Evento Lanzado'});