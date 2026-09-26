<script>
    import WandIcon from "../assets/icons/wand.svg";
    import FadeGrid from "../assets/fadegrid.svg";
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

        <div class="loader-box">
            <!-- make a progress bar element -->
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
</style>
