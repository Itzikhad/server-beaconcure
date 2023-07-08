/**
 * routes/files.js
 *
 * This file contains the route definition for handling file-related requests.
 */

import express from 'express';
import { getAllFiles } from '../services/filesService.js';
import logger from '../utils/logger.js';

const router = express.Router();
// function initiateError() {
//     throw new Error("error from get files service")
// }

/**
 * GET /api/files
 * Route for retrieving all files.
 */
router.get('/', (req, res) => {
    logger(`GET request received from ${req.ip}`);
    getAllFiles()
        .then((files) => {
            logger(`SUCCESS: GET request received from ${req.ip}`);
            res.json(files);
        })
        .catch((error) => {
            console.error('Error retrieving files:', error);
            logger(`ERROR: GET request retrieving files: ${error}`);
            res.status(500).json({ error: 'An error occurred while retrieving files' });
        });
});

export default router;

