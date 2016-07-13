/*1.1.	Функция принимает любое количество аргументов. Если аргументы разного типа – пишет в консоль ошибку.
Если числа – складывает, если строки – объединяет, если массивы – объединяет. Если другие типы – пишет ошибку.
*/
function getCombinedData() { 
	var arr = Array.prototype.slice.call(arguments); //Наследуем метод slice и копируем arguments в новый массив
	
	try { 
		var itemType = getAllType(arr); 
	} catch(e) {
		console.log(e.name + ': ' + e.message);
		return
	}

	switch(itemType){
		case 'number':
			return arr.reduce( function(pre, cur) {
				return pre + cur;
				})
		break;
		case 'string':
		case 'array':
			return arr.reduce( function(pre, cur) {
				return pre.concat(cur);
			});
		break;
	}

	throw new SyntaxError('Недопустимый тип данных');
};
//Функция для проверки аргументов на принадлежность к одному типу
function getAllType(value) {
	var itemType = getType(value[0]);

	value.forEach( function(item) {
		
		if(itemType != getType(item)) {
			throw new SyntaxError('Разный тип данных');
		}
		
	});
	return itemType;
};

function getType(value) {
	if ( Array.isArray(value) ) {
		 return 'array';
	}
	
	if(typeof value == 'string') {
		return 'string';
	} else if (typeof value == 'number') {
		return 'number';
	}
};

try{
	console.log( getCombinedData([454,'455'], ['rtr', {vse_rabotaet: 'OK'}, 55155], [111,111]) );
} catch(e){
	console.log(e.name + ': ' + e.message);
};
