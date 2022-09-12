import app from "./app";
import getCep from "./endpoints/getCep";


app.get('/:cep', getCep)