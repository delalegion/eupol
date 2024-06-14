<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from 'svelte/transition';
	import Outline from "../buttons/outline.svelte";
	import Primary from "../buttons/primary.svelte";
	import { gsap } from "gsap";

	onMount(() => {
		let menu: HTMLElement = document.querySelector("#menu")!;
		let btn: HTMLButtonElement = document.querySelector("#btn-menu")!;

		btn.addEventListener("click", () => {
			menu.classList.toggle("hidden");
	}, false);

		//GSAP
		gsap.from('#navbar', {
			scrollTrigger: '#navbar', // start animation when ".box" enters the viewport
			y: -40,
			opacity: 0,
			duration: 1,
			ease: "expo.out",
		});
		gsap.from('#title-1', {
			scrollTrigger: '#title-1', // start animation when ".box" enters the viewport
			y: -40,
			opacity: 0,
			delay: 0.34,
			duration: 1,
			ease: "expo.out",
		});
		gsap.from('#title-2', {
			scrollTrigger: '#title-2', // start animation when ".box" enters the viewport
			y: -40,
			opacity: 0,
			delay: 0.6,
			duration: 1,
			ease: "expo.out",
		});
		gsap.from('#header-buttons', {
			scrollTrigger: '#header-buttons', // start animation when ".box" enters the viewport
			y: -40,
			opacity: 0,
			delay: 0.8,
			duration: 1,
			ease: "expo.out",
		});
	})

	export let en = false;

</script>

