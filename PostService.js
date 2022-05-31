import Post from "./Post.js";
import FileService from "./FileService.js";

class PostService {
    async create(post, picture) {
        const fileName = FileService.saveFile(picture);
        const createdPost = await Post.create({ ...post, picture: fileName });
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
