var options = {  
				useEasing: true,
				  useGrouping: true,
				  separator: ',',
				  decimal: '.',
				  prefix: '',
				  suffix: '' 
			};
			$(function() {

				new CountUp("num1", 0, 18397, 0, 3, options).start();
				new CountUp("num2", 0, 98.8, 1, 3, options).start();
				new CountUp("num3", 0, 3273, 0, 3, options).start();
				new CountUp("num4", 0, 100, 0, 3, options).start();
			})
			

var col = $(".col-md-3");
			//						console.log(col)
			for(var j = 0; j < col.length; j++) {
				col[j].index = j
				col[j].onmouseenter = function() {
					for(var i = 0; i < col.length; i++) {
						col[i].className = "col-sm-12 col-md-3"

					}
					this.className = "col-sm-12 col-md-3 big"
				}
			}
			




