const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// const asyncHandler = (func) => async (req, res, next) => {
//   try {
//     await func(req, res, next);
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message || "Internal server error",
//     });
//     next(err);
//   }
// };
