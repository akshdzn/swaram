<script>
    import WandIcon from "../assets/icons/wand.svg";
    import FadeGrid from "../assets/fadegrid.svg";
    import ProgressBar from "./ProgressBar.svelte";

    import Scritto from "@scritto/svelte";

    let num = $state(20);

    function updateNum() {
        num++;
    }
</script>

<div class="container">
    <img class="fadegrid" src={FadeGrid} alt="grid" />
    <div class="top">
        <img src={WandIcon} alt="wand icon" id="wand" />

        <p>
            It looks like this is your first time using svaram <br />
            this app requires a local model initialization <br />

            <span id="sub"
                >This will only happen once and will take 1 to 5 mins</span
            >
        </p>
    </div>

    <div class="bottom">
        <div id="sub">Clearing your browser cache removes the model</div>

        <div
            class="loader-box"
            onclick={() => {
                updateNum();
            }}
        >
            <div class="loader-text">
                <div class="loader-shine">Loading ONNX</div>
                <Scritto value={`${num} / 90 Mb`} />
            </div>
            <ProgressBar progress={num} />
        </div>
    </div>
</div>

<style>
    .container {
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 80%) 0%,
            rgba(0, 0, 0, 5%) 100%
        );
        width: 100dvw;
        height: 100dvh;
        position: absolute;

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        backdrop-filter: blur(30px);

        z-index: 1;
    }

    #wand {
        width: 48px;
        height: auto;
        aspect-ratio: 1/1;
        opacity: 0.8;
    }

    .top {
        margin-top: 56px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
    }

    p {
        font-size: 20px;
        opacity: 0.8;
        line-height: 1.7;
        text-align: center;
    }

    #sub {
        opacity: 0.5;
        font-size: 16px;
    }

    .fadegrid {
        height: auto;
        position: absolute;
        width: 100dvw;
        z-index: -1;
        user-select: none;
        pointer-events: none;
    }

    .bottom {
        gap: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 24px;
    }

    .loader-box {
        width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }

    .loader-text {
        font-size: 14px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .loader-shine {
        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 30%) 0%,
            rgba(255, 255, 255, 80%) 50%,
            rgba(255, 255, 255, 30%) 100%
        );
        background-size: 300% 100%;
        background-position: 100% 0;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        animation: shine 1s ease-in-out infinite alternate;
    }

    @keyframes shine {
        0% {
            background-position: 100% 0;
        }
        100% {
            background-position: 0% 0;
        }
    }
</style>
