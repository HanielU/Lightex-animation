<script lang="ts">
  import { browser } from "$app/environment";
  import anime from "animejs";
  import type { TransitionConfig } from "svelte/transition";
  let cats = [
    { id: 1, name: "Keyboard Cat" },
    { id: 2, name: "Maru" },
    { id: 3, name: "Henri The Existential Cat" }
  ];
  let visible = false;

  $: browser && console.log(anime({}));

  function reverse(
    _: HTMLElement,
    { targets, duration }: { targets: string; duration: number }
  ): TransitionConfig {
    return {
      css: _ => {
        anime({
          targets,
          duration,
          easing: "easeInOutCirc",
          opacity: [1, 0],
          translateX: [0, -500],
          scale: [1, 0],
          delay: anime.stagger(200)
        });
        return "";
      },
      duration: duration + 300
    };
  }
  function forward(
    _: HTMLElement,
    { targets, duration }: TransitionConfig & { targets: string }
  ): TransitionConfig {
    return {
      css: _ => {
        anime({
          targets,
          duration,
          easing: "easeInOutCirc",
          opacity: [0, 1],
          translateX: [-500, 0],
          scale: [0, 1],
          delay: anime.stagger(200)
        });

        return "";
      }
    };
  }
</script>

<input type="checkbox" bind:checked={visible} />
<ul>
  {#each cats as { name }, i}
    {#if visible}
      <h1
        class="animate"
        in:forward={{ targets: ".animate", duration: 500 }}
        out:reverse={{ targets: ".animate", duration: 500 }}
      >
        {i + 1}.{name}
      </h1>
    {/if}
  {/each}
</ul>
