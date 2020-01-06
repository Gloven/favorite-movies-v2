const {Router} = require('express');
const { check, validationResult } = require('express-validator');
const Movie = require('../models/Movie');

const router = Router();

// GET LIST ALL MOVIES

router.get('/list', async (req, res) => {
    try {
        const movies = await Movie.find({})

        if (movies) res.status(200).json(movies)
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
})


// CREATE NEW MOVIE

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
        console.error(error.message)
        res.status(500).json({ message: "Server error" })
    }
})

// GET ONE FIELD BY ID

router.post('/:id',  [
    check('id', 'Id is not valid').isMongoId()
    ],
    async (req, res) => {
    try {
        const { id } = req.params

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json({"errors": errors.array(), "message": "Fields is not valid" })
        }

        const movie = await Movie.find({ '_id': id })

        if (movie) res.status(200).json(movie)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Server error" })
    }
})

// UPDATE MOVIE

router.patch('/:id',  [
    check('id', 'Id is not valid').isMongoId()
    ],
    async (req, res) => {
    try {
        const { id } = req.params

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json({"errors": errors.array(), "message": "Fields is not valid" })
        }

        await Movie.update(
            { '_id': id },
            { $set: { ...req.body }}
        )
        const movie =  await Movie.find({ '_id': id });

        if (movie) res.status(200).json(movie)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Server error" })
    }
})

module.exports = router