import express from 'express'
import { createHotelController, deleteHotelController, getAllHotelController, getSingleHotelController, updateHotelController } from '../controllers/hotelController.js';
import { verifyAdmin } from '../utils/verifyToken.js';


const router = express.Router();

//Hotel routes here

//Create
router.post("/",verifyAdmin, createHotelController)

//Update
router.put("/:id",verifyAdmin, updateHotelController)

//Delete
router.delete("/:id",verifyAdmin, deleteHotelController)

//Get Single

router.get("/:id", getSingleHotelController)

//Get All
router.get("/", getAllHotelController)


export default router