export function CreateElement(HTML, TypeInsert, label, ...classElement) {
    const element = document.createElement(HTML)
    if (TypeInsert === "textContent") element.textContent = label
    if (TypeInsert === "innerHTML") element.innerHTML = label
    element.classList.add(...classElement)

    return element
}

/* HTML,
TypeInsert,
label,
...classElement */