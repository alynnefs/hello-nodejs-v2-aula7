exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("evento", (table) => {
    table.increments("idevento");
    table.string("nome");
    table.timestamp("data");
  });
};

exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("participante", (table) => {
    table.increments("idparticipante");
    table.string("nomeparticipante");
  });
};

exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("evento_participante", (table) => {
    table.integer("idp").inTable("participante").references("idparticipante");
    table.integer("ide").inTable("evento").references("idevento");
  });
};


exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists("evento");
  knex.schema.dropTableIfExists("participante");
  knex.schema.dropTableIfExists("evento_participante");
}; //return?



