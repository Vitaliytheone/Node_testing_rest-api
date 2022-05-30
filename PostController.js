import Post from "./Post.js";

class PostController {
    async create(req, res) {
        try {
            const { author, title, content, picture } = req.body;
            const post = await Post.create({ author, title, content, picture });
            res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(_, res) {
        try {
            const posts = await Post.find();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getPost(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: "Id not found" });
            }
            const post = await Post.findById(id);
            res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async updatePost(req, res) {
        try {
            const post = req.body;
            if (!post._id) {
                res.status(400).json({ message: "Id not found" });
            }
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
            res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async deletePost(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ message: "Id not found" });
            }
            const post = await Post.findOneAndDelete(id);
            res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new PostController();
