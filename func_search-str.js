/* 1.3.	Функция получает первый параметром массив, каждый элемент которого является строкой. 
Вторым параметром подстроку для поиска. Возвращает true, если хотя бы один элемент массива содержит переданную подстроку
и false в противном случае. Поиск регистронезависимый.
*/
function searchStr(arr, str) { 
	return arr.some(function(item) { //some()- перебирающий метод, возвратит true, если вызов функции вернёт true для какого-нибудь элемента arr
		var result = item.toLowerCase().search( str.toLowerCase() );
		return ~result; // ~result == -(result + 1). Если search вернет -1, то -(-1 + 1) == 0
	})
};
console.log( searchStr(['Milk','Footer', 'PROTOTYPE', 'exaMPLE'],'mp') );