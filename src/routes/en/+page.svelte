<script>
	import { enhance } from "$app/forms";
	import Primary from "../../components/buttons/primary.svelte";
	import About from "../../components/parts/about.svelte";
	import Cars from "../../components/parts/cars.svelte";
	import Contact from "../../components/parts/contact.svelte";
	import Footer from "../../components/parts/footer.svelte";
	import Header from "../../components/parts/header.svelte";
	import Offer from "../../components/parts/offer.svelte";
	import Payments from "$lib/images/payments.webp?enhanced";
	import { onMount } from "svelte";
	import gsap from "gsap";
	import {ScrollTrigger} from "gsap/dist/ScrollTrigger"; 

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger)

		gsap.from('#info-text', {
			scrollTrigger: {
				trigger: '#info-text',
			},
			y: -40,
			opacity: 0,
			delay: 0.2,
			duration: 1,
			ease: "expo.out",
		});
		gsap.from('#contact-title', {
			scrollTrigger: {
				trigger: '#contact-title',
			},
			y: -40,
			opacity: 0,
			delay: 0.2,
			duration: 1,
			ease: "expo.out",
		});
		gsap.from('.inp', {
			scrollTrigger: {
				trigger: '.inp',
			},
			y: -40,
			opacity: 0,
			delay: 0.2,
			duration: 1,
			ease: "expo.out",
			stagger: 0.15
		});
		gsap.from('.cont', {
			scrollTrigger: {
				trigger: '.cont',
			},
			y: -40,
			opacity: 0,
			delay: 0.4,
			duration: 1,
			ease: "expo.out",
			stagger: 0.15
		});
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
	});

	export let form;
</script>

<svelte:head>
	<meta charset="UTF-8">

	<meta property="url" content="https://eupol-przewoznik.pl">
	<meta name="description" content="Fast, convenient and affordable transportation trips">
	<meta name="dcterms.description" lang="en" content="EuPol - Transport company for people and goods">
	<meta name="keywords" content="Carrier EuPol Stalowa Wola Gorzyce Tarnobrzeg Sandomierz Zaleszany Wrzawy Zbydniów Nisko Carriage of People Transport Airport Transport Gorzyce">
	<meta name="dcterms.subject" lang="en" content="Gorzyce transport; Sandomierz transport; Zaleszany transport; Tarnobrzeg transport; EuPoL - people and goods transport company; Zbydniow transport; people carrier; people transporter; Stalowa Wola; Tarnobrzeg">
	<meta name="application-name" content="Fast, convenient and affordable transportation trips">
	<meta name="msapplication-tooltip" content="EuPol - Transport company for people and goods">
	<meta name="msapplication-starturl" content="https://eupol-przewoznik.pl">
	<meta name="msapplication-window" content="width=1024;height=768">
	<meta property="og:site_name" content="eupol-przewoznik.pl - Transportation company for people and goods">
	<meta property="og:url" content="https://eupol-przewoznik.pl">
	<meta property="og:title" content="EuPol - Transport company for people and goods | eupol-przewoznik.pl">
	<meta property="og:image" content="https://eupol-przewoznik.pl/images/favicon.png">

	<link rel="alternate" type="application/rss+xml" title="Wpisy na RSS" href="http://example.net/feed">
	<link rel="alternate" type="application/atom+xml" title="Wpisy na ATOM" href="http://example.net/atom">
	<link rel="index" title="Strona główna" href="https://eupol-przewoznik.pl">
	<link rel="canonical" href="https://eupol-przewoznik.pl">
	<!-- <link rel="icon" href="https://eupol-przewoznik.pl/images/favicon.png" type="image/png"> -->

	<title>EuPol - Transport company for people and goods</title>
</svelte:head>

<Header en />

<About en />

<Offer en />

<section id="info" class="bg-[url('/bginfo.webp')] bg-cover bg-no-repeat bg-center py-24 md:py-36 lg:py-42 px-2 relative">
	<div class="mx-auto max-w-screen-xl px-4 sm:px-8 gap-12 md:gap-16 lg:gap-20 flex flex-col">
		<h4 class="font-semibold font-primary text-dark-300 text-p1 md:text-h4 text-center" id="info-text">Transportation has been our specialty for nearly 20 years. Do you need professional help in the matter of transport organization? Are you looking for an experienced company , which will deliver your customers as well as goods on time, without complications and with the highest transport standards. EuPol offers professional transportation services for people and goods. Our team will organize transportation taking into account all your needs such as time, safety and privacy.</h4>
	</div>
</section>

<div style="contain: paint;">
	<Cars en />
</div>

