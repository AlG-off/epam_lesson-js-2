/*2.Таймер обратного отсчёта, показывающий, сколько лет, месяцев, дней, минут, секунд осталось до финального матча чемпионата мира
 по футболу 2018 (15 июля 2018). Слова «лет, месяцев, дней, минут, секунд» отображать в правильной форме,
	в зависимости от количества (1 день, 2 дня, 5 дней и тд.)*/
function showTimeToChampionship() {
	var targetTime = new Date(2018,6,15);
	var  timer = document.createElement("div");
	
	timer.setAttribute("id", "timer-championship");
	timer.classList.add("timer");

	document.body.appendChild(timer);

	setTimeout( function t() {
		timer.innerHTML = createLineTimer( getTimeRemaining(targetTime - Date.now()) );
		setTimeout(t, 1000);
	}, 1000);
	
	timer.innerHTML = createLineTimer( getTimeRemaining(targetTime - Date.now()) );

	function getTimeRemaining(time){
		var y = 365 * (d = 24 * (h = 60 * (m = 60 * 1000))),
				mh = y / 12,
				dif,
				year = Math.floor(time/y),
				month = Math.floor((dif = time - year*y)/mh),
				day = Math.floor((dif = dif - month*mh)/d),
				hour = Math.floor((dif = dif - day*d)/h),
				min = Math.floor((dif = dif - hour*h)/m),
					sec = Math.floor((dif - min*m)/1000);
		return {
			y: year,
			mh: month,
			d: day,
			h: hour,
			m: min,
			s: sec
		}
	}

	function createLineTimer(obj) {
		var line = obj.y;

		switch (obj.y) {
			case 1 : 
			case 21:
			case 31:
				line += " год ";
			break;
			case 2:
			case 3:
			case 4:
				line += " года ";
			break;
			default:
				line += " лет "  
		}

		line += obj.mh;

		switch (obj.mh) {
			case 1:
				line += " месяц ";
			break;
			case 2:
			case 3:
			case 4:
				line += " месяца ";
			break;
			default:
				line += " месяцев ";
		}

		line += obj.d;

		switch (obj.d) {
			case 1:
			case 21:
			case 31:
				line += " день ";
			break;
			case 2:
			case 3:
			case 4:
			case 22:
			case 23:
			case 24:
				line += " дня ";
			break;
			default:
				line += " дней ";
		}

		line += obj.h;
		
		switch (obj.h) {
			case 1:
			case 21:
				line += " час ";
			break;
			case 2:
			case 3:
			case 4:
			case 22:
			case 23:
				line += " часа ";
			break;
			default:
				line += " часов ";
		}

		line += obj.m;
		
		switch (obj.m) {
			case 1:
			case 21:
			case 31:
			case 41:
			case 51:
				line += " минута ";
			break;
			case 2:
			case 3:
			case 4:
			case 22:
			case 23:
			case 24:
			case 32:
			case 33:
			case 34:
			case 42:
			case 43:
			case 44:
			case 52:
			case 53:
			case 54:
				line += " минуты ";
			break;
			default:
				line += " минут ";
		}

		line += obj.s;
		
		switch (obj.s) {
			case 1:
			case 21:
			case 31:
			case 41:
			case 51:
				line += " секунда ";
			break;
			case 2:
			case 3:
			case 4:
			case 22:
			case 23:
			case 24:
			case 32:
			case 33:
			case 34:
			case 42:
			case 43:
			case 44:
			case 52:
			case 53:
			case 54:
				line += " секунды ";
			break;
			default:
				line += " секунд ";
		}
		return line;
	}

}


showTimeToChampionship();