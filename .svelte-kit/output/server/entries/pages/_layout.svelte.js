import { c as create_ssr_component, b as subscribe, e as escape, d as each, f as add_attribute } from "../../chunks/ssr.js";
import "web-vitals";
import { p as page } from "../../chunks/stores.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{margin:0;padding:0;box-sizing:border-box;overflow-x:hidden;background-color:#0f172a}body.menu-open{overflow:hidden}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let isMenuOpen = false;
  const navLinks = [{ href: "/", label: "Home" }, { href: "/contact", label: "Contact" }];
  $$result.css.add(css);
  {
    if ($page.url.pathname) {
      isMenuOpen = false;
    }
  }
  $$unsubscribe_page();
  return `<div class="min-h-screen flex flex-col font-sans"><nav class="${"fixed w-full z-50 transition-all duration-300 " + escape(
    "bg-transparent",
    true
  )}" aria-label="Main navigation"><div class="container"><div class="flex justify-between items-center h-16 md:h-20"> <a href="/" class="flex items-center space-x-3 group" aria-label="Vigilia AI Home" data-svelte-h="svelte-rmjmjq"><div class="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"><img src="/v-logo.svg" alt="" class="h-7 w-7 md:h-9 md:w-9 transition-transform duration-300 group-hover:scale-110"> <div class="absolute inset-0 bg-primary-500/20 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></div> <span class="text-xl md:text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Vigilia AI</span></a>  <div class="hidden md:flex items-center space-x-1">${each(navLinks, ({ href, label }) => {
    return `<a${add_attribute("href", href, 0)} class="${[
      "relative px-4 py-2 rounded-lg text-dark-700 hover:text-primary-600 transition-colors duration-200 font-medium group",
      $page.url.pathname === href ? "active" : ""
    ].join(" ").trim()}"${add_attribute("aria-current", $page.url.pathname === href ? "page" : void 0, 0)}>${escape(label)} ${$page.url.pathname === href ? `<div class="absolute inset-0 bg-primary-50 rounded-lg -z-10"></div>` : `<div class="absolute inset-0 bg-primary-50/0 rounded-lg -z-10 transition-colors duration-200 group-hover:bg-primary-50/50"></div>`} </a>`;
  })}</div>  <button class="md:hidden p-2 rounded-lg text-dark-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"${add_attribute("aria-label", isMenuOpen ? "Close menu" : "Open menu", 0)}${add_attribute("aria-expanded", isMenuOpen, 0)} aria-controls="mobile-menu"><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${isMenuOpen ? `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>` : `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`}</svg></button></div>  ${isMenuOpen ? `<div class="fixed inset-0 bg-white z-40" id="mobile-menu" role="dialog" aria-modal="true"><div class="container h-full py-8"><div class="flex flex-col h-full"><div class="flex-1 py-8"><nav class="flex flex-col space-y-1" aria-label="Mobile navigation">${each(navLinks, ({ href, label }) => {
    return `<a${add_attribute("href", href, 0)} class="${[
      "px-4 py-4 rounded-lg text-lg font-medium transition-colors relative group",
      $page.url.pathname === href ? "active" : ""
    ].join(" ").trim()}"${add_attribute("aria-current", $page.url.pathname === href ? "page" : void 0, 0)}><span class="${"relative z-10 " + escape(
      $page.url.pathname === href ? "text-primary-600" : "text-dark-700",
      true
    )}">${escape(label)}</span> ${$page.url.pathname === href ? `<div class="absolute inset-0 bg-primary-50 rounded-lg"></div>` : `<div class="absolute inset-0 bg-primary-50/0 rounded-lg transition-colors duration-200 group-hover:bg-primary-50/50"></div>`} </a>`;
  })}</nav></div></div></div></div>` : ``}</div></nav> <main class="flex-grow">${slots.default ? slots.default({}) : ``}</main> </div>`;
});
export {
  Layout as default
};
