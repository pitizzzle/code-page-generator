
export function escapeHTML(str) {
    const tempElement = document.createElement('div');
    tempElement.innerText = str;
    return tempElement.innerHTML;
}
