<script lang="ts">
	import { onMount } from "svelte";
   import Outline from "../../components/buttons/outline.svelte";
	import Payments from "$lib/images/payments.webp?enhanced";

	import gsap from "gsap";
	import {ScrollTrigger} from "gsap/dist/ScrollTrigger"; 

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger)

		gsap.from('#payments-title', {
			scrollTrigger: {
				trigger: '#payments-title',
			},
			y: -40,
			opacity: 0,
			delay: 0.2,
			duration: 1,
			ease: "expo.out",
		});
		gsap.from('#main-title', {
			scrollTrigger: {
				trigger: '#main-title',
			},
			y: -40,
			opacity: 0,
			delay: 0.2,
			duration: 1,
			ease: "expo.out",
		});
		gsap.from('#offer-title', {
			scrollTrigger: {
				trigger: '#offer-title',
			},
			y: -40,
			opacity: 0,
			delay: 0.2,
			duration: 1,
			ease: "expo.out",
		});
		gsap.from('.off-p', {
			scrollTrigger: {
				trigger: '.off-p',
			},
			y: -40,
			opacity: 0,
			delay: 0.2,
			duration: 1,
			ease: "expo.out",
			stagger: 0.15
		});
		gsap.from('.li', {
			scrollTrigger: {
				trigger: '.li',
			},
			y: -40,
			opacity: 0,
			delay: 0.2,
			duration: 1,
			ease: "expo.out",
			stagger: 0.15
		});
	});
	onMount(() => {
		let menu: HTMLElement = document.querySelector("#menu")!;
		let btn: HTMLButtonElement = document.querySelector("#btn-menu")!;

		btn.addEventListener("click", () => {
			menu.classList.toggle("hidden");
	}, false);
	})
</script>

<svelte:head>
	<meta charset="UTF-8">

	<meta property="url" content="https://eupol-przewoznik.pl">
	<meta name="description" content="Szybkie, wygodne i tanie przejazdy transportowe">
	<meta name="dcterms.description" lang="pl" content="EUPOL - Twój komfort i bezpieczeństwo">
	<meta name="keywords" content="Przewoźnik EuPoL Stalowa Wola Gorzyce Tarnobrzeg Sandomierz Zaleszany Wrzawy Zbydniów Nisko Przewozy Osób Transport Ludzi Transport Lotnisko Transport Gorzyce">
	<meta name="dcterms.subject" lang="pl" content="Transport Gorzyce; Transport Sandomierz; Transport Zaleszany; Transport Tarnobrzeg; EuPoL - Twój komfort i bezpieczeństwo; Transport Zbydniów; Przewoźnik ludzi; Tranposrt ludzi; Stalowa Wola; Tarnobrzeg">
	<meta name="application-name" content="Szybkie, wygodne i tanie przejazdy transportowe">
	<meta name="msapplication-tooltip" content="EuPol - Twój komfort i bezpieczeństwo w świecie transportu">
	<meta name="msapplication-starturl" content="https://eupol-przewoznik.pl">
	<meta name="msapplication-window" content="width=1024;height=768">
	<meta property="og:site_name" content="eupol-przewoznik.pl - Twój komfort i bezpieczeństwo w świecie transportu">
	<meta property="og:url" content="https://eupol-przewoznik.pl">
	<meta property="og:title" content="EuPol - Twój komfort i bezpieczeństwo w świecie transportu | eupol-przewoznik.pl">
	<meta property="og:image" content="https://eupol-przewoznik.pl/images/favicon.png">

	<link rel="alternate" type="application/rss+xml" title="Wpisy na RSS" href="http://example.net/feed">
	<link rel="alternate" type="application/atom+xml" title="Wpisy na ATOM" href="http://example.net/atom">
	<link rel="index" title="Strona główna" href="https://eupol-przewoznik.pl">
	<link rel="canonical" href="https://eupol-przewoznik.pl">
	<link rel="icon" href="https://eupol-przewoznik.pl/images/favicon.png" type="image/png">

	<title>Eupol - Nowoczesny przewoźnik</title>
</svelte:head>

