

import express from "express";

const router = express.Router();

import {getAllIns} from "../controllers/InsightsController" 

router.get("/",getAllIns);

export default router
