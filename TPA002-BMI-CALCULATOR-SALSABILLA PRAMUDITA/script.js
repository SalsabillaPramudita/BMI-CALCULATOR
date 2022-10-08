		function BMI() {
			let h=document.getElementById('h').value;
			let w=document.getElementById('w').value;
			let bmi=w/(h/100*h/100);
			let bmio=(bmi.toFixed(2));
			let status = "Which Means You are "
			

			document.getElementById("result").innerHTML="Your BMI is " + bmio.bold();
			if(bmio < 18.5){                
					document.getElementById("hasil").innerHTML = status + "Underweight".bold();
			}else if(bmio <= 24.9){
				document.getElementById("hasil").innerHTML = status + "Normal".bold();
			}else if(bmio <= 29.9){
				document.getElementById("hasil").innerHTML = status + "Overweight".bold();
			}else
				document.getElementById("hasil").innerHTML = status + "Obesity".bold();
		}