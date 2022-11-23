//mongoose
const { Schema, model } = require('mongoose');

const projectSchema = new Schema(
  {
    title: String,
    description: String,
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
    imageUrl: String,
  },

  { timestamps: true }
);

module.exports = model('Project', projectSchema);