<header id="header" class="h-screen bg-[url('/bg.webp')] bg-cover bg-no-repeat bg-center xl:bg-left pb-24 relative">
	<div class="bg-gradient-to-b from-dark-50/90 absolute top-0 right-0 left-0 -z-0 w-full h-28"></div>
	<div class="mx-auto max-w-screen-xl justify-between content-between h-full flex flex-col px-4 sm:px-8">
		<navbar class="navbar grid grid-cols-6 md:grid-cols-12 z-10">
			<div class="bg-primary clip-logo max-w-52 p-4 flex justify-center content-center col-span-3 min-[425px]:col-span-2 md:col-span-2 px-5">
				<a href="/" class="font-primary text-h3 xl:text-h2 text-dark-50 font-extrabold select-none">EuPol</a>
			</div>
			<div class="h-full border-b-2 border-dark-250/50 w-full min-[425px]:justify-between col-span-3 min-[425px]:col-span-4 md:col-span-10 pl-6 flex content-center justify-end">
				<div class="py-4 content-center hidden min-[425px]:inline-flex flex-col gap-2 justify-center">
					<a href="tel:+48664175003" class="flex gap-3 font-semibold text-gray-50"><span class="text-primary font-bold">/</span> +48 664 175 003</a>
					<a href="tel:+48669955685" class="flex gap-3 font-semibold text-gray-50"><span class="text-primary font-bold">/</span> +48 669 955 685</a>
				</div>
				<div class="py-2 md:py-4 content-center">
					<ul id="menu" class="hidden md:flex md:bg-transparent bg-primary p-8 md:p-0 w-full flex-row gap-6 lg:gap-12 flex flex-col absolute left-4 right-4 md:right-0 top-20 md:left-0 md:top-0 md:relative md:flex-row">
						<li class="content-center"><a href="/#onas" class="font-semibold text-dark-50 md:text-gray-50 text-p1">O NAS</a></li>
						<li class="content-center"><a href="/oferta" class="font-semibold text-dark-50 md:text-gray-50 text-p1">OFERTA</a></li>
						<li class="content-center"><a href="/#flota" class="font-semibold text-dark-50 md:text-gray-50 text-p1">NASZA FLOTA</a></li>
						<li class="content-center flex md:hidden"><a href="/#kontakt" class="font-semibold text-dark-50 md:text-gray-50 text-p1">KONTAKT</a></li>
						<li class="hidden md:flex"><Outline size="small" link="/#kontakt">Kontakt</Outline></li>
					</ul>
               <button data-collapse-toggle="navbar-default" type="button" id="btn-menu" class="inline-flex bg-[#EAEAEA]/20 items-center p-4 w-16 h-16 justify-center text-sm text-gray-50 rounded-full md:hidden hover:bg-[#EAEAEA]/30 active:scale-95 hover:translate-y-0.5 duration-200 focus:outline-none dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
               </button>
				</div>
			</div>
		</navbar>
		<section id="jumbotron" class="flex flex-col gap-4 lg:gap-6 mt-16">
			<h1 class="text-dark-300 font-primary text-h3 lg:text-h2 xl:text-h1 text-wrap break-words" id="main-title">Oferta</h1>
			<div class="flex w-full justify-end mt-2">
				<div class="flex gap-4">
					<div class="p-4 rounded-full bg-[#EAEAEA]/20 w-14 h-14 flex justify-center content-center hover:bg-[#EAEAEA]/30 hover:cursor-pointer active:scale-95 hover:translate-y-0.5 duration-200">
						<svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.3314 6.67463V10.6409H15.3658L14.5686 15.9838H10.3314V28.2935C9.48184 28.4084 8.61266 28.4683 7.73039 28.4683C6.71199 28.4683 5.71191 28.3892 4.73801 28.2361V15.9838H0.0949707V10.6409H4.73801V5.78799C4.73801 2.77721 7.24214 0.335419 10.3327 0.335419V0.337973C10.3419 0.337973 10.3497 0.335419 10.3589 0.335419H15.3671V4.95619H12.0946C11.122 4.95619 10.3327 5.72547 10.3327 6.67335L10.3314 6.67463Z" fill="#CAE84A"/>
						</svg>
					</div>
					<div class="p-4 rounded-full bg-[#EAEAEA]/20 w-14 h-14 flex justify-center content-center hover:bg-[#EAEAEA]/30 hover:cursor-pointer active:scale-95 hover:translate-y-0.5 duration-200">
						<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20.6925 0.139221H7.04187C3.27063 0.139221 0.202637 3.20812 0.202637 6.98047V19.4725C0.202637 23.2448 3.27063 26.3137 7.04187 26.3137H20.6925C24.4638 26.3137 27.5317 23.2448 27.5317 19.4725V6.98047C27.5317 3.20812 24.4638 0.139221 20.6925 0.139221ZM2.6153 6.98047C2.6153 4.53926 4.60138 2.55258 7.04187 2.55258H20.6925C23.133 2.55258 25.1191 4.53926 25.1191 6.98047V19.4725C25.1191 21.9137 23.133 23.9004 20.6925 23.9004H7.04187C4.60138 23.9004 2.6153 21.9137 2.6153 19.4725V6.98047Z" fill="#CAE84A"/>
							<path d="M13.8673 19.5884C17.3742 19.5884 20.2289 16.7344 20.2289 13.2249C20.2289 9.71537 17.3758 6.86139 13.8673 6.86139C10.3588 6.86139 7.50562 9.71537 7.50562 13.2249C7.50562 16.7344 10.3588 19.5884 13.8673 19.5884ZM13.8673 9.27629C16.045 9.27629 17.8162 11.0481 17.8162 13.2264C17.8162 15.4048 16.045 17.1766 13.8673 17.1766C11.6895 17.1766 9.91828 15.4048 9.91828 13.2264C9.91828 11.0481 11.6895 9.27629 13.8673 9.27629Z" fill="#CAE84A"/>
							<path d="M20.8176 7.8895C21.7619 7.8895 22.5316 7.12114 22.5316 6.17497C22.5316 5.22879 21.7635 4.46039 20.8176 4.46039C19.8717 4.46039 19.1035 5.22879 19.1035 6.17497C19.1035 7.12114 19.8717 7.8895 20.8176 7.8895Z" fill="#CAE84A"/>
						</svg>
					</div>
				</div>
			</div>
		</section>
	</div>
