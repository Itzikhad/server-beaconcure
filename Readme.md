# Express Node.js Server - Beaconcure

This documentation provides an overview of the Express server and its file structure.

## File Structure

The server's file structure is organized as follows:

`
-  `server.js` is the entry point of the server.
- `app.js` configures the Express application and defines routes.
- `controllers/` contains the controllers responsible for handling specific business logic.
- `routes/` contains the route definitions for the Express application.
- `services/` contains the services that interact with external resources or perform specific tasks.
- `utils/` contains utility functions and modules such as logger.


## Running Instructions

To run the server, follow these steps:

1. Install the required dependencies by running `npm install` in the root directory.
2. Start the server by running `npm start` or `node src/server.js`.
3. The server will start listening on the specified port.

**Note:** the server works with a local folder named `JSON-files-mock` contains jsonfiles in the structure requested in the assignment.


## External Libraries

The server uses the following external libraries:

- <ins>**Express.js**</ins> A fast and minimalist web application framework for Node.js.
- <ins>**Cors:**</ins> A middleware to enable Cross-Origin Resource Sharing (CORS).
- <ins>**Nodemon:**</ins> (development only): A tool that automatically restarts the server during development.

To install these libraries, run `npm install` in the root directory.


## Additional Information

For more detailed information about each file or component, please refer to the individual files and their respective comments.


### Error handling and Logging

The server logs errors and events using the **'logger.js'** utility.\
Logs are written to separate log files based on the day date.\
You can find the log files in the **'logs/'** folder. Ensure that the folder exists and has write permissions.\
**Note:** logs timezone is `UTC+00:00`.


## Future Improvements

* Add authentication and authorization middleware to secure the server.
* Implement additional routes and controllers for other functionality.
* Add configuration file for global constants such as port.
* **Improve logger:**
    * handle and present more information and details\
    * improve order of writing to logger when handling async

---
