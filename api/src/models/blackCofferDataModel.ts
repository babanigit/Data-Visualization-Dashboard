import mongoose, { Schema, Document } from "mongoose";

// Define the interface for the document
export interface IInsight extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  end_year: string;
  intensity: number;
  sector: string;
  topic: string;
  insight: string;
  url: string;
  region: string;
  start_year: string;
  impact: string;
  added: string;
  published: string;
  country: string;
  relevance: number;
  pestle: string;
  source: string;
  title: string;
  likelihood: number;
}

// Define the Mongoose schema
const insightSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
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
const InsightModel = mongoose.model<IInsight>("Insight", insightSchema);

export default InsightModel;
