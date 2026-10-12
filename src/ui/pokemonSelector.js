const selector = document.getElementById('type-select');

export function populateTypeSelector(types) {
    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        selector.appendChild(option);
    });
}