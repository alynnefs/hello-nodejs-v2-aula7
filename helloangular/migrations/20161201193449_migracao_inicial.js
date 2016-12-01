exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("evento", (table) => {
    table.increments("idevento");
    table.string("nome");
    table.date("data");
  }).createTableIfNotExists("participante", (table) => {
    table.increments("idparticipante");
    table.string("nomeparticipante");
  }).createTableIfNotExists("evento_participante", (table) => {
    table.integer("idp").references("participante.idparticipante");
    table.integer("ide").references("evento.idevento");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("evento").dropTableIfExists("participante").dropTableIfExists("evento_participante");
};



