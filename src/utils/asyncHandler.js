
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    // Express provides req, res, and next when the route is executed
    Promise.resolve(requestHandler(req, res, next)) // Resolve the requestHandler (it could be sync or async)
      .catch((err) => next(err)); // If an error happens, pass it to next middleware (error handler)
  };
};


export {asyncHandler}

// const asyncHandler = () => {}
// const asyncHandler = () => { () => {}}
// const asyncHandler = () => () => {}
// const asyncHandler = (func)=> async() => {}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         response.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
        
//     }
// }







// const asyncHandler = require("express-async-handler"); // or define your own

// // Example async function to handle fetching user data
// const getUser = async (req, res) => {
//   const userId = req.params.id; // Extract user ID from the route params

//   // Simulate fetching user data from the database (this is an async operation)
//   const user = await User.findById(userId); // User.findById returns a promise

//   if (!user) {
//     // If user not found, return 404
//     return res.status(404).json({ success: false, message: "User not found" });
//   }

//   // Send the user data as a response
//   res.status(200).json({ success: true, data: user });
// };

// // Pass the route handler to the GET method and wrap it with asyncHandler
// app.get("/user/:id", asyncHandler(getUser));
