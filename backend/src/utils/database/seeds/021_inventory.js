const Inventory = require("../models/inventory");
const { Model } = require("objection");

const inventories = [
  {
    product_id: 1,
    quantity: 1000,
  },
  {
    product_id: 2,
    quantity: 1,
  },
  {
    product_id: 3,
    quantity: 1,
  },
  {
    product_id: 4,
    quantity: 1,
  },
  {
    product_id: 5,
    quantity: 1,
  },
  {
    product_id: 6,
    quantity: 1,
  },
  {
    product_id: 7,
    quantity: 1,
  },
  {
    product_id: 8,
    quantity: 1,
  },
  {
    product_id: 9,
    quantity: 1,
  },
  {
    product_id: 10,
    quantity: 1,
  },
  {
    product_id: 11,
    quantity: 1,
  },
  {
    product_id: 12,
    quantity: 1,
  }
];

exports.seed = async function (knex) {
  Model.knex(knex);

  await Inventory.query().insert(inventories);
};
