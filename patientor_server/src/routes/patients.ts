import express from 'express';
import patientService from "../services/patientService";
import {toNewPatient} from "../utils";

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getNonSensitiveEntries());
});


router.get("/:id", (req, res) => {
    const patient = patientService.getEntry(req.params.id);
    if (!patient) {
        return res.status(404);
    }
    return res.json(patient);
});


router.post("/", (req, res) => {
    try {
        const newPatient = toNewPatient(req.body);
        const addedPatient = patientService.addEntry(newPatient);
        res.send(addedPatient);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

export default router;