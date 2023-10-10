#!/bin/bash

until PGPASSWORD=. psql -h "localhost" -U "postgres" -d "ecommerce" -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done


npx knex migrate:up 20230819145318_schema2.js --knexfile src/utils/database/knexfile.js

npx knex seed:run --knexfile src/utils/database/knexfile.js

exit 0