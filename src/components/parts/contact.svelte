<script>
	import { enhance } from "$app/forms";
	import Primary from "../buttons/primary.svelte";

	export let form;
	$: console.log('u:' + form);

</script>

<section id="kontakt" class="py-16 md:py-24 lg:py-32 bg-dark-100">
	<div class="mx-auto max-w-screen-xl px-4 sm:px-8 gap-12 md:gap-16 lg:gap-20 flex flex-col">
		<div class="flex flex-row gap-3">
			<div class=" ml-4 mr-3 border-r-2 p-0 border-primary rotate-45"></div>
			<h3 class="text-dark-250 font-semibold text-h4 lg:text-h3">Pytania? Napisz do nas!</h3>
		</div>
		<div class="grid grid-cols-6 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20">
			{#if form?.nameError}<p class="error">The name field is required</p>{/if}
			{#if form?.emailError}<p class="error">The email field is required</p>{/if}
			{#if form?.phoneError}<p class="error">The phone field is required</p>{/if}
			{#if form?.messageError}<p class="error">The message field is required</p>{/if}
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

				 <div class="inline-flex items-center">
					<label class="relative flex items-center p-3 rounded-full cursor-pointer" for="checkbox">
					  <input type="checkbox"
						 class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
						 id="checkbox" checked />
					  <span
						 class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
						 <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
							stroke="currentColor" stroke-width="1">
							<path fill-rule="evenodd"
							  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							  clip-rule="evenodd"></path>
						 </svg>
					  </span>
					</label>
				 </div> 
<h1>Halo</h1>

				 <div class="inline-flex">
					<Primary oftype="submit">Wyślij wiadomość</Primary>
				 </div>
			</form>
			<div class="col-span-6 lg:col-span-3">
				<div class="flex flex-col gap-8">
					<div class="flex flex-row gap-3">
						<div class="ml-4 mr-3 border-r-2 p-0 border-primary rotate-45"></div>
						<h3 class="text-dark-250 font-semibold text-h4">+48 123 123 123</h3>
					</div>
					<div class="flex flex-row gap-3">
						<div class="ml-4 mr-3 border-r-2 p-0 border-primary rotate-45"></div>
						<h3 class="text-dark-250 font-semibold text-h4">kontakt@eupol.pl</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>