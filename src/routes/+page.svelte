<script lang="ts">
    import { enhance } from "$app/forms";
    import Primary from "../components/buttons/primary.svelte";
	import About from "../components/parts/about.svelte";
	import Cars from "../components/parts/cars.svelte";
	import Contact from "../components/parts/contact.svelte";
	import Footer from "../components/parts/footer.svelte";
	import Header from "../components/parts/header.svelte";
	import Offer from "../components/parts/offer.svelte";
	import Payments from "$lib/images/payments.webp?enhanced";

	export let form;
</script>

<svelte:head>
	<meta charset="UTF-8">

	<meta property="url" content="https://eupol-przewoznik.pl">
	<meta name="description" content="Szybkie, wygodne i tanie przejazdy transportowe">
	<meta name="dcterms.description" lang="pl" content="EuPol - Twój komfort i bezpieczeństwo">
	<meta name="keywords" content="Przewoźnik EuPol Stalowa Wola Gorzyce Tarnobrzeg Sandomierz Zaleszany Wrzawy Zbydniów Nisko Przewozy Osób Transport Ludzi Transport Lotnisko Transport Gorzyce">
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
	<!-- <link rel="icon" href="https://eupol-przewoznik.pl/images/favicon.png" type="image/png"> -->

	<title>EuPol - Nowoczesny przewoźnik</title>
</svelte:head>

<Header />

<About />

<Offer />

<section id="info" class="bg-[url('/bginfo.webp')] bg-cover bg-no-repeat bg-center py-24 md:py-36 lg:py-42 px-2 relative">
	<div class="mx-auto max-w-screen-xl px-4 sm:px-8 gap-12 md:gap-16 lg:gap-20 flex flex-col">
		<h4 class="font-semibold font-primary text-dark-300 text-p1 md:text-h4 text-center">Transport to nasza specjalizacja już od blisko 20 lat. Potrzebujesz fachowej pomocy w kwestii organizacji transportu? Szukasz doświadczonej firmy , która dostarczy twoich klientów jak i towary na czas, bez komplikacji i z zachowaniem najwyższych standardów transportowych. Firma EuPol oferuje profesjonalne usługi transportowe osób oraz towarów. Nasz zespół zorganizuje transport uwzględniając wszystkie Twoje potrzeby takie jak czas, bezpieczeństwo i prywatność.</h4>
	</div>
</section>

<div style="contain: paint;">
	<Cars />
</div>

