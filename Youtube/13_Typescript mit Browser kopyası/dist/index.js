const { defaults } = await import("./default.js");
if (typeof document !== "undefined") {
    const button = document.querySelector("#clicker");
    if (button) {
        button.addEventListener("click", e => {
            if (e.currentTarget instanceof HTMLButtonElement) {
                console.log(e.currentTarget);
            }
        });
    }
}
export {};
