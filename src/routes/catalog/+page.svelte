<script>
  import { writable } from "svelte/store";
  import { setContext } from "svelte";
  import CatalogBar from "./components/CatalogBar.svelte";
  import CatalogPreview from "./components/CatalogPreview.svelte";
  import Sidebar from "./components/Sidebar.svelte";

  const showText = writable(true);
  setContext("show-text", showText);
</script>

<div class="grid grid-cols-[100px_1fr] justify-center gap-8 text-white">
  <Sidebar />

  <div>
    <CatalogPreview />
    <CatalogBar />
  </div>
</div>

<svelte:head>
  <title>Catalog | Lightex</title>
</svelte:head>
