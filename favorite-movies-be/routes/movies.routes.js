const {Router} = require('express');
const { check, validationResult } = require('express-validator');
const Movie = require('../models/Movie');

const router = Router();

// /api/movies/list
router.get('/list', async (req, res) => {
    try {
        const movies = await Movie.find({})

        if (movies) res.status(200).json(movies)
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
})

// /api/movies/create
router.post(
'/create',
    [
        check('name', 'Name field is empty!').isLength({ min: 1}),
        check('year', 'Year field must be [1900 ... 2020]').isInt({ min: 1900, max: 2020}),
        check('duration', 'duration must be > 0').isFloat({ min: 0}),
        check('rate', 'rate must be  [0 ... 10]').isFloat({ min: 0, max: 10}),
    ],
    async (req, res) => {
    try {
        const {
            name,
            year,
            country,
            genre,
            duration,
            rate,
            producer,
            cast,
            description,
            posterUrl
        } = req.body
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json({"errors": errors.array(), "message": "Fields is not valid" })
        }

        const movie = new Movie({
            name,
            year,
            country,
            genre,
            duration,
            rate,
            producer,
            cast,
            description,
            posterUrl
        });

        await movie.save();

        res.status(201).json(movie);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" })
    }
})

router.post('/:id', async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
})

module.exports = router