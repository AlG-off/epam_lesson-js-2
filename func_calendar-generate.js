/*3.	Календарь. Принимает год, месяц. Рисует таблицу с текущим месяцем.
 Сделать стили для дней другого месяца, сегодняшнего дня.
*/
function getCalendar(year, month) {
	var nowDate = new Date().getDate(),
		targetDate = new Date(year, month),
		lastDatePrevMonth = (new Date(year, month, 0)).getDate(),
		firstDayTargetDate = targetDate.getDay();

	function createTable() {
		var tableElem = document.createElement('table');








		function createRow(obj) {
			var row = document.createElement('');

			obj.forEach(function(item) {
				row.appendChild( createCell(item) );
			})
			return row;
		}
	}
}