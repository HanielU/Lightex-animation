<script>
  import clsx from "clsx";
  import { page } from "$app/stores";
</script>

<nav class="mb-12 flex items-center justify-between py-8 font-primary text-gray-800">
  <!-- logo -->
  <div>
    <h1 class="font-secondary text-3xl font-semibold uppercase">
      <a href="/">Lightex</a>
    </h1>
  </div>

  <!-- nav-links -->
  <div class="flex gap-8">
    {#each [["Catalog", "/catalog"], ["About", "/about"]] as [name, path]}
      <a
        class={clsx("font-medium leading-relaxed border-solid border-b-gray-800 text-lg", {
          "border-b-2": path === $page.url.pathname
        })}
        href={path}
        data-sveltekit-prefetch
      >
        {name}
      </a>
    {/each}
  </div>

  <!-- icons -->
  <div class="flex gap-8">
    <!-- icon wrapper -->
    <div class="flex">
      <div class="fill-gray-800 text-2xl i-ri-search-line" />
    </div>
    <!-- icon wrapper -->
    <div class="flex">
      <div class="fill-gray-800 text-2xl i-ri-shopping-bag-line" />
    </div>
  </div>
</nav>
