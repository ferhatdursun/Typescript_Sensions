export{} //! Modül yapmak icin bu export{} gerekiyor. Yoksa hata aliyoruz.

const {defaults} = await import("./default.js")

if (typeof document !== "undefined") {
    const button = document.querySelector<HTMLButtonElement>("#clicker")
    
    if (button) {
        button.addEventListener("click", e => {
            if (e.currentTarget instanceof HTMLButtonElement) {
                console.log(e.currentTarget);
                
            }
        })
    }
}

export{}