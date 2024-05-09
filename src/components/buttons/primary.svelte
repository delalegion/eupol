<script lang="ts">
   export let size: string = "large";
   export let type: string = "default";
   export let oftype: string = "button";
   export let link: string = "#";
</script>

<a href="{link}" type={oftype} class="text-dark-950 bg-primary text-center hover:translate-y-0.5 duration-200 ease-primary active:scale-95 focus:outline-none font-semibold text-button rounded-full text-base
{size === "large" ? 'px-8 py-5' : (size === "medium" ? 'px-7 py-4' : 'px-5 py-3' )}"><slot /></a>