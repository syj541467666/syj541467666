var web = $(".web-chat")
			var tips = $(".clan-slider-tips")
			//			console.log(web)
			for(var i = 0; i < web.length; i++) {
				web[i].index = i
				web[i].onmouseenter = function() {
					for(var j = 0; j < tips.length; j++) {
						tips[j].style.display = "none";
					}
					tips[this.index].style.display = "block";
				}
				web[i].onmouseout = function() {
					for(var j = 0; j < tips.length; j++) {
						tips[j].style.display = "none";
					}
					tips[this.index].style.display = "none";
				}
			}
			$(window).scroll(function() {
				//				console.log($(window).scrollTop())
				//				console.log($(".clan-slider ul"))
				//				console.log($("#slider-goTop")[0])
				if($(window).scrollTop() < 200) {
					$(".clan-slider ul")[0].style.display = "none";
				} else if($(window).scrollTop() >= 200) {
					$(".clan-slider ul")[0].style.display = "block";
					if($(window).scrollTop() < 350) {
						$("#slider-goTop")[0].style.display = "none"
					} else {
						$("#slider-goTop")[0].style.display = "block"
					}
				}
			})
			$("#slider-goTop").click(function() {
				$("body,html").animate({
					"scrollTop": 0
				}, 500)
			})