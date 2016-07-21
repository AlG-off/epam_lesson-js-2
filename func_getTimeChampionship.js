/*2.Таймер обратного отсчёта, показывающий, сколько лет, месяцев, дней, минут, секунд осталось до финального матча чемпионата мира
 по футболу 2018 (15 июля 2018). Слова «лет, месяцев, дней, минут, секунд» отображать в правильной форме,
	в зависимости от количества (1 день, 2 дня, 5 дней и тд.)*/
function showTimeToChampionship() {
	var targetTime = new Date(2018,6,15), //Создаем дату дня Х
		timer = document.createElement("div"),
		timeResidue;
	
	timer.setAttribute("id", "timer-championship");
	timer.classList.add("timer");

	document.body.appendChild(timer);

	setTimeout( function t() {//Определяем таймер-планировщик
		timeResidue = getTimeRemaining(targetTime - Date.now());//Вычисляем остаток времени до дня Х и
		timer.innerHTML = createLineTimer(timeResidue);//отправляем результат на страницу
		setTimeout(t, 1000);//Рекурсивно вызываем таймер
	}, 1000);
	//Чтобы данные сразу появились на странице без секундной задерки - проделываем вычисление не дожидаясь выполнения 
	//рекурсивного таймера
	timeResidue = getTimeRemaining(targetTime - Date.now());
	timer.innerHTML = createLineTimer(timeResidue);

	//Вычисляет остаток времени до дня Х. На вход получае разность между днем Х и сегодняшним в мс
	function getTimeRemaining(time) {
		var y = 365 * (d = 24 * (h = 60 * (m = 60 * 1000))),//Задаем в мс минуту, час, день и год.
			mh = y / 12,//Определяем по среднему сколько мс в месяце
			dif,//Для укорачивания кода в dif будет храниться разность вычисления.
			//Определяем сколько полных лет, месяце, дней...секунд осталось до дня Х
			year = Math.floor(time/y),
			month = Math.floor((dif = time - year*y)/mh),
			day = Math.floor((dif = dif - month*mh)/d),
			hour = Math.floor((dif = dif - day*d)/h),
			min = Math.floor((dif = dif - hour*h)/m),
			sec = Math.floor((dif - min*m)/1000);
		return {//Для удобного оперирования данными - возвращаем их в виде объекта
			y: year,
			mh: month,
			d: day,
			h: hour,
			m: min,
			s: sec
		}
	};

	//Формирует строку, показывающую сколько осталось до дня Х в правильной форме.
	//На вход получает объект. На выходе будет строка с остатком времени до дня Х
	function createLineTimer(obj) {
		var line, a;

		for(var key in obj) {
			switch(key) {
				case "y":
					a = ["год", "года", "лет"];
				break;
				case "mh":
					a = ["месяц", "месяца", "месяцев"];
				break;
				case "d":
					a = ["день", "дня", "дней"];
				break;
				case "h":
					a = ["час", "часа", "часов"];
				break;
				case "m":
					a = ["минута", "минуты", "минут"];
				break;
				case "s":
					a = ["секунда", "секунды", "секунд"];
				break;
			}

			line += obj[key] + " " + getWordEnding(obj[key], a);
		}

		return line;
	};
	//Возвращает окончание для множественного числа слова на основании числа и массива
	function getWordEnding(num, arrWord) {
		var i;
		num = num % 100;

		if (num>=11 && num<=19) return arrWord[2];
		i = num % 10;
		switch (i) {
			case (1): 
				return arrWord[0];
			break;
			case (2):
			case (3):
			case (4):
				return arrWord[1];
			break;
		}
		return arrWord[2];
	};
};


showTimeToChampionship();