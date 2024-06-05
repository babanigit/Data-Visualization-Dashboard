import mongoose from "mongoose";

export interface IInsight  {
    userId: mongoose.Schema.Types.ObjectId;
    end_year: string; //
    intensity: number; //
    sector: string;
    topic: string; //
    insight: string;
    url: string;
    region: string; //
    start_year: string; //
    impact: string;
    added: string;
    published: string;
    country: string; //
    relevance: number; //
    pestle: string;
    source: string;
    title: string;
    likelihood: number; //
  }