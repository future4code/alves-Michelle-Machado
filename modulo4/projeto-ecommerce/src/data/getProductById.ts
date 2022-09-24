import connection from "../connection"


/* Essa função está acessando a tabela "labecommerce_products" para verificar se 
existe um id de produto.*/
export const getProductById = async(id: string) => {

    const product = await connection("labecommerce_products")
        .select("labecommerce_products.name", "labecommerce_products.price", "labecommerce_products.image_url")
        .where({id: id})
    
        return product[0]
}