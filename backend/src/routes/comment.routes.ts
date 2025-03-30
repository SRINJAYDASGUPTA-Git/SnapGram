import express from 'express';
import {
createComment,
getAllCommentsByPost,
updateComment,
deleteComment,
} from '../controllers/comment.controller';
import { authenticate } from '../middleware/auth.middleware';
import { Request, Response, NextFunction } from 'express';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Comment`
 *   description: Comment endpoints
 */

/**
 * @swagger
 * /comment:
 *   post:
 *     summary: Create a comment
 *     tags: [Comment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               postId:
 *                 type: string
 *                 format: uuid
 *               body:
 *                 type: string
 *               authorId:
 *                 type: string
 *                 format: uuid
 *     responses:
 *       201:
 *         description: Comment created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/', 
    (req: Request, res: Response, next: NextFunction) => {
        authenticate(req, res, next);
    },
    async (req: Request, res: Response) => {
        await createComment(req, res);
    });

/**
 * @swagger
 * /comment:
 *   get:
 *     summary: Get all comments by post
 *     tags: [Comment]
 * 
 * */
router.get('/', 
    (req: Request, res: Response, next: NextFunction) => {
        authenticate(req, res, next);
    },
    async (req: Request, res: Response) => {
        await getAllCommentsByPost(req, res);
    });

router.put('/:id',
    (req: Request, res: Response, next: NextFunction) => {
        authenticate(req, res, next);
    },
    async (req: Request, res: Response) => {
        await updateComment(req, res);
    });

router.delete('/:id', 
    (req: Request, res: Response, next: NextFunction) => {
        authenticate(req, res, next);
    },
    async (req: Request, res: Response) => {
        await deleteComment(req, res);
    }
);

export default router;