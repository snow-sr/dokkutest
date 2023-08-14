import express from "express"
const port = 9204;
const app = express();

app.get("/", (req, res) => {
	console.log(`GET from ${req.ip}`)
	res.send("Olá mundo, essa é a aplicação node")
});

app.listen(port, () => {
  console.log(`Running at ${port}`)
})
