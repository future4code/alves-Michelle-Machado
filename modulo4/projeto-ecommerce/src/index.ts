import app from "./app"
import createUser from "./endpoints/CreateUser"
import getAllUsers from "./endpoints/GetAllUsers"
import createProducts from "./endpoints/CreateProducts"
import getAllProducts from "./endpoints/GetAllProducts"
import createPurchases from "./endpoints/CreatePurchases"
import getPurchasesByUser from "./endpoints/GetPurchasesByUser"

app.post("/users", createUser)
app.post("/products", createProducts)
app.post("/purchases", createPurchases)

app.get("/users", getAllUsers)
app.get("/products", getAllProducts)
app.get(`/users/:user_id/purchases`, getPurchasesByUser)

