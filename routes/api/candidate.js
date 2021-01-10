const express = require("express")
const Candidate = require('../../models/Candidates')
const Rejected = require("../../models/Rejected")
const Shortlisted = require("../../models/Shortlisted")
const router = express.Router()

// create an candidate profile
router.post('/candidate', async (req, res) => {
    // const id = rq.params.id
    let candidate = new Candidate({ ...req.body })
    console.log(candidate)

    try {
        await candidate.save()
        res.status(201).send(candidate)
    } catch (err) {
        res.status(500).send("Server error")
    }
})

// Get all Candidates
router.get('/candidates', async (req, res) => {
    try {
        let candidates = await Candidate.find({})
        res.send(candidates)
    } catch (err) {
        res.status(500).send("Server error")
    }
})

// get candidate by id
router.get("/candidate/:id", async (req, res) => {
    const _id = req.params.id
    try {
        let candidate = await Candidate.findById({ _id })
        res.send(candidate)
    } catch (err) {
        res.status(500).send("Server error")
    }
})

// get shortlisted candidate
router.get("/shortlisted", async (req, res) => {
    try {
        console.log(1)
        let shortlisted = await Candidate.find({ shortlisted: { $eq: true } })
        console.log(2)
        res.send(shortlisted)
    } catch (err) {
        res.status(500).send("Server error")
    }
})

// GET REJECTED CANDIDATE
router.get("/rejected", async (req, res) => {
    try {
        let rejected = await Candidate.find({ shortlisted: { $eq: false } })
        res.send(rejected)
    } catch (err) {
        res.status(500).send("Server error")
    }
})

// Shortlist candidate
router.patch("/shortlist/:id", async (req, res) => {
    const _id = req.params.id
    try {
        let candidate = await Candidate.findById({ _id })

        if (!candidate) res.status(404).send("Candidate does not exists.")

        candidate.shortlisted = true

        await candidate.save()

        res.status(200).send(candidate)

    } catch (err) {
        res.status(500).send("Server error")
    }
})

// reject candidate
router.patch("/reject/:id", async (req, res) => {
    const _id = req.params.id
    try {
        let candidate = await Candidate.findById({ _id })

        if (!candidate) res.status(404).send("Candidate does not exists.")

        candidate.shortlisted = false

        await candidate.save()

        res.status(200).send(candidate)

    } catch (err) {
        res.status(500).send("Server error")
    }
})


module.exports = router