import Cinema from "../models/Cinema.js";

export const createCinema = async (req, res, next) => {
    const newCinema = new Cinema(req.body);

    try {
        const savedCinema = await newCinema.save();
        res.status(200).json(savedCinema);
    } catch (err) {
        next(err);
    }
};

export const updateCinema = async (req, res, next) => {
    try {
        const updatedCinema = await Cinema.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCinema);
    } catch (err) {
        next(err);
    }
};

export const deleteCinema = async (req, res, next) => {
    try {
        await Cinema.findByIdAndDelete(req.params.id);
        res.status(200).json("Cinema has been deleted");
    } catch (err) {
        next(err);
    }
};

export const getCinema = async (req, res, next) => {
    try {
        const cinema = await Cinema.findById(req.params.id);
        res.status(200).json(cinema);
    } catch (err) {
        next(err);
    }
};

export const getCinemas = async (req, res, next) => {
    try {
        const cinemas = await Cinema.find(req.params.id);
        res.status(200).json(cinemas);
    } catch (err) {
        next(err);
    }
};

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(
            cities.map((city) => {
                return Cinema.countDocuments({ city: city });
            })
        );
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
};
export const countByType = async (req, res, next) => {
    try {
        const chaplinCount = await Cinema.countDocuments({ type: "chaplin" });
        const kinoparkCount = await Cinema.countDocuments({ type: "kinopark" });
        const kinoplexCount = await Cinema.countDocuments({ type: "kinoplex" });
        const armanCount = await Cinema.countDocuments({ type: "arman" });

        res.status(200).json([
            { type: "chaplins", count: chaplinCount },
            { type: "kinoparks", count: kinoparkCount },
            { type: "kinoplex's", count: kinoplexCount },
            { type: "armans", count: armanCount },
        ]);
    } catch (err) {
        next(err);
    }
};
