$(function()
	{

		var currentNumber=1;

		var slideNb= $('.slide').length;
		console.log("slideNb : " + slideNb);

		function go2next(){

			$('.previous').removeClass('previous');

			// alert('go2next');
			$('.slide:nth-child('+currentNumber+')').addClass('previous');
			$('.slide:nth-child('+currentNumber+')').removeClass('current');
			
			if (currentNumber == slideNb)
			{
				$('.slide:nth-child(1)').addClass('current');
				$('.slide:nth-child(1)').removeClass('next');
			} else
			{
				$('.slide:nth-child('+(currentNumber+1)+')').addClass('current');
				$('.slide:nth-child('+(currentNumber+1)+')').removeClass('next');
			}


			if ( currentNumber == (slideNb - 1) )
			{
				$('.slide:nth-child(1)').addClass('next');
			} else
			{
				if(currentNumber == slideNb)
				{
					$('.slide:nth-child(2)').addClass('next');
				} else
				{
					$('.slide:nth-child('+(currentNumber+2)+')').addClass('next');
				}
			}

			


			console.log('currentNumber avant = ' + currentNumber);
			if(currentNumber == slideNb)
			{
				currentNumber = 1;
			} else
			{
				currentNumber= currentNumber+1;
			}
			
			console.log('currentNumber après = ' + currentNumber );

		}

		// go2next();

		// $('.btsuivant').click(go2next);
		$('.slide').click(go2next);

		window.setInterval(go2next, 2000);

	});