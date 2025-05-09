<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Vigilia AI - Scan, Classify, Secure the AI Frontier</title>
	<meta name="description" content="Vigilia AI - Scan, Classify, and Secure your AI systems with our enterprise-grade security platform that protects machine learning models and data pipelines from emerging threats." />
</svelte:head>

<section class="relative overflow-hidden bg-gradient-to-b from-dark-950 via-dark-900 to-dark-800 text-white min-h-screen before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.05)_0,rgba(15,23,42,0)_50%)] before:z-0">
	<!-- Hero Background Elements -->
	<div class="absolute inset-0 overflow-hidden">
		<!-- Grid Pattern -->
		<div class="absolute top-0 left-0 w-full h-full bg-[size:40px_40px] bg-[image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

		<!-- Gradient Orbs -->
		<div class="absolute -top-40 -right-40 h-[45rem] w-[45rem] rounded-full bg-gradient-to-br from-primary-600/10 to-primary-400/5 blur-3xl"></div>
		<div class="absolute -bottom-40 -left-40 h-[45rem] w-[45rem] rounded-full bg-gradient-to-tr from-secondary-600/10 to-secondary-400/5 blur-3xl"></div>

		<!-- Additional Decorative Elements -->
		<div class="absolute top-1/4 right-1/4 h-[20rem] w-[20rem] rounded-full bg-primary-500/5 blur-2xl"></div>
		<div class="absolute bottom-1/4 left-1/4 h-[20rem] w-[20rem] rounded-full bg-secondary-500/5 blur-2xl"></div>

		<!-- Subtle Animated Stars -->
		<div class="absolute inset-0">
			<div class="absolute top-1/5 left-1/5 w-1 h-1 rounded-full bg-white/30 animate-ping" style="animation-duration: 5s; animation-delay: 1s;"></div>
			<div class="absolute top-3/4 right-1/4 w-1 h-1 rounded-full bg-white/20 animate-ping" style="animation-duration: 7s; animation-delay: 0.5s;"></div>
			<div class="absolute bottom-1/3 left-2/3 w-1 h-1 rounded-full bg-white/25 animate-ping" style="animation-duration: 6s; animation-delay: 2s;"></div>
		</div>
	</div>

	<!-- Hero Content -->
	<div class="container relative mx-auto px-4 py-24 md:py-40 pb-40">
		<!-- Animated Particles Background -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none">
			<div class="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary-400/40 animate-pulse"></div>
			<div class="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-secondary-400/30 animate-pulse" style="animation-delay: 1s;"></div>
			<div class="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-primary-300/40 animate-pulse" style="animation-delay: 2s;"></div>
			<div class="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-secondary-300/30 animate-pulse" style="animation-delay: 0.5s;"></div>
			<div class="absolute bottom-1/3 right-1/2 w-3 h-3 rounded-full bg-primary-400/30 animate-pulse" style="animation-delay: 1.5s;"></div>
		</div>

		<!-- Centered Headline -->
		<div class="text-center max-w-4xl mx-auto mb-20" in:fly={{ y: 20, duration: 800, delay: 200 }}>
			<div class="inline-flex items-center px-4 py-2 rounded-full bg-primary-900/40 text-primary-300 text-sm font-medium mb-8 border border-primary-800/50 backdrop-blur-sm shadow-lg animate-[fadeIn_1s_ease-out_forwards]" style="opacity: 0;">
				<div class="flex items-center">
					<span class="w-2 h-2 rounded-full bg-primary-400 mr-2 animate-pulse"></span>
					<span class="tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-300">ADVANCED AI SECURITY PLATFORM</span>
				</div>
			</div>

			<style>
				@keyframes fadeIn {
					0% {
						opacity: 0;
						transform: translateY(-10px);
					}
					100% {
						opacity: 1;
						transform: translateY(0);
					}
				}
			</style>

			<h1 class="text-5xl md:text-6xl lg:text-8xl font-display font-bold mb-12 leading-tight tracking-tight">
				<div class="overflow-hidden">
					<span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-white to-secondary-400 inline-block animate-[slideInFromBottom_0.8s_ease-out_forwards]" style="transform: translateY(100%); animation-delay: 0.3s;">
						Scan, Classify, Secure
					</span>
				</div>
				<div class="overflow-hidden mt-2">
					<span class="bg-clip-text text-transparent bg-gradient-to-r from-secondary-300 to-primary-300 inline-block animate-[slideInFromBottom_0.8s_ease-out_forwards]" style="transform: translateY(100%); animation-delay: 0.6s;">
						The AI Frontier
					</span>
				</div>
			</h1>

			<style>
				@keyframes slideInFromBottom {
					0% {
						transform: translateY(100%);
						opacity: 0;
					}
					100% {
						transform: translateY(0);
						opacity: 1;
					}
				}
			</style>

			<!-- Animated Underline -->
			<div class="h-1 w-40 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-16 animate-pulse"></div>
		</div>

		<!-- Form Section -->
		<div class="max-w-md mx-auto" in:fly={{ y: 20, duration: 800, delay: 400 }}>
			<div class="flex justify-center mb-16">
				<a href="/contact" class="relative group">
					<div class="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
					<div class="relative flex items-center gap-3 px-10 py-5 rounded-xl bg-dark-900 text-white text-lg font-medium border border-primary-500/20 leading-none">
						<span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 group-hover:text-white transition-colors duration-300">Join Waitlist</span>
					</div>
				</a>
			</div>
		</div>



		<!-- Decorative elements -->
		<div class="absolute -z-10 top-1/4 right-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
		<div class="absolute -z-10 bottom-1/4 left-10 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl"></div>
	</div>
</section>




