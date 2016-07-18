/* 1.3.	Функция получает первый параметром массив, каждый элемент которого является строкой. 
Вторым параметром подстроку для поиска. Возвращает true, если хотя бы один элемент массива содержит переданную подстроку
и false в противном случае. Поиск регистронезависимый.
*/
function searchStr(arr, str) { 
	return arr.some(function(item) { //some()- перебирающий метод, возвратит true, если вызов функции вернёт true для какого-нибудь элемента arr
		var regexp = new RegExp(str, "i");
			result = item.search(regexp);
		return ~result; //Работает так: ~result == -(result + 1). Если search() вернет -1, то -(-1 + 1) == 0
	})
};
//Вывод результата
console.log( searchStr(['Milk','Footer', 'PROTOTYPE', 'exaMPLE'],'oT') );