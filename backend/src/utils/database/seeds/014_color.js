const colors = [
    { name: "Black" },
    { name: "White" },
    { name: "Gray" },
    { name: "Beige" },
    { name: "Brown" },
    { name: "Red" },
    { name: "Blue" },
    { name: "Green" },
    { name: "Yellow" },
    { name: "Orange" }
];

exports.seed = async function (knex) {
    return await knex('color').insert(colors)
};