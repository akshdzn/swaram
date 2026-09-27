<script>
    let { progress = 30 } = $props();
</script>

<div class="bar">
    <div class="progress" style:width={`${progress}%`}></div>
    <div class="track"></div>
</div>

<style>
    .bar {
        width: 100%;
        position: relative;
    }

    .progress {
        height: 8px;
        background-color: white;
        border-radius: 200px;
        position: absolute;
        transition: all ease-out 200ms;
    }

    .track {
        width: 100%;
        height: 8px;
        background-color: white;
        opacity: 0.2;
        border-radius: 200px;
    }
</style>
