import { Request, Response, NextFunction, Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import { getUserById, getAllUsers } from "../controllers/user.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User endpoints
 */

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Get user details by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: UUID of the user to fetch
 *     responses:
 *       200:
 *         description: User fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 *                 name:
 *                   type: string
 *                 bio:
 *                   type: string
 *                 phone_number:
 *                   type: string
 *                 dp_url:
 *                   type: string
 *       500:
 *         description: Internal server error
 */
router.get(
  "/:id",
  (req: Request, res: Response, next: NextFunction) => {
    authenticate(req, res, next);
  },
  async (req: Request, res: Response) => {
    await getUserById(req, res);
  }
);


/**
 * @swagger
 * /user:
 *   get:
 *     summary: Register a new user
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Users fetched successfully
 *         content:
 *          application/json:
 *           schema:
 *            type: array
 *            items:
 *             type: object
 *             properties:
 *              id:
 *               type: integer
 *              username:
 *               type: string 
 *              email:
 *               type: string
 *              name:
 *               type: string
 *              bio:
 *               type: string
 *              phone_number:
 *               type: string
 *              dp_url:
 *               type: string
 * 
 *       500:
 *         description: Internal server error
 */
router.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    authenticate(req, res, next);
  },
  async (req: Request, res: Response) => {
    await getAllUsers(req, res);
  }
);

export default router;