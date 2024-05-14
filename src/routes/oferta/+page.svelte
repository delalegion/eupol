<script lang="ts">
	import { onMount } from "svelte";
   import Outline from "../../components/buttons/outline.svelte";

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

<header id="header" class="bg-[url('/bg.webp')] bg-cover bg-no-repeat bg-center xl:bg-left pb-24 relative">
	<div class="bg-gradient-to-b from-dark-50/90 absolute top-0 right-0 left-0 -z-0 w-full h-28"></div>
	<div class="mx-auto max-w-screen-xl justify-between content-between h-full flex flex-col px-4 sm:px-8">
		<navbar class="navbar grid grid-cols-12 z-10">
			<div class="bg-primary clip-logo max-w-52 p-4 flex justify-center content-center col-span-6 min-[425px]:col-span-4 md:col-span-2 px-5">
				<a href="/" class="font-primary text-h3 xl:text-h2 text-dark-50 font-extrabold select-none">EuPol</a>
			</div>
			<div class="h-full border-b-2 border-dark-250/50 w-full min-[425px]:justify-between col-span-6 min-[425px]:col-span-8 md:col-span-10 pl-6 flex content-center justify-end">
				<div class="py-4 content-center hidden min-[425px]:block">
					<a href="tel:+48123123123" class="flex gap-3 font-semibold text-gray-50"><span class="text-primary font-bold">/</span> +48 123 123 123</a>
				</div>
				<div class="py-2 md:py-4 content-center">
					<ul id="menu" class="hidden md:flex md:bg-transparent bg-primary p-8 md:p-0 w-full flex-row gap-6 lg:gap-12 flex flex-col absolute left-4 right-4 md:right-0 top-20 md:left-0 md:top-0 md:relative md:flex-row">
						<li class="content-center"><a href="/#onas" class="font-semibold text-dark-50 md:text-gray-50 text-p1">O NAS</a></li>
						<li class="content-center"><a href="/oferta" class="font-semibold text-dark-50 md:text-gray-50 text-p1">OFERTA</a></li>
						<li class="content-center"><a href="/#flota" class="font-semibold text-dark-50 md:text-gray-50 text-p1">NASZA FLOTA</a></li>
						<li class="content-center flex md:hidden"><a href="/#kontakt" class="font-semibold text-dark-50 md:text-gray-50 text-p1">KONTAKT</a></li>
						<li class="hidden md:flex"><Outline size="small" link="#kontakt">Kontakt</Outline></li>
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
			<h1 class="text-dark-300 font-primary text-h3 lg:text-h2 xl:text-h1 text-wrap break-words">Oferta</h1>
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
			<h3 class="text-dark-50 font-semibold text-h4 lg:text-h3">Oferta</h3>
		</div>
		<div class="grid grid-cols-6 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
			<div class="col-span-6 md:col-span-4 flex flex-col gap-4">

				<div class="h-28 flex max-h-28">
					<svg width="163" height="120" viewBox="0 0 163 120" fill="none" class="max-h-28" xmlns="http://www.w3.org/2000/svg">
						<line x1="161.707" y1="11.7071" x2="81.7071" y2="91.7071" stroke="#CAE84A" stroke-width="2"/>
						<line x1="98.7071" y1="20.7071" x2="18.7071" y2="100.707" stroke="#CAE84A" stroke-width="2"/>
						<path d="M6.76003 65.552C6.76003 65.552 7.26403 62.952 8.66403 61.12C10.064 59.288 14.112 52.88 22.728 50.664C31.344 48.448 37.304 46.736 40.344 46.168C43.384 45.6 49.28 38.184 56.568 35.52C63.856 32.856 84.64 31.848 95.032 33.304C105.424 34.76 106.568 40.208 108.656 40.848C110.744 41.488 114.104 42.432 113.792 50.672C113.48 58.912 112.336 59.736 112.336 59.736C112.336 59.736 111.704 66.52 108.408 66.896C105.112 67.272 102.2 65.568 102.2 65.568L77.04 80.456C77.04 80.456 74.44 93.32 66.776 93.32C59.112 93.32 60 91.232 60 91.232C60 91.232 47.512 95.544 37.56 93.32C27.608 91.096 13.672 85.208 10.696 82.864C7.72003 80.52 4.42403 79.192 7.33603 74.88C7.33603 74.88 5.62403 70.696 6.76803 65.568L6.76003 65.552Z" fill="#F8F9FA" stroke="#16181C" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M75.7148 79.9664C76.95 73.8243 75.3422 68.3204 72.1239 67.6732C68.9055 67.026 65.2953 71.4806 64.0601 77.6228C62.825 83.7649 64.4327 89.2688 67.6511 89.916C70.8694 90.5631 74.4797 86.1086 75.7148 79.9664Z" stroke="#16181C" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M111.895 58.9397C112.328 55.4183 111.726 52.4466 110.551 52.3021C109.375 52.1576 108.072 54.895 107.639 58.4164C107.206 61.9377 107.807 64.9095 108.983 65.054C110.158 65.1985 111.462 62.4611 111.895 58.9397Z" stroke="#16181C" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M32.008 67.936L34.464 70.872C34.84 71.32 35.416 71.544 35.992 71.464C37.408 71.264 40.056 70.992 40.88 71.608C42.024 72.464 44.968 73.984 47.248 73.792C49.528 73.6 53.856 73.016 55.136 72.368C57.072 71.384 59.432 64.752 58.08 64.92C54.232 65.408 37.272 66.544 32.456 66.864C31.928 66.896 31.656 67.52 32 67.936H32.008Z" stroke="#16181C" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M45.56 46.944C51.624 47.72 69.28 49.912 75.952 49.936C76.856 49.936 77.664 49.4 77.992 48.56C79 46.008 81.272 40.432 82.856 37.72C83.224 37.088 82.808 36.296 82.08 36.264C77.816 36.048 66.856 35.52 61.144 35.584C59.464 35.6 57.84 36.088 56.424 36.992C53.44 38.896 47.96 42.496 45 45.136C44.328 45.736 44.664 46.848 45.56 46.96V46.944Z" stroke="#16181C" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M7.25598 63.824L10.752 61.312L10.12 59.168" stroke="#16181C" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M92.288 36.192L94.768 45.008C94.88 45.408 94.656 45.816 94.256 45.944L93.1201 46.296C93.1201 46.296 94.048 46.928 94.072 48.008C94.112 49.576 89.552 50.632 85.456 49.528C83.384 48.968 80.576 49.936 80.576 49.936C80.576 49.936 82.872 36.752 91.456 35.632C91.832 35.584 92.176 35.832 92.28 36.2L92.288 36.192Z" stroke="#16181C" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M84.488 49.368L83.944 47.808C83.944 47.808 85.504 42.456 93.12 46.288" stroke="#16181C" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M94.1039 35.928L96.8479 44.48C96.9439 44.768 97.2479 44.928 97.5359 44.84L103.328 43.144C103.672 43.04 103.856 42.672 103.728 42.344C103.12 40.792 101.496 36.8 100.688 36.272C100.224 35.976 97.8879 35.432 94.5599 35.304C94.2399 35.288 94.0079 35.616 94.1119 35.912L94.1039 35.928Z" stroke="#16181C" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M66.3716 33.9306C66.2928 34.8501 67.0027 35.4332 67.6769 35.5331L67.6768 35.5342C68.9569 35.7141 72.0663 35.9272 75.2241 36.0374C78.3618 36.1467 81.7009 36.1609 83.395 35.9091L83.3958 35.909C84.0314 35.814 84.3006 35.2808 84.3835 35.0912C84.4969 34.8319 84.5564 34.5388 84.5891 34.2719C84.6564 33.7245 84.6384 33.051 84.5347 32.3965C84.4321 31.7492 84.2323 31.034 83.8782 30.4469C83.524 29.8596 82.9112 29.249 81.9787 29.2166C80.1508 29.153 72.3031 29.0059 69.7481 29.2028C68.2483 29.3158 67.4286 30.4197 67.0075 31.3651C66.5831 32.3179 66.4366 33.3637 66.3746 33.9013L66.3729 33.9159L66.3716 33.9306Z" fill="#CAE84A" stroke="#16181C" stroke-width="2"/>
					</svg>						
				</div>
				<div class="flex flex-col gap-5">
					<h4 class="text-h4 font-semibold text-dark-50">Taxi osobowe</h4>
					<p class="text-p2 font-semibold text-dark-150">
						Oferujemy przewóz osób jako naszą główną usługę, cieszącą się największym popytem. Dzięki naszym konkurencyjnym cenom oraz wysokiej jakości obsługi, zdobywamy zaufanie coraz większego grona klientów. Dla jeszcze większej wygody naszych pasażerów wprowadziliśmy również opcję płatności kartą.
					</p>
				</div>

			</div>
			<div class="col-span-6 md:col-span-4 flex flex-col gap-4">

				<div class="h-28 max-h-28">
					<svg width="130" height="99" viewBox="0 0 130 99" fill="none" class="max-h-28" xmlns="http://www.w3.org/2000/svg">
						<line x1="79.9561" y1="0.512052" x2="126.549" y2="83.8601" stroke="#CAE84A" stroke-width="2"/>
						<line x1="53.9493" y1="42.75" x2="86.1226" y2="98.4759" stroke="#CAE84A" stroke-width="2"/>
						<path d="M29.8654 56.848C29.8654 56.848 8.85738 55.5133 7.31472 55.9206C5.77205 56.328 4.63672 57.9833 4.63672 57.9833L24.9254 62.412L24.31 66.9446L33.3754 64.986L44.5987 70.342L48.7154 67.56L44.4947 62.204C44.4947 62.204 49.0274 62.204 52.832 61.1726C56.6367 60.1413 65.3987 52.9393 66.8374 52.9393C68.2761 52.9393 69.4114 53.1473 69.8274 52.9393C70.2434 52.7313 71.4741 55.002 71.4741 55.002L76.934 52.9306L75.1834 50.3653H76.934C76.934 50.3653 86.3027 49.542 90.012 50.8766C93.7214 52.2113 117.607 58.8066 119.357 59.318C121.108 59.8293 122.651 61.0686 123.89 61.1726C125.129 61.2766 125.433 59.318 123.474 58.3906C121.515 57.4633 100.1 47.0633 100.1 47.0633C100.1 47.0633 101.955 44.8966 99.4847 43.666C97.0147 42.4353 93.5134 43.666 93.5134 43.666L88.2614 41.196C88.2614 41.196 99.9007 35.1206 101.851 33.37C103.801 31.6193 104.633 28.534 102.882 26.7833C101.131 25.0326 96.4947 24.9286 92.0661 26.7833C87.6374 28.638 69.9314 37.5993 69.9314 37.5993C69.9314 37.5993 66.586 36.36 65.0174 36.984C63.4487 37.608 61.282 37.5993 61.282 37.5993L12.3674 34.202L9.68939 35.3373L23.2787 37.4L22.3514 38.3273L29.8654 56.8653V56.848Z" fill="#F8F9FA" stroke="#16181C" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M29.5535 38.2059C29.5535 38.2059 39.5375 49.9406 42.4235 50.1486C45.3095 50.3566 55.3975 44.1773 55.3975 44.1773C55.3975 44.1773 52.9275 43.7873 50.4575 42.9033C47.9875 42.0193 29.5535 38.2059 29.5535 38.2059Z" stroke="#16181C" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M31.0962 63.4345L42.4755 59.0059" stroke="#16181C" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M64.6879 50.0446L55.3972 55.0972" stroke="#16181C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M80.366 41.5079L70.7373 46.7513" stroke="#16181C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M93.5914 34.306L87.0828 37.8507" stroke="#16181C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M101.738 29.8685L97.24 32.3212" stroke="#16181C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M22.3428 38.31L27.2308 36.4727L29.5534 38.206" stroke="#16181C" stroke-width="2" stroke-miterlimit="10"/>
					</svg>											
				</div>
				<div class="flex flex-col gap-5">
					<h4 class="text-h4 font-semibold text-dark-50">Transfer na lotnisko</h4>
					<p class="text-p2 font-semibold text-dark-150">
						Nasze taksówki zapewnią Ci transport do dowolnego lotniska w Polsce. Nieznasz miasta, poszukujesz godziwego kierowcy, który wybierze optymalną trasę i dostarczy Cię do celu za rozsądne pieniądze? U nas możesz liczyć na uczciwość, to nasza gwarancja.
					</p>
				</div>

			</div>
			<div class="col-span-6 md:col-span-4 flex flex-col gap-4">

				<div class="h-28 max-h-28">
					<svg width="145" height="120" viewBox="0 0 145 120" fill="none" class="max-h-28" xmlns="http://www.w3.org/2000/svg">
						<line x1="143.707" y1="0.707107" x2="63.7071" y2="80.7071" stroke="#CAE84A" stroke-width="2"/>
						<line x1="80.7071" y1="9.70711" x2="0.707108" y2="89.7071" stroke="#CAE84A" stroke-width="2"/>
						<path d="M34.888 107.536C35.048 108.792 36.16 109.712 37.424 109.632C39.416 109.504 43 109.424 46.008 110.112C50.44 111.128 73.632 113.28 77.816 113.912C82 114.544 85.04 115.056 87.32 113.912C89.6 112.768 90.36 111.632 92.136 111.248C93.912 110.864 96.696 108.84 96.824 107.192C96.952 105.544 92.768 69.176 92.768 69.176H91.376C91.376 69.176 89.032 66.264 87.512 65.624C85.992 64.984 84.216 52.256 84.216 52.256C84.216 52.256 84.216 50.416 83.96 50.168C83.704 49.92 83.136 49.28 83.136 49.28H82.056C82.056 49.28 80.6 44.848 80.28 44.144C79.96 43.44 78.44 42.944 78.44 42.944C78.44 42.944 78.568 39.84 78 37.808C77.432 35.776 76.8 35.272 76.16 33.688C75.52 32.104 74.832 30.896 74.384 30.52C73.936 30.144 70.776 28.368 70.392 27.352C70.008 26.336 69.248 25.072 68.488 24.624C67.728 24.176 65.512 22.848 61.392 22.912C57.272 22.976 58.984 23.544 57.208 24.88C55.432 26.216 55.944 27.096 55.056 27.792C54.168 28.488 53.152 29.76 53.152 29.76C53.152 29.76 52.648 28.68 51.44 28.616C50.232 28.552 47.704 28.872 47.384 29.248C47.064 29.624 44.472 30.64 44.152 31.272C43.832 31.904 39.144 22.656 35.728 19.424C32.312 16.192 28.064 13.848 25.208 15.176C22.352 16.504 20.776 19.232 20.264 20.944C19.752 22.656 20.008 24.936 22.232 27.216C24.456 29.496 28.696 32.224 30.656 35.008C32.616 37.792 36.616 41.28 37.496 42.992C38.376 44.704 39.336 46.096 39.336 46.096C39.336 46.096 42.248 60.48 43.328 63.208C44.408 65.936 44.976 68.784 44.344 71C43.712 73.216 41.304 80.696 40.672 82.848C40.04 85 37.376 93.304 37 95.144C36.624 96.984 36.048 100.528 35.48 102.048C34.912 103.568 34.336 104.52 34.656 106.04C34.752 106.512 34.808 107.032 34.872 107.528L34.888 107.536Z" fill="#F8F9FA" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M31.72 19.296L42.88 33.552" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M47.5679 44.392C47.5679 44.392 41.2959 33.56 46.9359 32.16C52.5759 30.76 59.3519 41.16 60.7519 44.392" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M66.3839 44.008L60.7439 37.296" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M38.8721 45.352C38.8721 45.352 40.7201 44.968 41.1041 44.392C41.4881 43.816 42.2481 42.808 43.6401 43.696C45.0321 44.584 45.9201 45.848 47.5681 45.088C49.2161 44.328 53.2081 40.336 54.9841 41.416C56.7601 42.496 56.8241 44.712 59.4161 44.84C62.0081 44.968 66.6401 43.696 68.0321 44.016C69.4241 44.336 70.2481 45.096 72.5281 44.968C74.8081 44.84 76.8401 45.096 77.8481 45.096C78.8561 45.096 80.6241 45.04 80.6241 45.04" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M43.6399 43.696C43.6399 43.696 42.8799 37.488 42.8799 35.52C42.8799 33.552 42.7519 32.792 44.1759 31.272" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M48.032 28.968C48.032 28.968 53.392 29.808 55.232 32.032C57.072 34.256 58.784 35.264 58.784 35.264C58.784 35.264 59.104 35.328 59.04 33.552C58.976 31.776 59.384 31.528 60.008 30.704C60.632 29.88 60.944 29.328 60.44 28.968C59.936 28.608 59.528 28.232 59.76 27.536C59.992 26.84 60.312 26.584 61.32 25.696C62.328 24.808 63.16 24.368 63.568 24.368C63.976 24.368 64.424 25.192 65.504 25.448C66.584 25.704 67.024 25.448 67.024 25.448L67.696 24.176" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M58.7839 35.264C58.7839 35.264 57.4559 36.592 57.3919 36.784C57.3279 36.976 58.2159 38.496 59.1679 38.208C60.1199 37.92 61.1919 36.656 62.4639 35.264C63.7359 33.872 64.9359 32.416 64.1759 32.416C63.4159 32.416 63.4799 33.808 62.5279 32.032C61.5759 30.256 60.7519 29.72 60.7519 29.72" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M64.6719 27.28C64.6719 27.28 66.0719 28.928 67.6879 29.248C69.3039 29.568 70.1919 29.312 69.8719 30.448C69.5519 31.584 69.1119 31.904 68.8559 32.032C68.5999 32.16 66.7679 31.08 66.1279 30.64C65.4879 30.2 65.0479 29.056 65.0479 29.056" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M61.52 36.304L65.624 36.032C65.624 36.032 65.184 36.984 66.384 37.744C67.584 38.504 68.096 38.504 68.032 39.584C67.968 40.664 69.376 40.848 68.032 41.8C66.688 42.752 65.592 43.08 65.592 43.08" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M70.5681 33.048C70.5681 33.048 71.0721 35.896 71.6481 36.28C72.2241 36.664 72.7921 37.48 72.7921 37.48C72.7921 37.48 73.4241 36.152 73.2321 34.688C73.0401 33.224 72.7921 33.04 72.7921 32.024C72.7921 31.008 72.6001 30.696 72.8561 30.696" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M70.5681 40.3359C70.5681 40.3359 71.6481 42.5759 72.8481 43.0719C74.0481 43.5679 75.9521 42.0479 76.2721 42.4879C76.5921 42.9279 77.5361 44.0079 77.5361 44.0079L78.4561 42.9279" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M69.4561 50.064C69.4561 50.064 74.1121 54.72 76.3921 59.472C78.6721 64.224 81.1441 67.744 81.5281 75.824C81.9121 83.904 83.3361 96.168 84.0961 99.872C84.8561 103.576 86.1201 114.344 86.1201 114.344" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M79.824 66.784C79.824 66.784 80.36 65.992 80.232 64.096C80.192 63.456 80.064 62.128 79.912 60.616C79.608 57.64 79.176 53.928 78.968 53.256C78.648 52.24 78.864 50.344 79.608 50.056C80.352 49.768 82.072 49.264 82.072 49.264" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M79.9121 60.616C79.9121 60.616 82.6401 59.824 84.2881 60" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M51.144 49.2721C51.144 49.2721 53.112 47.9761 54.696 50.0641C56.28 52.1521 57.8 51.0801 59.192 56.0241C60.584 60.9681 63.184 63.5681 63.568 63.9441" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
					</svg>						
				</div>
				<div class="flex flex-col gap-5">
					<h4 class="text-h4 font-semibold text-dark-50">Zakupy na telefon</h4>
					<p class="text-p2 font-semibold text-dark-150">
						Jeśli zabiegany tryb życia nie pozwala Ci znaleźć czasu na zakupy, nie martw się - wystarczy, że skontaktujesz się z nami. Nasz kierowca z chęcią zrealizuje je za Ciebie, pozostając w stałym kontakcie telefonicznym, aby upewnić się, że niczego nie pominie. Nasza usługa jest dostępna dla Ciebie o dowolnej porze dnia i nocy.
					</p>
				</div>

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
			<a href="#" class="font-primary text-p2 font-semibold text-dark-50">Polityka prywatności</a>
			<p class="font-primary text-p2 font-semibold text-dark-150">Projekt oraz wdrożenie strony: <a class="text-dark-50" href="https://www.hubertkruk.pl/">Hubert Kruk</a></p>
		</div>
	</div>
</footer>