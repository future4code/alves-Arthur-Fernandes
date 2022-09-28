import { AuthenticatorMock } from "./Mocks/AuthenticatorMock"
import { HashManagerMock } from "./Mocks/HashManagerMock"
import { IdGeneratorMock } from "./Mocks/IdGeneratorMock"
import { UserDatabaseMock } from "./Mocks/UserDatabaseMock"
import { UserBusiness } from "../src/business/UserBusiness"
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User"


describe('Testando a UserBusiness',()=>{
   const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
   )
   test ('Token retornado', async ()=>{
        const input : ISignupInputDTO = {
            email: "fulano@gmail.com",
            name: "Fulano",
            password: "fulano123"
        }
        const response = await userBusiness.signup(input)
             expect(response.token).toBe("token-mock-normal")
   })
   test ('Teste de login',async () => {
        const input : ILoginInputDTO = {
            email:"astrodev@gmail.com",
            password: "bananinha"
        }
        const response = await userBusiness.login(input)
        expect(response.message).toBe('Login realizado com sucesso')
   } )
})