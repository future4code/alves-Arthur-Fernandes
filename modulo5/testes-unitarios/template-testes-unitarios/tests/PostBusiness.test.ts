import { PostBusiness } from '../src/business/PostBusiness'
import { PostDatabaseMock } from './Mocks/PostDatabaseMock'
import { AuthenticatorMock } from './Mocks/AuthenticatorMock'
import { IdGeneratorMock } from './Mocks/IdGeneratorMock'
import { IAddLikeInputDTO, ICreatePostInputDTO, IDeletePostInputDTO, IGetPostsInputDTO } from '../src/models/Post'
describe('Testando PostBusiness', ()=>{
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )
    test('Test retorna posts', async () => {
        const input: IGetPostsInputDTO = {
            token:"token-mock-normal"
        }
        const response = await postBusiness.getPosts(input)
        expect(response.posts.length).toBeGreaterThan(0)
    })
    test ('Test create post', async () => {
        const input : ICreatePostInputDTO = {
            token:"token-mock-normal",
            content : "Hello Wolrd"
        }
        const response = await postBusiness.createPost(input)
        expect(response.message).toBe('Post criado com sucesso')
    })
    test ('Test Delete Post', async () => {
        const input : IDeletePostInputDTO = {
            token: "token-mock-admin",
            postId: "102"
        }
        const response = await postBusiness.deletePost(input)
        expect(response.message).toBe('Post deletado com sucesso')
    
    })
    test ('Test addLike', async () => {
        const input : IAddLikeInputDTO = {
            token: "token-mock-normal",
            postId : "101"
        }
        const response = await postBusiness.addLike(input)
        expect(response.message).toBe('Like realizado com sucesso')
    })
    test ('Test remove like', async () => {
        const input : IAddLikeInputDTO = {
            token: "token-mock-normal",
            postId : "102"
        }
        const response = await postBusiness.removeLike(input)
        expect(response.message).toBe("Like removido com sucesso")
    })
})