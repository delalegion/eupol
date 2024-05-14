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
	</div>
</header>

<section id="offer" class="py-16 md:py-24 lg:py-32 bg-dark-300 offer">
	<div class="mx-auto max-w-screen-xl gap-12 md:gap-16 lg:gap-20 flex flex-col px-4 sm:px-8">
		<div class="flex flex-col gap-3 justify-center">
			<div class="ml-4 mr-3 border-r-2 p-0 border-primary rotate-45"></div>
			<h3 class="text-dark-50 font-semibold text-h4 lg:text-h3">Polityka prywatności</h3>
         <h4 class="text-dark-50 font-semibold text-h5 lg:text-h4">Polityka prywatności opisuje zasady przetwarzania przez nas informacji na Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw. cookies.</h4>
         <div class="mt-4">
            <h2 class="pb-6 pt-6"><strong>1. Informacje ogólne</strong></h2>
               <ol>
                  <li>Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: <b>eupol-przewozy.pl</b></li>
                  <li>Operatorem serwisu oraz Administratorem danych osobowych jest: F.H.U EuPol Krzysztof Kokosza Porucznika Sarny 1/58, 39-432 Gorzyce</li>
                  <li>Adres kontaktowy poczty elektronicznej operatora: kuba.kokosza@op.pl</li>  
                  <li>Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.</li>
                  <li>Serwis wykorzystuje dane osobowe w następujących celach:</li>
               </ol>
               <ul style="list-style: lower-alpha;"><li>Obsługa zapytań przez formularz</li>
               </ul>
               <li>Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:
               <ol style="list-style: lower-alpha;">
               <li>Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.</li>
               <li>Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).</li>
               </ol>
               </li>
               <h2 class="pb-6 pt-6"><strong>2. Wybrane metody ochrony danych stosowane przez Operatora</strong></h2>
               <ol><li>Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze.</li><li>W celu ochrony danych Operator regularnie wykonuje kopie bezpieczeństwa.</li><li>Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania, wykorzystywanego przez Operatora do przetwarzania danych osobowych, co w szczególności oznacza regularne aktualizacje komponentów programistycznych.</li>
               </ol>
               <h2 class="pb-6 pt-6"><strong>3. Hosting</strong></h2>
               <ol>
               <li>Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: Vercel Inc.

                  Siedziba: San Francisco, Kalifornia, Stany Zjednoczone
                  
                  Adres: 450 Townsend Street, Suite 200, San Francisco, CA 94103, USA
                  
                  Strona internetowa: https://vercel.com/</li>
            
                  <li>Firma hostingowa w celu zapewnienia niezawodności technicznej prowadzi logi na poziomie serwera. Zapisowi mogą podlegać:
                     <ul style="list-style: lower-alpha;">
                     <li>zasoby określone identyfikatorem URL (adresy żądanych zasobów – stron, plików),</li>
                     <li>czas nadejścia zapytania,</li>
                     <li>czas wysłania odpowiedzi,</li>
                     <li>nazwę stacji klienta – identyfikacja realizowana przez protokół HTTP,</li>
                     <li>informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP,</li>
                     <li>adres URL strony poprzednio odwiedzanej przez użytkownika (referer link) – w przypadku gdy przejście do Serwisu nastąpiło przez odnośnik,</li>
                     <li>informacje o przeglądarce użytkownika,</li>
                     <li>informacje o adresie IP,</li>
                     <li>informacje diagnostyczne związane z procesem samodzielnego zamawiania usług poprzez rejestratory na stronie,</li>
                     <li>informacje związane z obsługą poczty elektronicznej kierowanej do Operatora oraz wysyłanej przez Operatora.</li>
                     </ul>
                  </li>
               </ol>
               <h2 class="pb-6 pt-6"><strong>4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</strong></h2>
               <ol><li>W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców:<ul style="list-style: lower-alpha;"><li>operatorzy pocztowi</li></ul></li>
               <li>Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.</li>
               <li>Przysługuje Ci prawo żądania od Administratora:
               <ul style="list-style: lower-alpha;">
               <li>dostępu do danych osobowych Ciebie dotyczących,</li>
               <li>ich sprostowania,</li>
               <li>usunięcia,</li>
               <li>ograniczenia przetwarzania,</li>
               <li>oraz przenoszenia danych.</li>
               </ul>
               </li>
               <li>Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.2 wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności ustalenia, dochodzenia lub obrony roszczeń.</li>
               <li>Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.</li>
               <li>Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.</li>
               <li>W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego.</li>
                <li>Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.</li></ol>
               <h2 class="pb-6 pt-6"><strong>5. Informacje w formularzach</strong></h2>
               <ol>
               <li>Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.</li>
               <li>Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).</li>
               <li>Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url strony zawierającej formularz.</li>
               <li>Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy.</li>
               </ol>
               
               <h2 class="pb-6 pt-6"><strong>6. Logi Administratora</strong></h2>
               <ol>
               <li>Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu administrowania serwisem.</li>
               </ol>
               
               <h2 class="pb-6 pt-6"><strong>7. Informacja o plikach cookies</strong></h2>
               <ol>
               <li>Serwis korzysta z plików cookies.</li>
               <li>Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.</li>
               <li>Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu.</li>
               <li>Pliki cookies wykorzystywane są w następujących celach:
               <ol style="list-style: lower-alpha;">
               <li>utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;</li>
               <li>realizacji celów określonych powyżej w części "Istotne techniki marketingowe";</li>
               </ol>
               </li>
               <li>W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.</li>
               <li>Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie.&nbsp;Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.</li>
               <li>Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.</li>
               <li>Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również przez współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).</li>
               </ol>
               <h2 class="pb-6 pt-6"><strong>8. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?</strong></h2>
               <ol>
               <li>Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić,&nbsp;a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www</li>
               <li>W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, której używasz i postępuj zgodnie z instrukcjami:
               <ul>
               <li><a href="https://support.microsoft.com/pl-pl/help/10607/microsoft-edge-view-delete-browser-history">Edge</a></li>
               <li><a href="https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer">Internet Explorer</a></li>
               <li><a href="http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647">Chrome</a></li>
               <li><a href="http://support.apple.com/kb/PH5042">Safari</a></li>
               <li><a href="http://support.mozilla.org/pl/kb/W%C5%82%C4%85czanie%20i%20wy%C5%82%C4%85czanie%20obs%C5%82ugi%20ciasteczek">Firefox</a></li>
               <li><a href="http://help.opera.com/Windows/12.10/pl/cookies.html">Opera</a></li>
               </ul>
               <p>Urządzenia mobilne:</p>
               <ul>
               <li><a href="http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647">Android</a></li>
               <li><a href="http://support.apple.com/kb/HT1677?viewlocale=pl_PL">Safari (iOS)</a></li>
               <li><a href="http://www.windowsphone.com/pl-pl/how-to/wp7/web/changing-privacy-and-other-browser-settings">Windows Phone</a></li>
               </ul>
               </li>
               </ol>

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

<style>
   li > ul {
      margin-left: 16px;
   }
   .offer ol > li {
      list-style: decimal;
   }
   li {
      margin: 12px 0;
   }
</style>