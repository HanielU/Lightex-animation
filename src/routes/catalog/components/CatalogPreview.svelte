<script lang="ts">
  import ArrowDownIcon from "$lib/components/icons/ArrowDownIcon.svelte";
  import HeartIcon from "$lib/components/icons/HeartIcon.svelte";
  import anime from "animejs";
  import type { TransitionConfig } from "svelte/transition";
  import type { Writable } from "svelte/store";
  import { getContext } from "svelte";
  import { lamps } from "$lib/stores";
  import { phaseInText, phaseOutText } from "./animations";
  import { wait } from "$lib/utils";

  let favorited = false;
  let playedOnce = false;
  let counter = 0;
  let btn: HTMLDivElement;
  let counterWrapper: HTMLDivElement;

  const textAnimDuration = 500;
  const show = getContext<Writable<boolean>>("show-text");

  $: favorited, (counter = 0); // resets counter to 0 when favorited changes
  $: ({ name, price } = $lamps.find(l => l.selected)!);

  // if $show changes then run the "wait" block
  $: $show,
    wait(textAnimDuration).then(() => {
      $show = true;
      counter = 0;
      favorited = false;
    });

  const addToCart = () => {
    const tl = anime
      .timeline({
        autoplay: false,
        easing: "easeOutCubic",
        duration: 500
      })
      .add({
        targets: btn,
        translateX: [0, 50],
        delay: 50
      })
      .add(
        {
          targets: counterWrapper,
          translateX: [-100, -80],
          opacity: [0, 1]
        },
        "-=400" // start 400ms before the previous animation ends
      );

    // tracks if "addToCart" Animation has been played once already
    playedOnce = true;
    tl.play();
  };

  function reverseAddToCart(
    node: Element,
    params?: Partial<{ duration: number }>
  ): TransitionConfig {
    return {
      css: () => {
        if (!playedOnce) return "";

        anime
          .timeline({
            easing: "easeOutCubic",
            duration: params?.duration || 500
          })
          .add({
            targets: counterWrapper,
            translateX: [-80, -100],
            opacity: [1, 0]
          })
          .add(
            {
              targets: btn,
              translateX: [50, 0]
            },
            "-=500"
          );

        playedOnce = false;
        return "";
      }
    };
  }

  function hold(node: HTMLElement, params: { duration: any }): TransitionConfig {
    return {
      css: () => "",
      duration: params.duration
    };
  }
</script>

<div
  class="mb-2 rounded-t-3xl rounded-b-lg p-10 font-secondary [background:linear-gradient(155deg,_rgba(107,124,211,1)_0%,_rgba(65,83,173,1)_100%)]"
>
  <!-- HEADING -->
  <header class="mb-5 flex items-center justify-between">
    {#if $show}
      <h1
        in:phaseInText={{ targets: ".a-text", duration: textAnimDuration }}
        out:phaseOutText={{ targets: ".a-text", duration: textAnimDuration }}
        class="a-text font-meduim uppercase"
      >
        Home / Lamp / {name}
      </h1>
    {/if}

    <!-- favorite icon -->
    <div
      class="ml-auto transform-gpu cursor-pointer p-2 text-2xl transition-transform tap-shrink"
      on:click={() => {
        favorited = !favorited;
        !playedOnce && addToCart();
      }}
    >
      <HeartIcon solid={favorited} class="fill-white" />
    </div>
  </header>

  <!-- flex wrapper -->
  <div class="relative flex">
    <!-- left half -->
    {#if $show}
      <div
        class="w-[400px]"
        in:phaseInText={{ targets: ".a-text", duration: textAnimDuration }}
        out:phaseOutText={{ targets: ".a-text", duration: textAnimDuration }}
      >
        <h1 class="a-text mb-5 text-5xl font-semibold uppercase">{name}</h1>

        <h3 class="a-text mb-6 text-4xl">
          {price}
          <sup class="relative -left-2 -top-3 text-xl">$</sup>
        </h3>

        <ul class="a-text max-w-sm font-primary">
          {#each ["Fact", "About the brand", "Product Information", "Colors"] as info}
            <li class="flex items-center justify-between border-b border-b-white/50 py-2 text-xl">
              {info}

              <span class="pr-2">
                <ArrowDownIcon class="fill-white" />
              </span>
            </li>
          {/each}
        </ul>
      </div>
    {/if}

    <!-- right half -->
    <div class="flex flex-1">
      <!-- bottom -->
      <div class="relative mt-auto flex w-full justify-center">
        <div
          class="absolute flex -translate-x-32 items-center gap-2 font-primary text-xl opacity-0"
          bind:this={counterWrapper}
        >
          <!-- subtract btn -->
          <button class="counter-btn" on:click={() => counter > 0 && counter--}> - </button>

          <p class="font-semibold">{counter}</p>

          <!-- add btn -->
          <button class="counter-btn" on:click={() => counter++}>+</button>
        </div>

        {#key $show}
          <!-- div wrapper because animejs won't let me do the scale-down on click transition-->
          <div bind:this={btn} in:reverseAddToCart>
            <button
              class="block transform-gpu rounded-md bg-orange px-8 py-2 font-primary font-semibold transition-transform tap-shrink"
              on:click|once={!playedOnce ? addToCart : void {}}>Add to cart</button
            >
          </div>
        {/key}
      </div>
    </div>
  </div>
</div>

<style>
  .counter-btn {
    @apply transform-gpu rounded-md bg-white/40 px-2 py-1 shadow-sm transition tap-shrink active:bg-white/70 active:shadow-lg;
  }
</style>
