export {};
let products = [
    { id: 1, name: "Keyboard", price: 1500, inStock: true, tags: ["electronics"] },
    { id: 2, name: "Monitor", price: 9000, inStock: false },
];
let nextId = 3;
const form = document.getElementById("product-form");
const list = document.getElementById("list");
const filter = document.getElementById("filter");
function render() {
    const visible = filter.checked ? products.filter((p) => p.inStock) : products;
    list.innerHTML = "";
    visible.forEach((p) => {
        const li = document.createElement("li");
        const info = document.createElement("span");
        info.textContent = `${p.name} - ₹${p.price.toFixed(2)} ${p.tags?.length ? "[" + p.tags.join(", ") + "]" : ""}`;
        if (!p.inStock)
            info.className = "out";
        const actions = document.createElement("span");
        const toggle = document.createElement("button");
        toggle.textContent = p.inStock ? "Mark out of stock" : "Mark in stock";
        toggle.onclick = () => { p.inStock = !p.inStock; render(); };
        const del = document.createElement("button");
        del.textContent = "Delete";
        del.onclick = () => { products = products.filter((x) => x.id !== p.id); render(); };
        actions.append(toggle, del);
        li.append(info, actions);
        list.appendChild(li);
    });
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const price = parseFloat(document.getElementById("price").value);
    const tagText = document.getElementById("tags").value;
    const inStock = document.getElementById("inStock").checked;
    const newProduct = { id: nextId++, name, price, inStock };
    if (tagText.trim()) {
        newProduct.tags = tagText.split(",").map((t) => t.trim());
    }
    products.push(newProduct);
    form.reset();
    render();
});
filter.addEventListener("change", render);
render();
//# sourceMappingURL=app.js.map