export const sendForm = (values)  => { //Отправка данных на сервер
	fetch(
		"https://webhook.site/f1586e87-3726-444d-ab0a-79880d3305cc", {
			mode: 'no-cors',
			method: "POST",
			body: JSON.stringify(values),
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
		.then(response => {
				if (response.status >= 300) throw new Error(response.statusText)
			}
		)

		.catch(error => console.log(error))
}

// const [uploadFile, setUploadFile] = React.useState();
// const [superHero, setSuperHero] = React.useState();
// const submitForm = (event) => {
// 	event.preventDefault();
//
// 	const dataArray = new FormData();
// 	dataArray.append("superHeroName", superHero);
// 	dataArray.append("uploadFile", uploadFile);
//
// 	fetch(
// 		"https://webhook.site/f1586e87-3726-444d-ab0a-79880d3305cc", {
// 			mode: 'no-cors',
// 			method: "POST",
// 			body: dataArray,
// 			headers: {
// 				"Content-Type": "multipart/form-data"
// 			}
// 		}
// 	)
// 		.then(response => {
// 				if (response.status !== 200) throw new Error(response.statusText)
// 			}
// 		)
// 		.catch(error => console.log(error))
// };

// <form onSubmit={submitForm}>
// 	<input
// 		type="text"
// 		onChange={(e) => setSuperHero(e.target.value)}
// 		placeholder={"Superhero Name"}
// 	/>
// 	<br />
// 	<input type="file" onChange={(e) => setUploadFile(e.target.files)} />
// 	<br />
// 	<input type="submit" />
// </form>