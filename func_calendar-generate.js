/*3.	Календарь. Принимает год, месяц. Рисует таблицу с текущим месяцем.
 Сделать стили для дней другого месяца, сегодняшнего дня.
*/
function createCalendar(year, month) {
	var nowDate = new Date().getDate(),//Берем сегодняшнее число.
		targetDate = new Date(year, month),//Создаем интересующий нас месяц.
		lastDatePrevMonth = (new Date(year, month, 0)).getDate(),//Берем последний день предыдущего месяца.
		table = document.createElement("table"),
		lineWeek = [];
			
	for (var i = 1; i <= 7; i++) { //Заполняем первую неделю календаря
		if (i < getWeekday(targetDate)) {//Если наш месяц начинается не с пн, то
			lineWeek.unshift( createCell(lastDatePrevMonth--, "month_other-day") );//заполняем числами предыдущего месяца
			continue;
		}
		
		lineWeek.push( createCell(targetDate.getDate(), "month_day") );//дозаполняем строку числами нашего месяца
		targetDate.setDate(targetDate.getDate() + 1);
	}

	table.appendChild( wrapRow(lineWeek) );//Данные оборачиваются в строку(wrapRow) и добавляются в таблицу
	lineWeek.length = 0;

	while (targetDate.getMonth() == month) {//Добавляем в таблицу другие недели, кроме первой
		var cell = createCell(targetDate.getDate(), "month_day");
		
		if (targetDate.getDate() == nowDate) {
			cell.classList.add("month_day--active");//Выделем визуально сегодняшнее число
		} 
		
		lineWeek.push(cell);
		
		if ( getWeekday(targetDate) == 7 ) {//Когда дошли до вс, то делаем перевод строки на след. неделю
			table.appendChild( wrapRow(lineWeek) );
			lineWeek.length = 0;
		}
		
		targetDate.setDate(targetDate.getDate() + 1);

		if (targetDate.getMonth() != month && getWeekday(targetDate) != 1) {//Если месяц кончается не в вс, то дозаполняем неделю

			for (i = getWeekday(targetDate); i <= 7; i++) {//числами след.месяца
				lineWeek.push( createCell(targetDate.getDate(), "month_other-day") );
				targetDate.setDate(targetDate.getDate() + 1);
			} 

			table.appendChild( wrapRow(lineWeek) );

			break;
		}
	}

	table.classList.add("month");

	return table;

	function wrapRow(arr) {//Оборачивает ячейки в строку
		var tr = document.createElement("tr");

		arr.forEach(function(item) {
			tr.appendChild( item );
		})
		return tr;
	};

	function createCell(item, style) {//Создает ячейку
		var td = document.createElement("td");

		td.classList.add(style);
		td.innerHTML = item;
		return td;
	};

	function getWeekday(date) {//Определяет день недели
		var weekday = date.getDay();

		if (weekday == 0) weekday = 7;
		return weekday;
	};
}

var calendar = document.createElement("div");
calendar.setAttribute("id", "calendar-container");
calendar.classList.add("calendar-container");
calendar.appendChild( createCalendar(2016, 6) );
document.body.appendChild(calendar);