<section id="kontakt" class="py-16 md:py-24 lg:py-32 bg-dark-100">
	<div class="mx-auto max-w-screen-xl px-4 sm:px-8 gap-12 md:gap-16 lg:gap-20 flex flex-col">
		<div class="flex flex-row gap-3">
			<div class=" ml-4 mr-3 border-r-2 p-0 border-primary rotate-45"></div>
			<h3 class="text-dark-250 font-semibold text-h4 lg:text-h3" id="contact-title">Questions? Write to us!</h3>
		</div>
		<div class="grid grid-cols-6 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20">
			{#if form?.success}<p class="w-full p-4 bg-green-600 rounded-lg text-gray-200 col-span-6 lg:col-span-12">Message sent. We will respond as soon as possible. If you need to contact us quickly, you are welcome to call the phone number provided.</p>{/if}
			{#if form?.nameError}<p class="w-full p-4 bg-red-800 rounded-lg text-gray-200 col-span-6 lg:col-span-12">The first and last name field is required and must contain at least 5 characters.</p>{/if}
			{#if form?.emailError}<p class="w-full p-4 bg-red-800 rounded-lg text-gray-200 col-span-6 lg:col-span-12">The email field is required and must contain a valid email address.</p>{/if}
			{#if form?.phoneError}<p class="w-full p-4 bg-red-800 rounded-lg text-gray-200 col-span-6 lg:col-span-12">The phone number field can only contain digits.</p>{/if}
			{#if form?.messageError}<p class="w-full p-4 bg-red-800 rounded-lg text-gray-200 col-span-6 lg:col-span-12">The message field must contain at least 5 characters.</p>{/if}
			{#if form?.checkboxError}<p class="w-full p-4 bg-red-800 rounded-lg text-gray-200 col-span-6 lg:col-span-12">You must accept the consent for data processing.</p>{/if}
			<form method="POST" class="col-span-6 lg:col-span-9 flex flex-col gap-10" use:enhance>
				<div class="flex flex-col lg:flex-row gap-8">

					<div class="relative h-11 w-full min-w-[200px] inp">
						<input placeholder="Full name" name="name"
						  class="peer h-full w-full border-b border-dark-150 bg-transparent pt-4 pb-6 font-primary font-bold text-h4 font-normal text-dark-300 outline outline-0 transition-all placeholder-shown:border-blue-dark-150 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
						<label
						  class="after:content[''] pointer-events-none absolute left-0  -top-5 flex h-full w-full select-none !overflow-visible truncate text-[14px] font-semibold leading-tight text-dark-200 transition-all after:absolute after:-bottom-5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-100 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark-400 peer-focus:after:scale-x-100 peer-focus:after:border-dark-300 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
						  Full name
						</label>
					 </div>
					 <div class="relative h-11 w-full min-w-[200px] inp">
						<input placeholder="Phone number" name="phone"
						  class="peer h-full w-full border-b border-dark-150 bg-transparent pt-4 pb-6 font-primary font-bold text-h4 font-normal text-dark-300 outline outline-0 transition-all placeholder-shown:border-blue-dark-150 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
						<label
						  class="after:content[''] pointer-events-none absolute left-0  -top-5 flex h-full w-full select-none !overflow-visible truncate text-[14px] font-semibold leading-tight text-dark-200 transition-all after:absolute after:-bottom-5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-100 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark-400 peer-focus:after:scale-x-100 peer-focus:after:border-dark-300 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
						  Phone number
						</label>
					 </div>

				</div>
				<div class="relative h-11 w-full min-w-[200px] inp">
					<input placeholder="Email address" type="email" name="email"
					  class="peer h-full w-full border-b border-dark-150 bg-transparent pt-4 pb-6 font-primary font-bold text-h4 font-normal text-dark-300 outline outline-0 transition-all placeholder-shown:border-blue-dark-150 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
					<label
					  class="after:content[''] pointer-events-none absolute left-0  -top-5 flex h-full w-full select-none !overflow-visible truncate text-[14px] font-semibold leading-tight text-dark-200 transition-all after:absolute after:-bottom-5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-100 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark-400 peer-focus:after:scale-x-100 peer-focus:after:border-dark-300 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
					  Email address
					</label>
				 </div>
				 <div class="relative w-full min-w-[200px] -mt-4 inp">
					<textarea name="message"
					  class="peer h-full min-h-[150px] w-full resize-none border-b border-dark-150 bg-transparent pt-4 pb-6 font-primary font-bold text-h4 font-normal text-dark-300 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
					  placeholder=""></textarea>
					<label
					  class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[14px] font-semibold leading-tight text-dark-200 transition-all after:absolute after:-bottom-2 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-100  after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark-400 peer-focus:after:scale-x-100 peer-focus:after:border-dark-300 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
					  Message content
					</label>
				 </div>

				 <div class="inline-flex items-center -mt-4 -ml-2 inp">
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
                  I agree to the processing of my personal data and accept the following <a class="text-gray-400 hover:text-gray-200" href="/polityka-prywatnosci">privacy policy.</a>
					 </label>
				 </div> 

				 <div class="inline-flex inp">
					<Primary oftype="submit" en>Send a message</Primary>
				 </div>
			</form>
			<div class="col-span-6 lg:col-span-3">
				<div class="flex flex-col gap-8">
					<div class="flex flex-row gap-3 cont">
						<div class="ml-4 mr-3 border-r-2 p-0 border-primary rotate-45"></div>
						<h3 class="text-dark-250 font-semibold text-h4">+48 664 175 003</h3>
					</div>
					<div class="flex flex-row gap-3 cont">
						<div class="ml-4 mr-3 border-r-2 p-0 border-primary rotate-45"></div>
						<h3 class="text-dark-250 font-semibold text-h4">+48 669 955 685</h3>
					</div>
					<div class="flex flex-row gap-3 cont">
						<div class="ml-4 mr-3 border-r-2 p-0 h-7 border-primary rotate-45"></div>
						<div class="flex flex-col gap-3">
							<h5 class="text-dark-250 font-semibold text-p1">F.H.U EuPol Krzysztof Kokosza</h5>
							<h5 class="text-dark-250 font-semibold text-p1">Tax number: 8671014915</h5>
							<h4 class="text-dark-250 font-semibold text-h4">krzysztof.eupol@gmail.com</h4>
						</div>
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
				<h4 class="font-primary font-semibold text-dark-50" id="payments-title">Our company is equipped with modern payment terminals. This allows us to accept available MasterCard and Visa cashless payments, providing our customers with convenience and security while traveling.</h4>
			</div>
			<div class="col-span-6 md:col-span-3">
				<enhanced:img src={Payments} alt="Payments image" />
			</div>
		</div>
	</div>
</section>

<Footer en />

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
