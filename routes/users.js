import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// CRUD = Create Read Update Delete
// Read routes grab information but don't update the db
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

// UPDATE
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router; // so that express knows
