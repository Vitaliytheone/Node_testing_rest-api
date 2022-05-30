import PostService from "./PostService.js";

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body);
            res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(_, res) {
        try {
            const posts = await PostService.getAll();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getPost(req, res) {
        try {
            const post = await PostService.getPost(req.params.id);
            res.json(post);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async updatePost(req, res) {
        try {
            const updatedPost = await PostService.updatePost(req.body);
            res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async deletePost(req, res) {
        try {
            const post = await PostService.deletePost(req.params.id);
            res.json(post);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
}

export default new PostController();
