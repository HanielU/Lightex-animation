<script lang="ts">
  import { lamps } from "$lib/stores";
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  const show = getContext<Writable<boolean>>("show-text");
</script>

<div class="flex items-center justify-between rounded-b-3xl rounded-t-lg bg-purple-dark p-10">
  {#each $lamps as { name }}
    <div
      class="cursor-pointer select-none rounded-md bg-blue-500 p-5 font-semibold text-white shadow-blue-800 transition tap-shrink hover:shadow-xl"
      on:click={() => {
        if ($show === false) return; // prevents ability to click btn during animation
        // if the new selection is the same as the old selection then return
        if ($lamps.find(l => l.selected)?.name === name) return;
        $lamps = $lamps.map(lamp => ({ ...lamp, selected: lamp.name === name }));
        $show = false;
      }}
    >
      {name}
    </div>
  {/each}
</div>
