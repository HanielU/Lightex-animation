<script lang="ts">
  import anime from "animejs";

  let svg: SVGElement;

  export const forwardAnim = () => {
    anime({
      targets: svg,
      rotate: [{ value: [0, 360] }, { value: [360, 0], delay: 300 }],
      rotateY: [{ value: [180, 0] }, { value: [0, 180], delay: 300 }],
      easing: "linear",
      duration: 1500
    });
  };
</script>

<!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg
  bind:this={svg}
  class="h-10 w-10 [transform:rotateY(180deg)]"
  version="1.1"
  id="Capa_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  viewBox="0 0 52 52"
  style="enable-background:new 0 0 52 52;"
  xml:space="preserve"
>
  <g>
    <path
      d="M48.894,50.553l-2-4C46.724,46.214,46.379,46,46,46h-3V16h-0.051C42.427,7.092,35.036,0,26,0
		c-4.541,0-8.81,1.769-12.021,4.979c-0.022,0.022-0.03,0.051-0.05,0.075C7.813,5.598,3,10.744,3,17c0,0.553,0.447,1,1,1h22
		c0.553,0,1-0.447,1-1c0-5.997-4.426-10.966-10.181-11.847C19.437,3.116,22.63,2,26,2c8.271,0,15,6.729,15,15v29h-5
		c-0.379,0-0.725,0.214-0.895,0.553l-2,4c-0.155,0.31-0.139,0.678,0.044,0.973C33.332,51.82,33.653,52,34,52h14
		c0.347,0,0.668-0.18,0.851-0.475S49.05,50.862,48.894,50.553z M24.95,16H5.05C5.553,10.954,9.823,7,15,7S24.447,10.954,24.95,16z
		 M35.618,50l1-2H41v0.017h2V48h2.382l1,2H35.618z"
    />
  </g>
</svg>
