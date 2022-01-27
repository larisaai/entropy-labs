<script>
	import { each } from 'svelte/internal';
	import { aboutUs, design, dev, projects, testimonials }  from './data.js';

let selected;
	let cardBackShowing = false;
	
	const toggleBackFront = (e) => {
		if (selected === Number(e.target.dataset.cardId)) {
			selected = null;
			cardBackShowing = !cardBackShowing;
		} else {
			cardBackShowing = !cardBackShowing;
			selected = Number(e.target.dataset.cardId)
		}
	}
</script>

<style>	

</style>

<section class="hero-container h-screen pt-20" id="intro">
		<div class="blue-bg absolute right-0 left-32 md:left-40 2xl:left-64 bg-light-blue h-2/3 xl:h-1/2-5 z-10"></div>
		
		<div class="hero relative z-40 max-width">
				<h1 class="font-bold leading-relaxed xs:mt-6 md:mt-8 xl:mt-10">Unique solutions <br class="sm:hidden xl:block">deserve <br> <span class="text-purple">unique software</span></h1>
		</div>
		<div class="illustration-wrapper absolute left-0 bottom-2/5 md:bottom-1/3 xl:bottom-0 top-1/4 xl:top-1/3 w-full sm:w-11/12 xl:w-3/5 z-30">
				<div class="w-full h-full bg-white relative z-20">
					<img class="absolute bottom-0 left-1/2 -translate-x-1/2 pl-12" src="./illustration.svg" alt="Illustration represeting software">
				</div>
				
				 <img class="absolute top-0 left-full -translate-x-1/2 -translate-y-12 xl:-translate-y-12 pr-2 z-10 hidden max-h-1.25 h-dots-line sm:block" src="/icons/vertical-dots.svg" alt="Graphical element on the page"> 
		</div>
		<div class="purple-info-box absolute z-20 bg-purple bg-opacity-60 left-0 xl:left-auto right-0 w-full xl:w-2/5 bottom-0 h-2/5 md:h-1/3 xl:h-1/2 text-white p-8 xs:py-10 xs:px-16 md:p-16 text-center flex flex-col items-center justify-between">
				<h3>We can offer you </h3>
				<h3 class="font-bold uppercase">Complete package</h3>
				<span class="h-0.5 w-20 bg-white my-4"></span>
				<h4 class="font-semibold ">From design to final software and we keep going with maintaining your digital solution.</h4>
		</div>
		<div style="height: 100vh"></div>
</section>


