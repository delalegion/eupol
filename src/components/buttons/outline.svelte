<script lang="ts">
   export let size: string = "large";
   export let type: string = "default";
   export let link: string = "#";
</script>

<a href="{link}" type="button" class="text-dark-250 bg-transparent outline-dark-200/75 outline-2 justify-center outline text-center hover:translate-y-0.5 hover:outline-dark-250 duration-200 ease-primary inline-flex hover:outline-dark-600 active:scale-95 font-semibold text-button rounded-full text-base
{size === "large" ? 'px-8 py-5' : (size === "medium" ? 'px-7 py-4' : 'px-5 py-3' )}"><slot /></a>