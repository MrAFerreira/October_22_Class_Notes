const { Schema, model } = require('mongoose');

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: String,
    description: String,
    rating: Number,
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  },
  {
    timestamps: true,
  }
);
//createdAt
//updatedAt

const Book = model('Book', bookSchema);

module.exports = Book;

// module.exports = model("Book", bookSchema)
