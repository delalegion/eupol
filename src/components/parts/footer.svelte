<script lang="ts">
	export let en: boolean = false;
</script>

{#if en === true} 

<footer id="footer">
	<div class="mx-auto max-w-screen-xl gap-20 flex flex-col px-4 sm:px-8">
		<div class="flex w-full max-[390px]:flex-col justify-between items-center max-[390px]:gap-6">

			<div class="bg-primary clip-logo min-w-52 max-w-52 p-4 flex justify-center content-center col-span-2">
				<h2 class="font-primary text-h2 text-dark-50 font-extrabold select-none">EuPol</h2>
			</div>
			<div class="flex w-full justify-center min-[390px]:justify-end mt-2">
				<div class="flex gap-4">
					<a href="https://www.facebook.com/share/Lffse3cL5e6zHKVe/?mibextid=LQQJ4d" target="_blank" class="p-4 rounded-full bg-dark-100/80 w-14 h-14 flex justify-center content-center hover:bg-dark-100/60 hover:cursor-pointer active:scale-95 hover:translate-y-0.5 duration-200">
						<svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.3314 6.67463V10.6409H15.3658L14.5686 15.9838H10.3314V28.2935C9.48184 28.4084 8.61266 28.4683 7.73039 28.4683C6.71199 28.4683 5.71191 28.3892 4.73801 28.2361V15.9838H0.0949707V10.6409H4.73801V5.78799C4.73801 2.77721 7.24214 0.335419 10.3327 0.335419V0.337973C10.3419 0.337973 10.3497 0.335419 10.3589 0.335419H15.3671V4.95619H12.0946C11.122 4.95619 10.3327 5.72547 10.3327 6.67335L10.3314 6.67463Z" fill="#CAE84A"/>
						</svg>
					</a>
				</div>
			</div>

		</div>
		<div class="flex w-full items-center flex-wrap justify-between mb-8 gap-6">
			<p class="font-primary text-p2 font-semibold text-dark-150">2024 © Eupol | All rights reserved.</p>
			<a href="/polityka-prywatnosci" class="font-primary text-p2 font-semibold text-dark-50">Privacy Policy</a>
			<p class="font-primary text-p2 font-semibold text-dark-150">Design and implementation of the website: <a class="text-dark-50" href="https://www.hubertkruk.pl/">Hubert Kruk</a></p>
		</div>
	</div>
</footer>

{:else}

<footer id="footer">
	<div class="mx-auto max-w-screen-xl gap-20 flex flex-col px-4 sm:px-8">
		<div class="flex w-full max-[390px]:flex-col justify-between items-center max-[390px]:gap-6">

			<div class="bg-primary clip-logo min-w-52 max-w-52 p-4 flex justify-center content-center col-span-2">
				<h2 class="font-primary text-h2 text-dark-50 font-extrabold select-none">EuPol</h2>
			</div>
			<div class="flex w-full justify-center min-[390px]:justify-end mt-2">
				<div class="flex gap-4">
					<a href="https://www.facebook.com/share/Lffse3cL5e6zHKVe/?mibextid=LQQJ4d" target="_blank" class="p-4 rounded-full bg-dark-100/80 w-14 h-14 flex justify-center content-center hover:bg-dark-100/60 hover:cursor-pointer active:scale-95 hover:translate-y-0.5 duration-200">
						<svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.3314 6.67463V10.6409H15.3658L14.5686 15.9838H10.3314V28.2935C9.48184 28.4084 8.61266 28.4683 7.73039 28.4683C6.71199 28.4683 5.71191 28.3892 4.73801 28.2361V15.9838H0.0949707V10.6409H4.73801V5.78799C4.73801 2.77721 7.24214 0.335419 10.3327 0.335419V0.337973C10.3419 0.337973 10.3497 0.335419 10.3589 0.335419H15.3671V4.95619H12.0946C11.122 4.95619 10.3327 5.72547 10.3327 6.67335L10.3314 6.67463Z" fill="#CAE84A"/>
						</svg>
					</a>
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

{/if}