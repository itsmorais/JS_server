/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('livros').del()
  await knex('livros').insert([
    { titulo: "Harry Potter e a pedra filosofal", autor: 'JK Rowling', ano: 1997, preco: 95, foto: 'https://imagens.disal.com.br/produtos/ampliada/4164035.jpg' },
    { titulo: "Harry Potter e a câmera secreta", autor: 'JK Rowling', ano: 1997, preco: 95, foto: 'https://imagens.disal.com.br/produtos/ampliada/4164035.jpg' },
    { titulo: "Jogos vorazes", autor: 'Suzanne Collins', ano: 2008, preco: 32, foto: 'https://m.media-amazon.com/images/I/61zBhzjS4LL._AC_UF1000,1000_QL80_.jpg' },
    { titulo: "Sapiens", autor: 'Yuval Noah Harari', ano: 2011, preco: 56, foto: 'https://cdn.kobo.com/book-images/7165f0d7-a437-4313-8294-68cfcaf3d717/353/569/90/False/sapiens-5.jpg' },
    { titulo: "É assim que acaba", autor: 'Collen Hoover', ano: 2016, preco: 33, foto: 'https://m.media-amazon.com/images/I/91r5G8RxqfL._AC_UF1000,1000_QL80_.jpg' },


  ]);
};
