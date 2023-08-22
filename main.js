import express from "express"
// import { getAllMusics, createAlotOfMusics, createMusic, getMusicById } from "./prisma/dbFunctions.js'";
const port = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
	res.send(`Olá mundo, essa é a aplicação node - ${req.ip}`)
});

app.get("/env", (req, res) => {
	res.send(`${process.env}`)
})

// app.get("/musics", async (req, res) => {
// 	const musics = await getAllMusics()
// 	res.send(`${musics} - ${req.ip}`)
// });

// app.get("/createMusic", (req, res) => {
// 	const newMusic = createMusic(music)
// 	res.send(`${newMusic} - ${req.ip}`)
// });

// app.get("/music/", async (req, res) => {
// 	// basic music
// 	const music = {
// 		name: "Teste",
// 		artist: "Teste",
// 		album: "Teste",
// 		year: 2021
// 	}

// 	const newMusic = await createMusic(music)
// 	res.send(`${newMusic} - ${req.ip}`)
// });

// app.get("/createAlotOfMusics", async (req, res) => {
// 	// array of musics
// 	const musics = [
// 		{
// 			name: "Teste1",
// 			artist: "Teste",
// 			album: "Teste",
// 			year: 2021
// 		},
// 		{
// 			name: "Teste2",
// 			artist: "Teste",
// 			album: "Teste",
// 			year: 2021
// 		},
// 		{
// 			name: "Teste3",
// 			artist: "Teste",
// 			album: "Teste",
// 			year: 2021
// 		}
// 	]
// 	const newMusics = await createAlotOfMusics(musics)
// 	res.send(`${newMusics} - ${req.ip}`)
// });

app.listen(port, () => {
	console.log(`Running at ${port}`)
})


