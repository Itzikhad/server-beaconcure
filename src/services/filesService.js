/**
 * services/filesService.js
 *
 * This file contains the service functions for file-related operations.
 */

import fs from 'fs';
import path from 'path';
import logger from '../utils/logger.js';

const externalFolderPath = path.join(process.cwd(), './JSON-files-mock');

/**
 * Get all files.
 * @returns {Promise<Array>} - A promise that resolves to an array of file data.
 */

export const getAllFiles = () => {
    console.log("dirname is", process.cwd())
    return new Promise((resolve, reject) => {
        fs.readdir(externalFolderPath, (error, files) => {
            if (error) {
                logger(`ERROR: read files directory ${externalFolderPath}`)
                reject(error);
                return;
            }
            logger(`SUCCESS: read files directory ${externalFolderPath}`)
            const filePromises = files.map((file) => {
                return new Promise((resolveFile) => {
                    const filePath = path.join(externalFolderPath, file);
                    fs.readFile(filePath, 'utf8', (error, content) => {
                        if (error) {
                            console.error(`Error reading file ${file}:`, error);
                            logger(`ERROR: reading file ${file}:` + ` ${error}`)
                            resolveFile(null);
                        } else {
                            try {
                                const jsonData = JSON.parse(content);
                                logger(`SUCCESS: reading file ${file}`)
                                resolveFile(jsonData);
                            } catch (parseError) {
                                console.error(`Error parsing JSON in file ${file}:`, parseError);
                                logger(`Error: parsing JSON in file ${file}:`, +`${parseError}`);
                                resolveFile(null);
                            }
                        }
                    });
                });
            });

            Promise.all(filePromises)
                .then((fileData) => {
                    const filteredData = fileData.filter((data) => data !== null);
                    logger(`SUCCESS: promise all files in read files directory ${externalFolderPath}`)
                    resolve(filteredData);
                })
                .catch((error) => {
                    logger(`ERROR: promise all files in read files directory ${externalFolderPath}`)
                    reject(error);
                });
        });
    });
};