</header>

<section id="offer" class="py-16 md:py-24 lg:py-32 bg-dark-300">
	<div class="mx-auto max-w-screen-xl gap-12 md:gap-16 lg:gap-20 flex flex-col px-4 sm:px-8">
		<div class="flex flex-row gap-3 justify-center">
			<div class="ml-4 mr-3 border-r-2 p-0 border-primary rotate-45"></div>
			<h3 class="text-dark-50 font-semibold text-h4 lg:text-h3" id="offer-title">Oferta</h3>
		</div>
		<div class="grid grid-cols-6 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
			<div class="col-span-6 flex flex-col gap-4">

				<div class="flex flex-col gap-5">
					<h4 class="text-h4 font-semibold text-dark-50 off-p">EuPoL</h4>
					<p class="text-p2 font-semibold text-dark-150 font-primary off-p">
						Nasza firma EuPol działa w branży transportowej od ponad 20 lat. Wszystkim klientom zapewniamy punktualne transporty w każde miejsce i o każdej porze dnia oraz nocy. Nasi dotychczasowi pasażerowie zawsze byli zadowoleni z usług, jakie oferujemy, a wielu z nich regularnie z nich korzysta. Obsługujemy zarówno osoby prywatne, jak i firmy oraz instytucje.
					</p>
					<p class="text-p2 font-semibold text-dark-150 off-p">
						Mamy kilkunastoletnie doświadczenie jako zawodowi kierowcy. Wobec naszych klientów jesteśmy elastyczni i w miarę możliwości zawsze dopasowujemy się do ich oczekiwań. Z tego względu też nie ograniczamy się wyłącznie do transportu osób, bez problemu przewozimy towary.
					</p>
					<p class="text-p2 font-semibold text-dark-150 off-p">
						Podczas realizacji kursów zapewniamy miłą atmosferę oraz bezpieczne dotarcie do celu na czas.
					</p>
				</div>

			</div>
			<div class="col-span-6 flex flex-col gap-4 p-8 rounded-lg bg-[#ffffff]">

				<div class="flex flex-col gap-5">
					<h4 class="text-h4 font-semibold text-dark-50">Oferujemy</h4>
					<ul class="flex flex-col gap-2 list-image-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD6SURBVHgBrdI9DoIwFAfwVxMHNycTNo+gg8462jjoDfQE6gnkJngIQ9xkU2HAG8gGODlLQn1tsCamfPNPSB6P5tc+AKCBXPxF337SDa8J1Iz7WHSjztvFsh8D29UCE+yM5QAvr83iaWVQhQ21k9eCilFhvC9AF18qlIgdUkOFCRC/ziBqRa4T0n1hjMFKhckT8jAGeh4qMUJeKkyA4555JzFZ5qGin2BAmBKTJxxpRwsXr9NQfs/7X4wfAlIiRx5r5kGFSgzDJ8nCxJr/hu1THAuM5LGF/ESUuJnYNCfKH/vmU50Q+I1dEMsMR+2Asmsw20JTcfz5BErmAwspl/QoMUXUAAAAAElFTkSuQmCC')] pl-6">
						<li class="li">Obsługa firm - obsługa biznesowa firm</li>
						<li class="li">Wyjazdy służbowe</li>
						<li class="li">Imprezy zorganizowane</li>
						<li class="li">Obsługa Wesel</li>
						<li class="li">Przyjmowanie zleceń stałych, z wyprzedzeniem (terminowym)</li>
						<li class="li">Odbiór i obsługa gości z lotniska i dworców</li>
						<li class="li">Przewóz towarów do 3,5T DCM.</li>
					</ul>
				</div>

			</div>

		</div>
	</div>
</section>

