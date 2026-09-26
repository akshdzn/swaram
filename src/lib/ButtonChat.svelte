<button> hi </button>

<style>
    button {
        all: unset;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 10%) 0%,
            rgba(255, 255, 255, 1%) 100%
        );
        box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 10%);
        border-radius: 800px;
        corner-shape: superellipse(1.2);
        padding: 4px 20px;

        transition: all ease-out 200ms;
    }

    button:hover {
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 20%) 0%,
            rgba(255, 255, 255, 5%) 100%
        );
    }

    button:active {
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 10%) 0%,
            rgba(255, 255, 255, 1%) 100%
        );

        transition: all ease-out 20ms;
        transform: scaleX(1.1);
    }
</style>
