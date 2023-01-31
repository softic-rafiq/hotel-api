import Hotel from "../models/hotel.js"

//Create hotel controller
export const createHotelController = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save()
        res.status(201).json(savedHotel);
    } catch (err) {
        next(err); //This error goes to next middleware in the index.js.
    }

}

//Update hotel controller
export const updateHotelController = async (req, res,next) => {
    const newHotel = new Hotel(req.body);

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
                new: true
            }
        )
        res.status(200).json(updatedHotel);
    } catch (err) {
        next(err); //This error goes to next middleware in the index.js.
    }
}
//Delete hotel controller
export const deleteHotelController = async (req, res,next) => {
    try {
        await Hotel.findByIdAndDelete(
            req.params.id,
        )
        res.status(200).json("Hotel deleted successfully");
    } catch (err) {
        next(err);
    }
}

//Get single hotel controller
export const getSingleHotelController = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(
            req.params.id
        )
        res.status(200).json({ hotel });
    } catch (err) {
        next(err);
    }
}

//Get all hotel controller
export const getAllHotelController = async (req, res, next) => {
    try {
        const hotels = await Hotel.find()
        res.status(200).json({ hotels });
    } catch (err) {
        next(err);
    }
}