<script>
	import Primary from "../buttons/primary.svelte";
</script>

<section id="contact" class="py-16 md:py-24 lg:py-32 bg-dark-100">
	<div class="mx-auto max-w-screen-xl px-4 sm:px-8 gap-12 md:gap-16 lg:gap-20 flex flex-col">
		<div class="flex flex-row gap-3">
			<div class=" ml-4 mr-3 border-r-2 p-0 border-primary rotate-45"></div>
			<h3 class="text-dark-250 font-semibold text-h4 lg:text-h3">Pytania? Napisz do nas!</h3>
		</div>
		<div class="grid grid-cols-6 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20">
			<form class="col-span-6 lg:col-span-9 flex flex-col gap-10">
				<div class="flex flex-col lg:flex-row gap-8">

					<div class="relative h-11 w-full min-w-[200px]">
						<input placeholder="Imię i nazwisko"
						  class="peer h-full w-full border-b border-dark-150 bg-transparent pt-4 pb-6 font-primary font-bold text-h4 font-normal text-dark-300 outline outline-0 transition-all placeholder-shown:border-blue-dark-150 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
						<label
						  class="after:content[''] pointer-events-none absolute left-0  -top-5 flex h-full w-full select-none !overflow-visible truncate text-[14px] font-semibold leading-tight text-dark-200 transition-all after:absolute after:-bottom-5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-100 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark-400 peer-focus:after:scale-x-100 peer-focus:after:border-dark-300 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
						  Imię i nazwisko
						</label>
					 </div>
					 <div class="relative h-11 w-full min-w-[200px]">
						<input placeholder="Numer telefonu"
						  class="peer h-full w-full border-b border-dark-150 bg-transparent pt-4 pb-6 font-primary font-bold text-h4 font-normal text-dark-300 outline outline-0 transition-all placeholder-shown:border-blue-dark-150 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
						<label
						  class="after:content[''] pointer-events-none absolute left-0  -top-5 flex h-full w-full select-none !overflow-visible truncate text-[14px] font-semibold leading-tight text-dark-200 transition-all after:absolute after:-bottom-5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-100 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark-400 peer-focus:after:scale-x-100 peer-focus:after:border-dark-300 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
						  Numer telefonu
						</label>
					 </div>

				</div>
				<div class="relative h-11 w-full min-w-[200px]">
					<input placeholder="Adres" type="email"
					  class="peer h-full w-full border-b border-dark-150 bg-transparent pt-4 pb-6 font-primary font-bold text-h4 font-normal text-dark-300 outline outline-0 transition-all placeholder-shown:border-blue-dark-150 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
					<label
					  class="after:content[''] pointer-events-none absolute left-0  -top-5 flex h-full w-full select-none !overflow-visible truncate text-[14px] font-semibold leading-tight text-dark-200 transition-all after:absolute after:-bottom-5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-100 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark-400 peer-focus:after:scale-x-100 peer-focus:after:border-dark-300 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
					  Adres email
					</label>
				 </div>
				 <div class="relative w-full min-w-[200px] -mt-4">
					<textarea
					  class="peer h-full min-h-[150px] w-full resize-none border-b border-dark-150 bg-transparent pt-4 pb-6 font-primary font-bold text-h4 font-normal text-dark-300 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
					  placeholder=""></textarea>
					<label
					  class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[14px] font-semibold leading-tight text-dark-200 transition-all after:absolute after:-bottom-2 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-100  after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-dark-400 peer-focus:after:scale-x-100 peer-focus:after:border-dark-300 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
					  Treść wiadomości
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