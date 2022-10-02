import anime from "animejs";
import type { TransitionConfig } from "svelte/transition";

/**
 * NOTE:
 * ---
 * Custom transition functions always run twice, causing some minor bugs
 */

// let ph1r = false
// let ph2r = false

export function phaseInText(_: Element, { targets = "", duration = 500 }): TransitionConfig {
  return {
    css: () => {
      anime({
        targets,
        duration,
        translateY: [-30, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        easing: "easeOutCubic"
      });
      return "";
    }
  };
}

export function phaseOutText(_: HTMLElement, { targets = "", duration = 0 }): TransitionConfig {
  return {
    duration: duration + (document.querySelectorAll(targets).length * 100 - 100),
    css: () => {
      anime({
        targets,
        duration,
        translateY: 50,
        opacity: 0,
        delay: anime.stagger(100, { easing: "easeInOutCubic", direction: "reverse" })
      });

      return "";
    }
  };
}
