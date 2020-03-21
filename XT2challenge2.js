		/*test
			var myDate = new Date(),
				month = myDate.getMonth(), //zero base, dus januari = 0
				date = myDate.getDate(),
				day = myDate.getDay(); //zero base, zondag = 0 

			var months = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];

			console.log(months[month]);*/

			
			function toonTijd(){
				var datum = new Date();
				var uren = datum.getHours(); //0 tot 23
				var minuten = datum.getMinutes(); //0 tot 59
				var seconden = datum.getSeconds(); //0 tot 59

				//om op te lossen dat wanneer het bv kwart over 8 's ochtends is er een 0 voor de 8 komt, dus 08:15 ipv 8:15.
				if(uren < 10){
					uren = "0" + uren;
				}

				if(minuten < 10){
					minuten = "0" + minuten;
				}

				if(seconden < 10){
					seconden = "0" + seconden;
				}

				var tijd = uren + ":" + minuten + ":" + seconden;

				document.getElementById("mijnDigitaleKlok").innerHTML = tijd;
			}

			setInterval(toonTijd, 1000);

		

			function dagdelen(){
				var datum = new Date();
				var uren = datum.getHours();
				var achtergrond = document.getElementById('container')

				if (uren >= 0 && uren < 12){
					console.log("ochtend")
					/*achtergrond.classList.add("ochtend");*/
					achtergrond.className = 'ochtend';
				}

				else if (uren >=12 && uren < 18) {
					console.log("middag")
					/*achtergrond.classList.add("middag");*/
					achtergrond.className = 'middag';
				}

				else {
					console.log("avond")
					/*achtergrond.classList.add("avond");*/
					achtergrond.className = 'avond';
				}
			}

			window.onload = function(){
				dagdelen();
				toonTijd();
			}