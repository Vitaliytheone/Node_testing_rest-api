import Post from "./Post.js";

class PostService {
    async create(post) {
        const createdPost = await Post.create(post);
        return createdPost;
    }

    async getAll() {
        const posts = await Post.find();
        return posts;
    }

    async getPost(id) {
        if (!id) {
            throw Error("Id not found");
        }
        const post = await Post.findById(id);
        return post;
    }

    async updatePost(post) {
        if (!post._id) {
            throw Error("Id not found");
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
        return updatedPost;
    }

    async deletePost(id) {
        if (!id) {
            throw Error("Id not found");
        }
        const post = await Post.findOneAndDelete(id);
        return post;
    }
}

export default PostService;
