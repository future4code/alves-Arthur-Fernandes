import { ILikeDB, IPostDB, Post } from "../../src/models/Post"
import { BaseDatabase } from "../../src/database/BaseDatabase"

export class PostDatabaseMock {


    public toPostDBModel = (post: Post): IPostDB => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()
        }

        return postDB
    }

    public createPost = async (post: Post): Promise<void> => {

    }

    public getPosts = async (): Promise<IPostDB[]> => {
        const postsDB: IPostDB[] = [
            {
                id: '102',
                content: 'oi',
                user_id: 'id-mock'
            }, {
                id: '101',
                content: 'tchau',
                user_id: 'id-mock'
            }, {
                id: '103',
                content: 'bye',
                user_id: 'id-mock'
            }
        ]
        return postsDB
    }

    public getLikes = async (postId: string): Promise<number> => {
        if (postId== '102') return 1

        return 0

    }

    public findPostById = async (postId: string): Promise<IPostDB | undefined> => {
        switch (postId){
            case '101':
                return {
                    id: '101',
                content: 'tchau',
                user_id: 'leo'
            }
            case '102': 
            return{
                id: '102',
                content: 'oi',
                user_id: 'id-mock'
            }
            case '103':
                return{
                    id: '103',
                    content: 'bye',
                    user_id: 'id-mock'
                }
        }
        
    }

    public deletePost = async (postId: string): Promise<void> => {

    }

    public findLike = async (postId: string, userId: string): Promise<ILikeDB | undefined> => {
        if(postId ==='102'&& userId === "id-mock"){
            return {
                id : "202",
                post_id: "102",
                user_id: "id-mock"
            }
        }
    }

    public addLike = async (likeDB: ILikeDB): Promise<void> => {

    }

    public removeLike = async (postId: string, userId: string): Promise<void> => {

    }
}