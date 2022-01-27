<script>
	import '../app.css';

	let menuOpen = false;

</script>
<style>


</style>

<header class="h-20 flex items-center fixed w-full z-50 bg-white">
	<div class="max-width flex items-center justify-between xl:relative z-20">
		<a href="#intro" class="logo-wrapper flex items-center">
			<img src="./e-logo.svg" class="logo h-12 w-12" alt="Entopy Labs logo">
			<span class="text-purple font-semibold text-xl md:text-2xl xl:text-3xl pl-2">entropy labs</span>
		</a>
		<div class="relative xl:hidden">
			<input class="checkbox absolute w-full h-full opacity-0" type="checkbox" bind:checked={menuOpen} />
			<div class="hamburger-lines pointer-events-none	block w-8 h-6 flex flex-col justify-between">
				<span class="line origin-top-left transition-transform duration-500 ease-in-out w-full h-1 block rounded bg-black { menuOpen ? 'rotate-45	' : ''}"></span>
				<span class="line transition-transform duration-200 ease-in-out w-full h-1 block rounded bg-black { menuOpen ? 'scale-0' : ''}"></span>
				<span class="line origin-bottom-left transition-transform duration-500 ease-in-out w-full h-1 block rounded bg-black { menuOpen ? '-rotate-45	' : ''}"></span>
			</div>  
		</div>
		
		<div class="menu flex flex-col items-center justify-between absolute translate-x-150 xl:translate-x-0 right-0 top-full xl:relative xl:block ease-in duration-200 bg-light-blue p-6 xl:p-0 w-mobile-menu sm:w-1/2 xl:w-auto h-mobile xl:h-auto { menuOpen ? 'translate-x-0' : ''}">
			<div class="h-1/2 flex flex-col xl:flex-row items-center justify-between">
				<a href="#about" class="underlined relative" on:click={ () => menuOpen = !menuOpen}>About us</a>
				<a href="#services" class="underlined relative" on:click={ () => menuOpen = !menuOpen}>Services</a>
				<a href="#inspiration" class="underlined relative" on:click={ () => menuOpen = !menuOpen}>Inspiration</a>
				<a href="#testimonials" class="underlined relative" on:click={ () => menuOpen = !menuOpen}>Testimonials</a>
				<a href="#contact" on:click={ () => menuOpen = !menuOpen}><button class="xl:ml-4 text-lg md:text-xl font-semibold contact-btn" ><span class="relative z-20">Contact us</span></button></a>
			</div>
			
		</div>
	
	</div>
	<div class="blue-bg absolute right-0 left-32 md:left-40 2xl:left-64 bg-light-blue h-20 z-10"></div>
</header>

<slot />

<div class="social-media w-16 fixed z-50 fixed bottom-0 left-0 -rotate-90  mb-8 hidden xl:flex">
		<a href=""><span class="px-4">linkedin</span></a>
		<a href=""><span class="px-4">facebook</span></a>
		<span class=" relative">-</span>
</div>

<footer class="relative z-30 w-full h-full py-8 bg-light-grey">
		<div class="max-width">
			<div class="w-full md:w-3/5">
				<h2 class="font-semibold my-8">Entropy Labs</h2>
				<p class="my-8 leading-8 pr-10">We’ve got experience with standard solutions, customized templates, and completely unique designs and systems tailor-made for your specific events and projects. Get in touch to hear what we can do for you!</p>
			</div>

			<div class="flex justify-between xl:items-center flex-col xl:flex-row">
					<div class="footer-menu hidden md:flex flex-col md:flex-row">
					<a href="#about" class="underlined relative">About</a>
					<a href="#services" class="underlined relative">Services</a>
					<a href="#inspiration" class="underlined relative">Inspiration</a>
					<a href="#testimonials" class="underlined relative">Testimonials</a>
				</div>
				<div class="social-media-mobile xl:hidden flex font-semibold lg:mt-4">
					<a href="" class="mr-6">linkedin</a>
					<a href="">facebook</a>
				</div>
				<span class="text-xl font-semibold italic my-8 xl:mt-0">© All rights reserved</span>
			</div>
		</div>

</footer>