<section id="payments" class="py-12 md:py-20 lg:py-26 bg-dark-300">
	<div class="mx-auto max-w-screen-xl gap-12 md:gap-16 lg:gap-20 flex flex-col px-4 sm:px-8">
		<div class="grid grid-cols-6 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
			<div class="col-span-6 md:col-span-9">
				<h4 class="font-primary font-semibold text-dark-50" id="payments-title">Nasza firma jest wyposażona w nowoczesne terminale płatnicze. Dzięki temu możemy przyjmować  dostępne płatności bezgotówkowe MasterCard i Visa, co zapewnia naszym klientom wygodę i bezpieczeństwo podczas podróży.</h4>
			</div>
			<div class="col-span-6 md:col-span-3">
				<enhanced:img src={Payments} alt="Payments image" />
			</div>
		</div>
	</div>
</section>

<footer id="footer">
	<div class="mx-auto max-w-screen-xl gap-20 flex flex-col px-4 sm:px-8">
		<div class="flex w-full max-[390px]:flex-col justify-between items-center max-[390px]:gap-6">

			<div class="bg-primary clip-logo min-w-52 max-w-52 p-4 flex justify-center content-center col-span-2">
				<h2 class="font-primary text-h2 text-dark-50 font-extrabold select-none">EuPol</h2>
			</div>
			<div class="flex w-full justify-center min-[390px]:justify-end mt-2">
				<div class="flex gap-4">
					<div class="p-4 rounded-full bg-dark-100/80 w-14 h-14 flex justify-center content-center hover:bg-dark-100/60 hover:cursor-pointer active:scale-95 hover:translate-y-0.5 duration-200">
						<svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.3314 6.67463V10.6409H15.3658L14.5686 15.9838H10.3314V28.2935C9.48184 28.4084 8.61266 28.4683 7.73039 28.4683C6.71199 28.4683 5.71191 28.3892 4.73801 28.2361V15.9838H0.0949707V10.6409H4.73801V5.78799C4.73801 2.77721 7.24214 0.335419 10.3327 0.335419V0.337973C10.3419 0.337973 10.3497 0.335419 10.3589 0.335419H15.3671V4.95619H12.0946C11.122 4.95619 10.3327 5.72547 10.3327 6.67335L10.3314 6.67463Z" fill="#CAE84A"/>
						</svg>
					</div>
					<div class="p-4 rounded-full bg-dark-100/80 w-14 h-14 flex justify-center content-center hover:bg-dark-100/60 hover:cursor-pointer active:scale-95 hover:translate-y-0.5 duration-200">
						<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20.6925 0.139221H7.04187C3.27063 0.139221 0.202637 3.20812 0.202637 6.98047V19.4725C0.202637 23.2448 3.27063 26.3137 7.04187 26.3137H20.6925C24.4638 26.3137 27.5317 23.2448 27.5317 19.4725V6.98047C27.5317 3.20812 24.4638 0.139221 20.6925 0.139221ZM2.6153 6.98047C2.6153 4.53926 4.60138 2.55258 7.04187 2.55258H20.6925C23.133 2.55258 25.1191 4.53926 25.1191 6.98047V19.4725C25.1191 21.9137 23.133 23.9004 20.6925 23.9004H7.04187C4.60138 23.9004 2.6153 21.9137 2.6153 19.4725V6.98047Z" fill="#CAE84A"/>
							<path d="M13.8673 19.5884C17.3742 19.5884 20.2289 16.7344 20.2289 13.2249C20.2289 9.71537 17.3758 6.86139 13.8673 6.86139C10.3588 6.86139 7.50562 9.71537 7.50562 13.2249C7.50562 16.7344 10.3588 19.5884 13.8673 19.5884ZM13.8673 9.27629C16.045 9.27629 17.8162 11.0481 17.8162 13.2264C17.8162 15.4048 16.045 17.1766 13.8673 17.1766C11.6895 17.1766 9.91828 15.4048 9.91828 13.2264C9.91828 11.0481 11.6895 9.27629 13.8673 9.27629Z" fill="#CAE84A"/>
							<path d="M20.8176 7.8895C21.7619 7.8895 22.5316 7.12114 22.5316 6.17497C22.5316 5.22879 21.7635 4.46039 20.8176 4.46039C19.8717 4.46039 19.1035 5.22879 19.1035 6.17497C19.1035 7.12114 19.8717 7.8895 20.8176 7.8895Z" fill="#CAE84A"/>
						</svg>
					</div>
				</div>
			</div>

		</div>
		<div class="flex w-full items-center flex-wrap justify-between mb-8 gap-6">
			<p class="font-primary text-p2 font-semibold text-dark-150">2024 © Eupol | Wszelkie prawa zastrzeżone.</p>
			<a href="/polityka-prywatnosci" class="font-primary text-p2 font-semibold text-dark-50">Polityka prywatności</a>
			<p class="font-primary text-p2 font-semibold text-dark-150">Projekt oraz wdrożenie strony: <a class="text-dark-50" href="https://www.hubertkruk.pl/">Hubert Kruk</a></p>
		</div>
	</div>
</footer>