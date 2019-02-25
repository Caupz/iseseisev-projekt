<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>PercentCalc.net</title>		
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="keywords" content="percentage calculator, percentages, percentcalc, percent calculator online, percent, percents, calculator online, online, calculator, get increase of number, get decrease of number, increase from to, decrease from to">
		<meta name="description" content="PercentCalc.net helps you with percentage calculations with modern and slick design.">
		<link rel="manifest" href="/manifest.json">

		<!-- Open Graph data -->
		<meta property="og:title" content="PercentCalc.net" />
		<meta property="og:type" content="article" />
		<meta property="og:url" content="http://percentcalc.net/" />
		<meta property="og:image" content="http://percentcalc.net/logo.png" />
		<meta property="og:description" content="PercentCalc.net helps you with percentage calculations with modern and slick design." /> 
		
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet"> 
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-109849507-5"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'UA-109849507-5');
		</script>
		<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
		<!-- percentcalc.net -->
		<ins class="adsbygoogle"
			 style="display:block"
			 data-ad-client="ca-pub-6456102751834740"
			 data-ad-slot="2523228353"
			 data-ad-format="auto"
			 data-full-width-responsive="true"></ins>
		<script>
		(adsbygoogle = window.adsbygoogle || []).push({});
		</script>
		<link rel="stylesheet" type="text/css" href="/style.css"> 
	</head>
	<body>
		<div class="container">
			<div class="content">
				<h1><em>PercentCalc.net</em> is free online tool for percentage calculations.</h1>
				<h3>We also provide step by step guide for the calculations.</h3>
				
				<div class="block">
					What is <input id="amount-1" /> % of <input id="percentage-1" />?
					
					<div id="solution-x-percentage-of-amount" class="solution"></div>
				</div>
				<div class="block">
					<input id="amount-2" /> is what percent of <input id="amount-2-1" />?
					<div id="solution-x-amount-of-amount" class="solution"></div>
				</div>
				<div class="block">
					What is the percentage increase/decrease?<br>
					from <input id="amount-from-1" /> to <input id="amount-to-1" />
					<div id="solution-percentage-increase" class="solution"></div>
				</div>
                <div class="block spons">
                    <a href="http://toolsfortext.com/?utm_source=freeipstress&utm_medium=banner&utm_campaign=ccamp">
                        <div class="title">ToolsForText.com</div>
                        <div class="description">calculates word, space, line and many more counts for you.</div>
                        <div class="inline-block">></div>
                    </a>
                </div>
				<button class="btnAdd"></button>
				<div class="block footer">
					<div class="pull-left">
						Copyrighted © 2018 - 2019 <strong>percentcalc.net</strong>
					</div>
					<div class="pull-right">
						<button id="privacy">Privacy Policy</button>
					</div>
				</div>
				<div id="privacy-policy" class="block" style="display: none;">
					<h2>Privacy Policy</h2>
					<p>14. July 2018</p>
					<p>This privacy policy applies to the website percentcalc.net</p>
					
					<h3>1. Personal identifiable information</h3>
					<p>We dont collect any personal identifiable information on percentcalc.net</p>
					<h3>2. Cookies</h3>
					<p>Cookies are tiny pieces of data that percentcalc.net send to your webbrowser which is stored on your device for record keeping purposes.</p>
					<h3>3. Services using Cookies</h3>
					<h4>Analytics</h4>
					<p>Percentcalc.net uses Google Analytics to help us know how the users use the website.</p>
					<p>Google Analytics cookies keep track of your progress while you use website, collecting data from where you come from, which pages you visit and how long you stay on website. This data is stored by Google to use in reports.</p>
					<p>If you dont want Google Analytics to look after your usages on website then you can install <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics browser add-on</a>. Also most browsers allow you to block third-party cookies and you can also clear any existing cookies from your browser.</p>
					<br>
					<p>Learn more how Google collets and processes data: <a href="https://policies.google.com/technologies/partner-sites">https://policies.google.com/technologies/partner-sites</a></p>
					<h4>Ads</h4>
					<p>We use Google Adsense network to serve ads on percentcalc.net</p>
					<p>Google and other third-party vendors may use cookies to serve ads based on your previouse visits to all kinds of websites.</p>
					<p>You may opt out of personalized advertisments by visiting <a href="https://adssettings.google.com/authenticated">Google's Ads settings</a>. </p>
					<p>Users from the European Economic Area (EEA) have to explicitly opt in for personalized advertising on the percentcalc.net</p>
					<br>
					<h4>Contact information</h4>
					<p>seminglow@gmail.com</p>
				</div>
			</div>
		</div>
		<script>
		let btnAdd = document.querySelector(".btnAdd");
		
		if ('serviceWorker' in navigator) {
		  window.addEventListener('load', function() {
			navigator.serviceWorker.register('/sw.js').then(function(registration) {
			  // Registration was successful
			  console.log('ServiceWorker registration successful with scope: ', registration.scope);
			}, function(err) {
			  // registration failed :(
			  console.log('ServiceWorker registration failed: ', err);
			});
		  });
		}


			
			function CalculateAmountOfPercentage() {
				let percentage = document.querySelector("#percentage-1")
				let amount = document.querySelector("#amount-1")
				
				if(percentage !== 'undefined' || percentage !== null) {
					let val1 = percentage.value
					let val2 = amount.value
					if(typeof val1 == 'string') val1 = parseFloat(val1.replace(',', '.'))
					if(typeof val2 == 'string') val2 = parseFloat(val2.replace(',', '.'))
					let answer = val2 / 100 * val1
					document.querySelector("#solution-x-percentage-of-amount").innerHTML = "<em>"+val2+"</em> / 100 * <em>"+val1+"</em> = <strong class='answer'>"+answer+"</strong>"
				}
			}
			
			function CalculatePercentageOfAmounts() {
				let amount1 = document.querySelector("#amount-2")
				let amount2 = document.querySelector("#amount-2-1")
				
				if(amount1 !== 'undefined' || amount2 !== null) {
					let val1 = amount1.value
					let val2 = amount2.value
					if(typeof val1 == 'string') val1 = parseFloat(val1.replace(',', '.'))
					if(typeof val2 == 'string') val2 = parseFloat(val2.replace(',', '.'))
					let answer = val1 * 100 / val2
					document.querySelector("#solution-x-amount-of-amount").innerHTML = "<em>"+val1+"</em> * 100 / <em>"+val2+"</em> = <strong class='answer'>"+answer+"%</strong>"
				}
			}
			
			function CalculateIncreaseDecrease() {
				let amount1 = document.querySelector("#amount-from-1")
				let amount2 = document.querySelector("#amount-to-1")
				
				if(amount1 !== 'undefined' || amount2 !== null) {
					let val1 = amount1.value
					let val2 = amount2.value
					if(typeof val1 == 'string') val1 = parseFloat(val1.replace(',', '.'))
					if(typeof val2 == 'string') val2 = parseFloat(val2.replace(',', '.'))
					
					if(val1 == 0 || val2 == 0) {
						let answer = (((val1 + val2) * 100) * -1);
						document.querySelector("#solution-percentage-increase").innerHTML = "(((<em>"+val1+"</em> + <em>"+val2+"</em>) * 100) * -1) = <strong class='answer'>"+answer+"%</strong>";
					} else  {
						let answer = (((val1 / val2 * 100) - 100.0) * -1);
						document.querySelector("#solution-percentage-increase").innerHTML = "(((<em>"+val1+"</em> / <em>"+val2+"</em> * 100) - 100) * -1) = <strong class='answer'>"+answer+"%</strong>";
					}
				}
			}
		
			document.querySelector("#amount-1").addEventListener('keyup', CalculateAmountOfPercentage)
			document.querySelector("#percentage-1").addEventListener('keyup', CalculateAmountOfPercentage)
			document.querySelector("#amount-2").addEventListener('keyup', CalculatePercentageOfAmounts)
			document.querySelector("#amount-2-1").addEventListener('keyup', CalculatePercentageOfAmounts)
			document.querySelector("#amount-from-1").addEventListener('keyup', CalculateIncreaseDecrease)
			document.querySelector("#amount-to-1").addEventListener('keyup', CalculateIncreaseDecrease)
			document.querySelector("#privacy").addEventListener('click', function() {
				let privacyPolicy = document.querySelector("#privacy-policy")
				if(privacyPolicy.style.display == "none") {
					privacyPolicy.style.display = "block"
					privacyPolicy.scrollIntoView()
				} else {
					privacyPolicy.style.display = "none"
				}
			});
			
		window.addEventListener('beforeinstallprompt', (e) => {
		  // Prevent Chrome 67 and earlier from automatically showing the prompt
		  e.preventDefault();
		  // Stash the event so it can be triggered later.
		  deferredPrompt = e;
		  // Update UI notify the user they can add to home screen
		  btnAdd.style.display = 'block';
		});
		btnAdd.addEventListener('click', (e) => {
		  // hide our user interface that shows our A2HS button
		  btnAdd.style.display = 'none';
		  // Show the prompt
		  deferredPrompt.prompt();
		  // Wait for the user to respond to the prompt
		  deferredPrompt.userChoice
			.then((choiceResult) => {
			  if (choiceResult.outcome === 'accepted') {
				console.log('User accepted the A2HS prompt');
			  } else {
				console.log('User dismissed the A2HS prompt');
			  }
			  deferredPrompt = null;
			});
		});
		</script>
	</body>
</html> 