<script lang="ts">
  import Regular from "./lamps/Regular.svelte";
  import Standing from "./lamps/Standing.svelte";
  import clsx from "clsx";
  import type { LampCategoryName } from "$lib/types";
  import { lampCategories } from "$lib/stores";

  const icons = [Regular, Standing, Regular, Standing, Regular];

  // animation functions
  const animFns: Record<string, () => void> = {};

  const changeSelection = (name: LampCategoryName) =>
    ($lampCategories = $lampCategories.map(cat => ({
      ...cat,
      selected: cat.name !== name ? false : true
    })));
</script>

<nav class="flex flex-col items-center justify-center">
  {#each $lampCategories as { name, selected }, i}
    <div
      class={clsx(
        "mb-5 grid h-16 w-16 text-sm cursor-pointer transform-gpu place-items-center rounded-lg uppercase duration-1000 transition hover:duration-300",
        {
          "bg-orange [&_svg]:fill-white": selected,
          "hover:scale-125 hover:bg-orange/20": !selected
        }
      )}
      on:click={() => changeSelection(name)}
      on:mouseenter={animFns[name]}
    >
      <svelte:component this={icons[i]} bind:forwardAnim={animFns[name]} />
    </div>
  {/each}
</nav>
