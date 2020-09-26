const express = require("express")
const port = process.env.PORT || 3000
const app = express();
const mealsRoute = require("./routes/meals.route")
const ordersRoute = require("./routes/pedidos.route")
const userRoute = require("./routes/users.route")

app.use(express.json())

app.use("/platos", mealsRoute)
app.use("/pedidos", ordersRoute)
app.use("/usuario", userRoute)



app.listen(port, (req, res) => {
    console.log("app Delilah funcionando")
})



