/*1.1.	Функция принимает любое количество аргументов. Если аргументы разного типа – пишет в консоль ошибку.
Если числа – складывает, если строки – объединяет, если массивы – объединяет. Если другие типы – пишет ошибку.
*/
function getCombinedData() { 
	var arr = Array.prototype.slice.call(arguments); //Наследуем метод slice и копируем arguments в новый массив
	
	try { //оборачиваем getAllType в try..catch для перехвата ошибок в случае их возникновения
		var itemType = getAllType(arr); //Передаем в функция массив для определения типа данных
	} catch(e) {
		console.log(e.name + ': ' + e.message);
		return
	}

	switch(itemType) { //Выбираем действие над данными в зависимости от их типа
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

	throw new SyntaxError('Недопустимый тип данных'); //Генерируем ошибку
	//Функция для проверяет принадлежность всех элементов массива к одному типу данных
	function getAllType(value) {
		var itemType = getType(value[0]); //Берем за основу для сравнения первый эл-т массива

		value.forEach( function(item) { //Перебираем массив и сравниваем тип данных
			
			if(itemType != getType(item)) {
				throw new SyntaxError('Разный тип данных');//Генерируем ошибку
			}
			
		});
		return itemType;
		//Функция определяет тип данных переданного элемента
		function getType(value) { //Согласно условию задачи нам необходимы: строки, массивы, числа
			if ( Array.isArray(value) ) {
				 return 'array';
			}
			
			if(typeof value == 'string' || typeof value == 'number') {
				return typeof value;
			}
		};
	};
};
//Выводим результат или перехватываем ошибку
try{
	console.log( getCombinedData([454,'455'], ['rtr', {vse_rabotaet: 'OK'}, 55155], [111,111]) );
} catch(e){
	console.log(e.name + ': ' + e.message);
};
