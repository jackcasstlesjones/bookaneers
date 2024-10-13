const db = require("../database/db");

const insert_title_author = db.prepare(
  `INSERT INTO books (title, author) VALUES ($title, $author)`
);

interface bookTypes {
  title: string;
  author: string;
}

const insertBook = (book: bookTypes) => {
  try {
    console.log(db);
    return insert_title_author.run(book);
  } catch (error) {
    console.error("Error inserting book:", error);
    throw error;
  }
};

module.exports = insertBook;

export {};
