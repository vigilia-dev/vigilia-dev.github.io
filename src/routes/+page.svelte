<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Vigilia AI - Secure Your AI Systems</title>
	<meta name="description" content="Vigilia AI helps you secure your AI systems with advanced monitoring and protection." />
</svelte:head>

<div class="relative min-h-screen">
	<!-- Hero Section -->
	<section class="relative pt-32 md:pt-40">
		<div class="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
					<span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
						Secure Your AI Systems
					</span>
				</h1>
				<p class="text-lg md:text-xl text-dark-300 max-w-2xl mx-auto mb-8">
					Protect your AI models and systems from threats with advanced monitoring and security solutions.
				</p>
				
				<!-- Waitlist Form -->
				<div class="max-w-md mx-auto">
					<form class="flex flex-col sm:flex-row gap-3" action="#" method="POST">
						<input
							type="email"
							class="input flex-grow"
							placeholder="Enter your email"
							required
						/>
						<button type="submit" class="btn btn-primary whitespace-nowrap">
							Join Waitlist
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>
</div>




