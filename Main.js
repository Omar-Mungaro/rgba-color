var showColor =	function() {
					let r = r__range.value;
					r__code.value = r;
					r__color.style.backgroundColor = "rgb("+ r +", "+0+", "+0+") ";
					
					let g = g__range.value;
					g__code.value = g;
					g__color.style.backgroundColor = "rgb("+ 0 +", "+g+", "+0+") ";
					
					let b = b__range.value;
					b__code.value = b;
					b__color.style.backgroundColor = "rgb("+ 0 +", "+0+", "+b+") ";
					
					let a = a__range.value/10;
					a__code.value = a;
				
				rgb__value.value = "rgba("+ r+", "+g+", "+b+", "+a+")";
					
					
					document.body.style.backgroundColor = "rgba("+ r+", "+g+", "+b+", "+a+")";
					

				}
