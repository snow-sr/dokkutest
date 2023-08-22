import express from "express"
const port = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
	console.log(`GET from ${req.ip}`)
	res.send("Olá mundo, essa é a aplicação node, teste")
});

app.listen(port, () => {
  console.log(`Running at ${port}`)
})
