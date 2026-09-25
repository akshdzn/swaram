<script>
    import ButtonChat from "./ButtonChat.svelte";

    // states = text, voice, processing
    let chatState = $state("text");
</script>

<div class="container">
    <div class="chat-box">
        {#if chatState == "text"}
            <textarea
                wrap="soft"
                placeholder="What sounds would you like to listen to today ?"
            ></textarea>

            <div class="buttons">
                <ButtonChat />
                <ButtonChat />
            </div>
        {/if}

        <div class="glow"></div>
    </div>
</div>

<style>
    .container {
        position: absolute;
        width: 100dvw;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 16px;
    }

    .chat-box {
        width: 452px;
        height: 121px;
        background-color: var(--bg);
        border-radius: 30px;
        corner-shape: squircle;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 16px 16px 8px 16px;
        position: relative;
        overflow: hidden;
    }

    textarea {
        all: unset;
        width: 100%;
        resize: none;
        word-wrap: break-word;
        font-size: 16px;
    }

    textarea::selection {
        color: var(--bg);
        background-color: var(--text);
    }

    .glow {
        background: var(--glow);
        width: 100%;
        height: 6px;
        position: absolute;
        bottom: 0;
        filter: blur(15px);
    }

    .buttons {
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
    }
</style>
