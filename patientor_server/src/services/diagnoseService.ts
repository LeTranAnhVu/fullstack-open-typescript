import diagnoses from '../../data/diagnoses.json'

import { Diagnose } from '../types';

const diaries: Array<Diagnose> = diagnoses;

const getEntries = (): Array<Diagnose> => {
    return diaries;
};

const addEntry = () => {
    return null;
};

export default {
    getEntries,
    addEntry
};