import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  return `${$$result.head += `<!-- HEAD_svelte-kpkz69_START -->${$$result.title = `<title>Vigilia AI - Scan, Classify, Secure The AI Frontier</title>`, ""}<meta name="description" content="Vigilia AI helps you secure your AI systems with advanced monitoring and protection."><!-- HEAD_svelte-kpkz69_END -->`, ""} <div class="relative min-h-screen"> <section class="relative pt-32 md:pt-40"><div class="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center"><h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6" data-svelte-h="svelte-k77531"><div class="overflow-hidden"><span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-white to-secondary-400 inline-block animate-[slideInFromBottom_0.8s_ease-out_forwards]" style="transform: translateY(100%); animation-delay: 0.3s;">Scan, Classify, Secure</span></div> <div class="overflow-hidden mt-2"><span class="bg-clip-text text-transparent bg-gradient-to-r from-secondary-300 to-primary-300 inline-block animate-[slideInFromBottom_0.8s_ease-out_forwards]" style="transform: translateY(100%); animation-delay: 0.6s;">The AI Frontier</span></div></h1> <style data-svelte-h="svelte-1ukuy2u">@keyframes slideInFromBottom {
						0% {
							transform: translateY(100%);
							opacity: 0;
						}
						100% {
							transform: translateY(0);
							opacity: 1;
						}
					}</style> <p class="text-lg md:text-xl text-dark-300 max-w-2xl mx-auto mb-8 animate-[fadeIn_1s_ease-out_forwards]" style="opacity: 0; animation-delay: 0.9s;" data-svelte-h="svelte-1p98yrz">Protect your AI models and systems from threats with advanced monitoring and security solutions.</p>  <div class="max-w-md mx-auto animate-[fadeIn_1s_ease-out_forwards]" style="opacity: 0; animation-delay: 1.2s;"><form class="flex flex-col sm:flex-row gap-3"><input type="email" class="input flex-grow" placeholder="Enter your email" required ${""}${add_attribute("value", email)}> <button type="submit" class="btn btn-primary whitespace-nowrap" ${""}>${`Join Waitlist`}</button></form> ${`${``}`}</div> <style data-svelte-h="svelte-1rqlsub">@keyframes fadeIn {
						0% {
							opacity: 0;
							transform: translateY(10px);
						}
						100% {
							opacity: 1;
							transform: translateY(0);
						}
					}</style></div></div></section></div>`;
});
export {
  Page as default
};
