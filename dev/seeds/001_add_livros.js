/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('livros').del()
  await knex('livros').insert([
    {titulo:"Harry Potter e a pedra filosofal", autor:'JK Rowling', ano:1997, preco:95,foto:'https://imagens.disal.com.br/produtos/ampliada/4164035.jpg'},
    {titulo:"Harry Potter e a câmera secreta", autor:'JK Rowling', ano:1997, preco:95,foto:'https://imagens.disal.com.br/produtos/ampliada/4164035.jpg'},
  ]);
};