<section class="about-us py-16 bg-light-blue relative">
	<div class="w-1 h-1 absolute -top-10" id="about"></div>
	<div class="max-width text-center flex flex-col justify-center items-center">
		<h2 class="mb-4 font-bold">About Us</h2>
		<span class="h-0.5 w-20 bg-black mb-8"></span>
	</div>
	<div class="max-width grid xl:grid-cols-2 gap-10">
		{#each aboutUs as aboutItem }
		<div class="about-card bg-white rounded-xl p-6">
		<div class="flex items-center mb-4">
			<img class="mr-2" src={aboutItem.img} alt="{aboutItem.name}" >
			<h4 class="font-semibold">{aboutItem.name}</h4>
		</div>
		<p>{aboutItem.description}</p>
		</div>
		{/each}
	</div>
</section>



<section class="relative py-16">
	<div class="w-1 h-1 absolute -top-10" id="services"></div>
	<div class="relative z-20">
		<div class="max-width text-center flex flex-col justify-center items-center">
		<h4 class="font-semibold uppercase text-black opacity-60 mb-8">Complete package</h4>
		<h2 class="font-bold sm:w-2/3 mb-10">From design to final software and we keep going with maintaining your digital solution</h2>
		<span class="h-0.5 w-20 bg-black mb-8"></span>
	</div>
	<div class="max-width grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pb-8">
	{#each design as designItem }
		<div class="dd-card border border-purple p-6 rounded-xl bg-white">
			<img src="{designItem.img}" alt="Web Design software logo">
			<h4 class="text-purple font-bold my-3">{designItem.name}</h4>
			<p>{designItem.description}</p>
		</div>
	{/each}
	</div>

		<div class="max-width grid md:grid-cols-2 xl:grid-cols-3 gap-10">
		{#each dev as devItem }
			<div class="dd-card border border-purple p-6 rounded-xl bg-white">
				<img src="{devItem.img}" alt="Web Deelopment software logo">
				<h4 class="text-purple font-bold my-3">{devItem.name}</h4>
				<p>{devItem.description}</p>
			</div>
		{/each}
		</div>
	</div>


		<img class="absolute top-1/3 sm:top-1/2 right-0 z-0 -translate-y-1/2 w-96 sm:w-auto max-h-full" src="./icons/purple.svg" alt="Purple background illustration">
		<img class="absolute top-3/4 left-0 z-0" src="./icons/purple-half-circle.svg" alt="Purple background illustration">
</section>


<section class="relative bg-gradient-to-b from-white to-grey py-16">
 	<div class="w-1 h-1 absolute -top-10" id="inspiration"></div>
		<div class="max-width text-center flex flex-col justify-center items-center">
		<h2 class="font-bold w-2/3 mb-8">Get inspired by our work</h2>
		<span class="h-0.5 w-20 bg-black mb-8"></span>
		<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-12 relative w-full xl:max-width">
		{#each projects as project, i}
			<div class="flip-box bg-transparent	h-120 ">
				<div class="flip-box-inner relative w-full h-full text-center" class:show-back={selected === i}>
					<div class="flip-box-front bg-white shadow-card rounded-xl overflow-hidden absolute w-full h-full">
						<img src={project.img} alt={project.name}>
						<div class="p-5">
									<h4 class="font-bold mb-4">{project.name}</h4>
									<p class="mb-10">{project.description}</p>
									<img class="flip-icon absolute bottom-5 right-5 cursor-pointer hover:scale-110" on:click={toggleBackFront} data-card-id={i} src="./icons/flip.svg" alt="Flip icon">
						</div>
					</div>

					<div class="flip-box-back absolute w-full h-full bg-white shadow-card rounded-xl p-5 pr-3 pb-16">
						<div class="mb-10 h-full overflow-y-auto">
							<p class="pr-2">{@html project.back}</p>
						</div>
						<img class="absolute bottom-5 right-5 cursor-pointer hover:scale-110" on:click={toggleBackFront} data-card-id={i} src="./icons/flip.svg" alt="Flip icon">
					</div>
				</div>
			</div>
		{/each}
	</div>	
</section>




<section class="relative py-16">
	<div class="w-1 h-1 absolute -top-10" id="testimonials"></div>
	<div class="relative z-20">
		<div class="max-width text-center flex flex-col justify-center items-center">
		<h4 class="font-semibold uppercase text-black opacity-60 mb-8">Testimonials</h4>
		<h2 class="font-bold sm:w-2/3 mb-10">Why clients appreciate working with us?</h2>
		<span class="h-0.5 w-20 bg-black mb-8"></span>
	</div>
	<div class="relative mb-8">
		<div class="hidden xl:block absolute top-1/2 -translate-y-1/2 left-0 w-full ">
			<img src="./icons/dots-line.svg" alt="Dots illustration on the background">
		</div>
		<div class="max-width grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
			{#each testimonials as testimonialsItem }
				<div class="testimonial-card border border-purple p-6 rounded-xl bg-white relative flex flex-col justify-between">
					<div>
						<h4 class="text-purple font-bold mt-2 mb-4">{testimonialsItem.title}</h4>
						<p class="italic opacity-80 mb-4">"{testimonialsItem.description}"</p>
					</div>
					<div class="text-right">
						<h5 class="font-semibold">{testimonialsItem.client}</h5>
						<p>{testimonialsItem.ocupation}</p>
					</div>
				
				</div>
			{/each}
		</div>
		</div>
	</div>
</section>


<section class="contact relative max-width ">
	<div class="w-1 h-1 absolute -top-16" id="contact"></div>

	<div class="flex flex-col justify-start py-16">
		<h2 class="font-bold w-2/3 mb-6">Get in touch with us</h2>
		<span class="h-0.5 w-20 bg-black mb-8"></span>
		<h5 class="mb-8 w-full md:w-3/5 pr-10 leading-8">We’ve got experience with standard solutions, customized templates, and completely unique designs and systems tailor-made for your specific events and projects. Get in touch to hear what we can do for you!</h5>
		<div>
			<a href="mailto:info@entropyfox.com" class="flex items-center mb-4">
				<img class="mr-3" src="./icons/email.svg" alt="Email icon">
				<h5>info@entropyfox.com</h5>
			</a>
			<a href="tel:+45 42 42 35 92" class="flex items-center mb-4">
				<img class="mr-3" src="./icons/phone.svg" alt="Phone icon">
				<h5>+45 42 42 35 92</h5>
			</a>
			<a href="https://www.google.com/maps/place/Copenhagen,+Denmark/@55.6713442,12.5237843,12z/data=!3m1!4b1!4m5!3m4!1s0x4652533c5c803d23:0x4dd7edde69467b8!8m2!3d55.6760968!4d12.5683372" target="_blank" class="flex items-center mb-4">
				<img class="mr-3" src="./icons/location.svg" alt="Location icon">
				<h5>Copenhagen, Denmark</h5>
			</a>
		</div>
	</div>
	<div class="xl:absolute top-0 right-0 bg-white xl:w-2/5 z-40 mb-10 xl:mb-0">
		<div class="bg-light-purple p-6 md:p-12 xl:pr-1">
			<div class="hidden xl:block h-full w-full xl:w-80 absolute top-0 bottom-0 left-full bg-light-purple"></div>
			<div class="h-full w-40"></div>
			<div class="flex flex-col justify-start ">
				<h2 class="font-bold w-2/3 mb-6">Write us</h2>
				<span class="h-0.5 w-20 bg-black mb-8"></span>
			</div>
			<form>
				<div class="form-item flex flex-col mb-4">
					<label>Full name:</label>
					<input class="p-3 mt-1 rounded" type="text" name="sender" placeholder="Enter your name" required>
				</div>
				<div class="form-item flex flex-col mb-4">
					<label>Email:</label>
					<input class="p-3 mt-1 rounded" type="text" name="email" placeholder="Enter your email" required>
				</div>
				<div class="form-item flex flex-col mb-4">
					<label>Message:</label>
					<textarea class="p-3 mt-1 rounded max-h-60" name="message" placeholder="Enter your message here" required></textarea>
				</div>
				<div class="flex justify-end items-center">
					<button class="submit-btn py-3 px-6 relative z-20"><span>submit ➔</span></button>  
				</div>
			
			</form>
		</div>
				</div>

</section>
