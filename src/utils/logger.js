/**
 * utils/logger.js
 *
 * This file contains the logger utility for logging server events and errors.
 */
import fs from 'fs';
import path from 'path';

const logsFolderPath = path.join(process.cwd(), 'logs');

// Ensure the "logs" folder exists
if (!fs.existsSync(logsFolderPath)) {
  fs.mkdirSync(logsFolderPath);
}

const logQueue = [];
let isWritingLogs = false;

/**
 * Write logs to log files.
 */
const writeLogs = () => {
    if (logQueue.length === 0 || isWritingLogs) {
      return;
    }
  
    const logData = logQueue.shift();
    const logTimestamp = new Date().toISOString();
    const logMessage = `${logTimestamp} - ${logData}\n`;
  
    const logFilePath = path.join(logsFolderPath, `server_${new Date().toISOString().split('T')[0]}.log`);
    const errorLogFilePath = path.join(logsFolderPath, `error_${new Date().toISOString().split('T')[0]}.error.log`);
  
    isWritingLogs = true;
    

    // Log to regular log file
    fs.appendFile(logFilePath, logMessage, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
      }
    });
  
    // Log to error file
    if (logData.includes('ERROR')) {
      fs.appendFile(errorLogFilePath, logMessage, (err) => {
        if (err) {
          console.error('Error writing to error log file:', err);
        }
      });
    }
  
      isWritingLogs = false;
  
      // Process next log in the queue
      writeLogs();
  };
  
  /**
 * Log a message to the console and log files.
 * @param {string} logData - The log message to be logged.
 */
  const logger = (logData) => {
    logQueue.push(logData);
  
    // Start writing logs if queue was empty
    if (logQueue.length === 1) {
      writeLogs();
    }
  };
  
export default logger;
