const express = require("express");
const Survey = require("../models/Survey");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/* ================= CREATE SURVEY ================= */
// Protected – only logged-in users
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, questions } = req.body;

    const survey = await Survey.create({
      title,
      questions,
      createdBy: req.user.id,
    });

    res.status(201).json(survey);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ================= GET ALL SURVEYS ================= */
// Public
router.get("/", async (req, res) => {
  try {
    const surveys = await Survey.find().populate("createdBy", "name email");
    res.json(surveys);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ================= GET SINGLE SURVEY ================= */
// Public
router.get("/:id", async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id).populate(
      "createdBy",
      "name email"
    );

    if (!survey) {
      return res.status(404).json({ message: "Survey not found" });
    }

    res.json(survey);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
