const woods = [
    { name: "Oak" },
    { name: "Maple" },
    { name: "Cherry" },
    { name: "Walnut" },
    { name: "Mahogany" },
    { name: "Birch" },
    { name: "Pine" },
    { name: "Cedar" },
    { name: "Teak" },
    { name: "Rosewood" }
];

exports.seed = async function (knex) {


    return await knex('material').insert(woods)
};