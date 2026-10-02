<script>
  import InitOverlay from "./lib/InitOverlay.svelte";
  import Title from "./lib/Title.svelte";
  import Chat from "./lib/Chat.svelte";
  import { onMount } from "svelte";

  import { initModel } from "./lib/ai/decision.svelte";

  onMount(() => {
    initModel();
  });
</script>

<Title />
<Chat />
