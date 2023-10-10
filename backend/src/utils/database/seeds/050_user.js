const User = require("../models/user");
const { Model } = require("objection");

const users = [
    {
        first_name: "testName",
        last_name: "testLastName",
        email: "test@test.com",
        password: "123",
        main_address_id: 1,
        shipping_address_id: 1,
        role_id: 1,
    },
    {
        first_name: "testName2",
        last_name: "testLastName2",
        email: "test2@test.com",
        password: "123",
        main_address_id: 2,
        shipping_address_id: 2,
        role_id: 1,
    },
]
exports.seed = async function (knex) {
  Model.knex(knex);

  await User.query().insert(users);
};