{#if en === true}

<header id="header" class="h-screen bg-[url('/bg.webp')] bg-cover bg-no-repeat bg-center xl:bg-left pb-24 relative">
	<div class="bg-gradient-to-b from-dark-50/90 absolute top-0 right-0 left-0 -z-0 w-full h-28"></div>
	<div class="mx-auto max-w-screen-xl justify-between content-between h-full flex flex-col px-4 sm:px-8">
		<navbar class="navbar grid grid-cols-12 z-10 min-h-24" id="navbar">
			<div class="bg-primary clip-logo max-w-52 p-4 flex justify-center content-center col-span-6 min-[425px]:col-span-4 md:col-span-2 px-5 max-h-24">
				<a href="/en/" class="font-primary text-h3 xl:text-h2 text-dark-50 font-extrabold select-none h-full flex items-center">EuPol</a>
			</div>
			<div class="h-full border-b-2 border-dark-250/50 w-full min-[425px]:justify-between col-span-6 min-[425px]:col-span-8 md:col-span-10 pl-6 flex content-center justify-end">
				<div class="py-4 content-center hidden min-[425px]:inline-flex flex-col gap-2 justify-center">
					<a href="tel:+48664175003" class="flex gap-3 font-semibold text-gray-50"><span class="text-primary font-bold">/</span> +48 664 175 003</a>
					<a href="tel:+48669955685" class="flex gap-3 font-semibold text-gray-50"><span class="text-primary font-bold">/</span> +48 669 955 685</a>
				</div>
				<div class="py-2 md:py-4 content-center">
					<ul id="menu" class="hidden md:flex md:bg-transparent bg-primary p-8 md:p-0 w-full flex-row gap-6 lg:gap-12 flex flex-col absolute md:right-0 top-20 left-0 md:top-0 md:relative md:flex-row">
						<li class="content-center"><a href="/en/#onas" class="font-semibold text-dark-50 md:text-gray-50 text-p1">ABOUT US</a></li>
						<li class="content-center"><a href="/en/offer" class="font-semibold text-dark-50 md:text-gray-50 text-p1">OFFER</a></li>
						<li class="content-center"><a href="/en/#flota" class="font-semibold text-dark-50 md:text-gray-50 text-p1">OUR FLEET</a></li>
						<li class="content-center flex md:hidden"><a href="/en/#kontakt" class="font-semibold text-dark-50 md:text-gray-50 text-p1">CONTACT</a></li>
						<li class="hidden md:flex"><Outline size="small" link="/en/#kontakt">CONTACT</Outline></li>
						<li class="content-center"><a href="/" class="font-semibold text-dark-50 md:text-gray-50 text-p1">PL</a></li>
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
		<section id="jumbotron" class="flex flex-col gap-4 lg:gap-6">
			<h1 class="text-dark-300 font-primary text-h3 lg:text-h2 xl:text-h1 text-wrap break-words" id="title-1">EuPol - Your comfort <br/>and safety</h1>
			<h4 class="text-p1 lg:text-h4 font-primary text-dark-300" id="title-2">Safe and convenient transportation rides</h4>
			<div class="flex gap-4 mt-3 flex-wrap" id="header-buttons">
				<Primary>Our vehicles</Primary>
				<Outline>About us</Outline>
			</div>
			<div class="flex w-full justify-end mt-2">
				<div class="flex gap-4">
					<a href="https://www.facebook.com/share/Lffse3cL5e6zHKVe/?mibextid=LQQJ4d" target="_blank" class="p-4 rounded-full bg-[#EAEAEA]/20 w-14 h-14 flex justify-center content-center hover:bg-[#EAEAEA]/30 hover:cursor-pointer active:scale-95 hover:translate-y-0.5 duration-200">
						<svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.3314 6.67463V10.6409H15.3658L14.5686 15.9838H10.3314V28.2935C9.48184 28.4084 8.61266 28.4683 7.73039 28.4683C6.71199 28.4683 5.71191 28.3892 4.73801 28.2361V15.9838H0.0949707V10.6409H4.73801V5.78799C4.73801 2.77721 7.24214 0.335419 10.3327 0.335419V0.337973C10.3419 0.337973 10.3497 0.335419 10.3589 0.335419H15.3671V4.95619H12.0946C11.122 4.95619 10.3327 5.72547 10.3327 6.67335L10.3314 6.67463Z" fill="#CAE84A"/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	</div>
</header>

{:else}

<header id="header" class="h-screen bg-[url('/bg.webp')] bg-cover bg-no-repeat bg-center xl:bg-left pb-24 relative">
	<div class="bg-gradient-to-b from-dark-50/90 absolute top-0 right-0 left-0 -z-0 w-full h-28"></div>
	<div class="mx-auto max-w-screen-xl justify-between content-between h-full flex flex-col px-4 sm:px-8">
		<navbar class="navbar grid grid-cols-12 z-10 min-h-24" id="navbar">
			<div class="bg-primary clip-logo max-w-52 p-4 flex justify-center content-center col-span-6 min-[425px]:col-span-4 md:col-span-2 px-5 max-h-24">
				<a href="/" class="font-primary text-h3 xl:text-h2 text-dark-50 font-extrabold select-none h-full flex items-center">EuPol</a>
			</div>
			<div class="h-full border-b-2 border-dark-250/50 w-full min-[425px]:justify-between col-span-6 min-[425px]:col-span-8 md:col-span-10 pl-6 flex content-center justify-end">
				<div class="py-4 content-center hidden min-[425px]:inline-flex flex-col gap-2 justify-center">
					<a href="tel:+48664175003" class="flex gap-3 font-semibold text-gray-50"><span class="text-primary font-bold">/</span> +48 664 175 003</a>
					<a href="tel:+48669955685" class="flex gap-3 font-semibold text-gray-50"><span class="text-primary font-bold">/</span> +48 669 955 685</a>
				</div>
				<div class="py-2 md:py-4 content-center">
					<ul id="menu" class="hidden md:flex md:bg-transparent bg-primary p-8 md:p-0 w-full flex-row gap-6 lg:gap-12 flex flex-col absolute md:right-0 top-20 left-0 md:top-0 md:relative md:flex-row">
						<li class="content-center"><a href="#onas" class="font-semibold text-dark-50 md:text-gray-50 text-p1">O NAS</a></li>
						<li class="content-center"><a href="/oferta" class="font-semibold text-dark-50 md:text-gray-50 text-p1">OFERTA</a></li>
						<li class="content-center"><a href="#flota" class="font-semibold text-dark-50 md:text-gray-50 text-p1">NASZA FLOTA</a></li>
						<li class="content-center flex md:hidden"><a href="#kontakt" class="font-semibold text-dark-50 md:text-gray-50 text-p1">KONTAKT</a></li>
						<li class="hidden md:flex"><Outline size="small" link="#kontakt">Kontakt</Outline></li>
						<li class="content-center"><a href="/en" class="font-semibold text-dark-50 md:text-gray-50 text-p1">EN</a></li>
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
		<section id="jumbotron" class="flex flex-col gap-4 lg:gap-6">
			<h1 class="text-dark-300 font-primary text-h3 lg:text-h2 xl:text-h1 text-wrap break-words" id="title-1">EuPol - Twój komfort <br/>i bezpieczeństwo</h1>
			<h4 class="text-p1 lg:text-h4 font-primary text-dark-300" id="title-2">Bezpieczne i wygodne przejazdy transportowe</h4>
			<div class="flex gap-4 mt-3 flex-wrap" id="header-buttons">
				<Primary>Nasze pojazdy</Primary>
				<Outline>O nas</Outline>
			</div>
			<div class="flex w-full justify-end mt-2">
				<div class="flex gap-4">
					<a href="https://www.facebook.com/share/Lffse3cL5e6zHKVe/?mibextid=LQQJ4d" target="_blank" class="p-4 rounded-full bg-[#EAEAEA]/20 w-14 h-14 flex justify-center content-center hover:bg-[#EAEAEA]/30 hover:cursor-pointer active:scale-95 hover:translate-y-0.5 duration-200">
						<svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.3314 6.67463V10.6409H15.3658L14.5686 15.9838H10.3314V28.2935C9.48184 28.4084 8.61266 28.4683 7.73039 28.4683C6.71199 28.4683 5.71191 28.3892 4.73801 28.2361V15.9838H0.0949707V10.6409H4.73801V5.78799C4.73801 2.77721 7.24214 0.335419 10.3327 0.335419V0.337973C10.3419 0.337973 10.3497 0.335419 10.3589 0.335419H15.3671V4.95619H12.0946C11.122 4.95619 10.3327 5.72547 10.3327 6.67335L10.3314 6.67463Z" fill="#CAE84A"/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	</div>
</header>

{/if}