"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchData = async () => {
    try {
        const response = await fetch("/signup");
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.statusText}`);
        }
        const data = await response.json();
        const messageContainer = document.getElementById("messageContainer");
        if (messageContainer) {
            messageContainer.innerHTML = `<p>${data.message}</p>`;
        }
    }
    catch (error) {
        console.error("Fetch error:", error);
    }
};
exports.default = fetchData;
//# sourceMappingURL=login.js.map