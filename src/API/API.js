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
				if (response.status === 200) {
					return response.json()
				} else {
					throw new Error(response.statusText)
				}
			}
		)
		.catch(error => console.log(error))
}
