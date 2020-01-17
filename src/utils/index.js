export const sortByLabelReverse = (a, b) => {
    if(a.label.toLocaleLowerCase() < b.label.toLocaleLowerCase()) {
        return 1;
    }

    return -1;
};

export const changeItemProperty = (items, id, propName, value) => {
    const idx = items.findIndex((item) => item.id === id);
    const item = { ...items[idx], [propName]: value };

    return [
        ...items.slice(0, idx),
        item,
        ...items.slice(idx + 1)
    ];
};