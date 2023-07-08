/**
 * controllers/filesController.js
 *
 * This file contains the controller functions for handling file-related operations.
 */

import fileService from '../services/fileService';

/** 
 * Get all files.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
const getAllFiles = (req, res) => {
    try {
        const files = fileService.getAllFiles();
        res.json(files);
    }
    catch (err) {
        logger(`Error in service get files`)
        res.status(500).send("error", err)
    }
};


export default getAllFiles;