/*3.	Календарь. Принимает год, месяц. Рисует таблицу с текущим месяцем.
 Сделать стили для дней другого месяца, сегодняшнего дня.
*/
function createCalendar(year, month) {
	var nowDate = new Date().getDate(),
		targetDate = new Date(year, month),
		lastDatePrevMonth = (new Date(year, month, 0)).getDate(),
		table = document.createElement("table"),
		lineWeek = [];
			
	for (var i = 1; i <= 7; i++) {
		if (i < getWeekday(targetDate)) {
			lineWeek.unshift( createCell(lastDatePrevMonth--, "month_other-day") );
		} else {
			lineWeek.push( createCell(targetDate.getDate(), "month_day") );
			targetDate.setDate(targetDate.getDate() + 1);
		}
	}

	table.appendChild( wrapRow(lineWeek) );
	lineWeek.length = 0;

	while (targetDate.getMonth() == month) {
		if (targetDate.getDate() == nowDate) {
			var cell = createCell(targetDate.getDate(), "month_day");
			cell.classList.add("month_day--active");
			lineWeek.push(cell);
		} else {
			lineWeek.push( createCell(targetDate.getDate(), "month_day") );
		}
		
		if ( getWeekday(targetDate) == 7 ) {
			table.appendChild( wrapRow(lineWeek) );
			lineWeek.length = 0;
		}
		
		targetDate.setDate(targetDate.getDate() + 1);

		if (targetDate.getMonth() != month && getWeekday(targetDate) != 1) {
			
			for (i = getWeekday(targetDate); i <= 7; i++) {
				lineWeek.push( createCell(targetDate.getDate(), "month_other-day") );
				targetDate.setDate(targetDate.getDate() + 1);
			} 

			table.appendChild( wrapRow(lineWeek) );

			break;
		}
	}

	table.classList.add("month");

	return table;

	function wrapRow(arr) {
		var tr = document.createElement("tr");

		arr.forEach(function(item) {
			tr.appendChild( item );
		})
		return tr;
	};

	function createCell(item, style) {
		var td = document.createElement("td");
		td.classList.add(style);
		td.innerHTML = item;
		return td;
	};

	function getWeekday(date) {
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
