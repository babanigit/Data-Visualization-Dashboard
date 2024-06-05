import  { Request, Response } from "express";
import InsightModel from "../models/blackCofferDataModel";

export const getAllIns = async (req: Request, res: Response) => {
  const myData = await InsightModel.find({});
  res.status(200).json(myData);
};
