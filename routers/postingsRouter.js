import express from "express";
import {
  getAllPostings,
  postPostings,
  getOnePosting,
  patchPosting,
  deletePosting,
} from "../controller/postings.js";
// import { authMiddleware } from '../middlewares/authMiddleware.js';
const postingRouter = express.Router();

postingRouter.route("/").get(getAllPostings).post(postPostings);

postingRouter
  .route("/:id")
  .get(getOnePosting)
  .delete(deletePosting)
  .patch(patchPosting);

postingRouter.route("/:id/comments");

export default postingRouter;