<section id="kontakt" class="py-16 md:py-24 lg:py-32 bg-dark-100">
	<div class="mx-auto max-w-screen-xl px-4 sm:px-8 gap-12 md:gap-16 lg:gap-20 flex flex-col">
		<div class="flex flex-row gap-3">
			<div class=" ml-4 mr-3 border-r-2 p-0 border-primary rotate-45"></div>
			<h3 class="text-dark-250 font-semibold text-h4 lg:text-h3">Pytania? Napisz do nas!</h3>
		</div>
		<div class="grid grid-cols-6 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20">
			{#if form?.success}<p class="w-full p-4 bg-green-600 rounded-lg text-gray-200 col-span-6 lg:col-span-12">Wiadomość wysłana. Odpowiemy jak najszybciej będzie to mozliwe. W razie potrzeby szybkiego kontaktu zapraszamy dzwonić na podany numer telefonu.</p>{/if}
			{#if form?.nameError}<p class="w-full p-4 bg-red-800 rounded-lg text-gray-200 col-span-6 lg:col-span-12">Pole imię i nazwisko jest wymagane i musi zawierać conajmniej 5 znaków.</p>{/if}
			{#if form?.emailError}<p class="w-full p-4 bg-red-800 rounded-lg text-gray-200 col-span-6 lg:col-span-12">Pole email jest wymagane i musi zawierać prawidłowy adres email.</p>{/if}
			{#if form?.phoneError}<p class="w-full p-4 bg-red-800 rounded-lg text-gray-200 col-span-6 lg:col-span-12">Pole numer telefonu może zawierać jedynie cyfry.</p>{/if}
			{#if form?.messageError}<p class="w-full p-4 bg-red-800 rounded-lg text-gray-200 col-span-6 lg:col-span-12">Pole wiadomość musi zawierać conajmniej 5 znaków.</p>{/if}
			{#if form?.checkboxError}<p class="w-full p-4 bg-red-800 rounded-lg text-gray-200 col-span-6 lg:col-span-12">Musisz zaakceptować zgodę na przetwarzanie danych.</p>{/if}
			<form method="POST" class="col-span-6 lg:col-span-9 flex flex-col gap-10" use:enhance>
				<div class="flex flex-col lg:flex-row gap-8">

					<div class="relative h-11 w-full min-w-[200px]">
						<input placeholder="Imię i nazwisko" name="name"
						  class="peer h-full w-full border-b border-dark-150 bg-transparent pt-4 pb-6 font-primary font-bold text-h4 font-normal text-dark-300 outline outline-0 transition-all placeholder-shown:border-blue-dark-150 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
						<label
						  class="after:content[''] pointer-events-none absolute left-0  -top-5 flex h-full w-full select-none !overflow-visible truncate text-[14px] font-semibold leading-tight text-dark-200 transition-all after:absolute after:-bottom-5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-100 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark-400 peer-focus:after:scale-x-100 peer-focus:after:border-dark-300 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
						  Imię i nazwisko
						</label>
					 </div>
					 <div class="relative h-11 w-full min-w-[200px]">
						<input placeholder="Numer telefonu" name="phone"
						  class="peer h-full w-full border-b border-dark-150 bg-transparent pt-4 pb-6 font-primary font-bold text-h4 font-normal text-dark-300 outline outline-0 transition-all placeholder-shown:border-blue-dark-150 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
						<label
						  class="after:content[''] pointer-events-none absolute left-0  -top-5 flex h-full w-full select-none !overflow-visible truncate text-[14px] font-semibold leading-tight text-dark-200 transition-all after:absolute after:-bottom-5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-100 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark-400 peer-focus:after:scale-x-100 peer-focus:after:border-dark-300 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
						  Numer telefonu
						</label>
					 </div>

				</div>
				<div class="relative h-11 w-full min-w-[200px]">
					<input placeholder="Adres" type="email" name="email"
					  class="peer h-full w-full border-b border-dark-150 bg-transparent pt-4 pb-6 font-primary font-bold text-h4 font-normal text-dark-300 outline outline-0 transition-all placeholder-shown:border-blue-dark-150 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
					<label
					  class="after:content[''] pointer-events-none absolute left-0  -top-5 flex h-full w-full select-none !overflow-visible truncate text-[14px] font-semibold leading-tight text-dark-200 transition-all after:absolute after:-bottom-5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-100 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark-400 peer-focus:after:scale-x-100 peer-focus:after:border-dark-300 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
					  Adres email
					</label>
				 </div>
				 <div class="relative w-full min-w-[200px] -mt-4">
					<textarea name="message"
					  class="peer h-full min-h-[150px] w-full resize-none border-b border-dark-150 bg-transparent pt-4 pb-6 font-primary font-bold text-h4 font-normal text-dark-300 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
					  placeholder=""></textarea>
					<label
					  class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[14px] font-semibold leading-tight text-dark-200 transition-all after:absolute after:-bottom-2 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-100  after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark-400 peer-focus:after:scale-x-100 peer-focus:after:border-dark-300 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
					  Treść wiadomości
					</label>
				 </div>

				 <div class="inline-flex items-center -mt-4 -ml-2">
					<label class="relative flex items-center p-2 rounded-full cursor-pointer" for="checkbox">
					  <input type="checkbox" name="checkbox"
						 class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-primary checked:before:bg-gray-900 hover:before:opacity-10"
						 id="checkbox" />
					  <span
						 class="absolute text-grey-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
						 <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
							stroke="currentColor" stroke-width="1">
							<path fill-rule="evenodd"
							  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							  clip-rule="evenodd"></path>
						 </svg>
					  </span>
					</label>
					<label class="mt-px text-gray-200 cursor-pointer select-none font-primary font-semibold" for="checkbox">
							Wyrażam zgodę na przetwarzanie moich danych osobowych oraz akceptuję <a class="text-gray-400 hover:text-gray-200" href="/polityka-prywatnosci">politykę prywatności.</a>
					 </label>
				 </div> 

				 <div class="inline-flex">
					<Primary oftype="submit">Wyślij wiadomość</Primary>
				 </div>
			</form>
			<div class="col-span-6 lg:col-span-3">
				<div class="flex flex-col gap-8">
					<div class="flex flex-row gap-3">
						<div class="ml-4 mr-3 border-r-2 p-0 border-primary rotate-45"></div>
						<h3 class="text-dark-250 font-semibold text-h4">+48 664 175 003</h3>
					</div>
					<div class="flex flex-row gap-3">
						<div class="ml-4 mr-3 border-r-2 p-0 border-primary rotate-45"></div>
						<h3 class="text-dark-250 font-semibold text-h4">+48 669 955 685</h3>
					</div>
					<div class="flex flex-row gap-3">
						<div class="ml-4 mr-3 border-r-2 p-0 border-primary rotate-45"></div>
						<h3 class="text-dark-250 font-semibold text-h4">krzysztof.eupol@gmail.com </h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="payments" class="py-12 md:py-20 lg:py-26 bg-dark-300">
	<div class="mx-auto max-w-screen-xl gap-12 md:gap-16 lg:gap-20 flex flex-col px-4 sm:px-8">
		<div class="grid grid-cols-6 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
			<div class="col-span-6 md:col-span-9">
				<h4 class="font-primary font-semibold text-dark-50">Nasza firma, jako pionier w Gorzycach, wyposażyła wszystkich swoich kierowców w nowoczesne terminale płatnicze. Dzięki temu możemy przyjmować wszystkie dostępne na rynku formy płatności bezgotówkowych, co zapewnia naszym klientom wygodę i bezpieczeństwo podczas podróży.</h4>
			</div>
			<div class="col-span-6 md:col-span-3">
				<enhanced:img src={Payments} alt="Payments image" />
			</div>
		</div>
	</div>
</section>

<Footer />

<style>
	.clip-logo {
		clip-path: polygon(0 0, 100% 0, 100% 100%, 12% 100%, 0 80%);
	}
	.clip-rectangle {
		clip-path: polygon(100% 0, 100% 100%, 15% 100%, 0 81%, 0 0);
	}
	.item-grid {
		transform: translateX(0px);
		transition: transform 0.3s ease-out;
	}
	.item-car-h3 {
		transform: translateX(0px);
		transition: transform 0.3s ease-out;	
	}
</style>
