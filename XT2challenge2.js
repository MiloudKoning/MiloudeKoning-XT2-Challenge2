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

				var tijd = uren + ":" + minuten /*+ ":" + seconden*/;

				document.getElementById("mijnDigitaleKlok").innerHTML = tijd;

				setInterval(toonTijd, 1000);
			}

			function dagdelen(){
				var datum = new Date();
				var uren = datum.getHours();
				var container = document.getElementById('container');
				var berichtOchtend = document.getElementById('berichtOchtend');
				var berichtMiddag = document.getElementById('berichtMiddag');
				var berichtAvond = document.getElementById('berichtAvond');
				var emojiOchtend = document.getElementById('emojiOchtend');
				var emojiMiddag = document.getElementById('emojiMiddag');
				var emojiAvond = document.getElementById('emojiAvond');


				if (uren >= 6 && uren < 12){
					/*console.log('ochtend')*/
					/*container.classList.add("ochtend");*/
					container.className = 'ochtend';

					berichtOchtend.className = 'bericht';
					berichtMiddag.className = 'geenBericht';
					berichtAvond.className = 'geenBericht';
					berichtNacht.className = 'geenBericht';

					emojiOchtend.className = 'emoji';
					emojiMiddag.className = 'geenBericht';
					emojiAvond.className = 'geenBericht';
					emojiNacht.className = 'geenBericht';
				}

				else if (uren >=12 && uren < 18) {
					/*console.log("middag")*/
					/*container.classList.add("middag");*/
					container.className = 'middag';

					berichtOchtend.className = 'geenBericht';
					berichtMiddag.className = 'bericht';
					berichtAvond.className = 'geenBericht';
					berichtNacht.className = 'geenBericht';

					emojiOchtend.className = 'geenBericht';
					emojiMiddag.className = 'emoji';
					emojiAvond.className = 'geenBericht';
					emojiNacht.className = 'geenBericht';

				}

				else if (uren >=18 && uren < 24){
					/*console.log("avond")*/
					/*container.classList.add("avond");*/
					container.className = 'avond';

					berichtOchtend.className = 'geenBericht';
					berichtMiddag.className = 'geenBericht';
					berichtAvond.className = 'berichtDonker';
					berichtNacht.className = 'geenBericht';

					emojiOchtend.className = 'geenBericht';
					emojiMiddag.className = 'geenBericht';
					emojiAvond.className = 'emoji';
					emojiNacht.className = 'geenBericht';

				}

				else {
					container.className = 'nacht';

					berichtOchtend.className = 'geenBericht';
					berichtMiddag.className = 'geenBericht';
					berichtAvond.className = 'geenBericht';
					berichtNacht.className = 'berichtDonker';

					emojiOchtend.className = 'geenBericht';
					emojiMiddag.className = 'geenBericht';
					emojiAvond.className = 'geenBericht';
					emojiNacht.className = 'emoji';

				}

				setInterval(dagdelen, 1000);
			}

			window.onload = function(){
				dagdelen();
				toonTijd();
			}