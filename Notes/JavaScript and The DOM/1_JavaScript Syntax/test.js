const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
    name => {
        name.toLowerCase();
        name.toUpperCase();
    return name;});

console.log(...upperizedNames)