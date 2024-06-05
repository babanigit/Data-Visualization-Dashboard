import mongoose from "mongoose";
// Define the Mongoose schema
const insightSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  end_year: { type: String, default: "" },
  intensity: { type: Number, required: true },
  sector: { type: String, required: true },
  topic: { type: String, required: true },
  insight: { type: String, required: true },
  url: { type: String, required: true },
  region: { type: String, required: true },
  start_year: { type: String, default: "" },
  impact: { type: String, default: "" },
  added: { type: String, required: true },
  published: { type: String, required: true },
  country: { type: String, required: true },
  relevance: { type: Number, required: true },
  pestle: { type: String, required: true },
  source: { type: String, required: true },
  title: { type: String, required: true },
  likelihood: { type: Number, required: true },
});

// Create the Mongoose model
const InsightModel = mongoose.model("Insight", insightSchema);

export default InsightModel;
