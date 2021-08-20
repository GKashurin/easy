export const prices = [
	{
		id: 0,
		price: "до 500 тыс. ₽",
	},
	{
		id: 1,
		price: "до 1 млн. ₽",
	},
	{
		id: 2,
		price: "от 1 млн. ₽",
	},
	{
		id: 3,
		price: " не знаю",
	},
] //состояние для бюджета

export const checkboxes = [
	{
		name: 'AR',
		text: 'AR',
		pathname: '/vr-ar',

	},
	{
		name: 'VR',
		text: 'VR',
		pathname: '/vr-ar',

	},
	{
		name: 'mobile',
		text: 'Мобильное приложение',
		pathname: '/mobile',

	},
	{
		name: 'web',
		text: 'Веб-разработка',
		pathname: '/web',

	},
	{
		name: '3D',
		text: '3D моделирование',
		pathname: '/tours360',

	},
	{
		name: 'chatbot',
		text: 'чат-бот',
		pathname: '/chat',

	},
	{
		name: 'VFX',
		text: 'VFX',
		pathname: '/vfx',

	},
	{
		name: 'instaMask',
		text: 'Инстаграм-маска',
		pathname: '/instamask',

	},
	{
		name: 'another',
		text: 'не знаю',
		pathname: '/',

	},

]; //состояние для видов проекта


//Валидация почты
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const validateEmail = (event) => {
// 	setEmail(event.target.value)
// 	if (emailRegex.test(event.target.value)) {
// 		setIsValidMail(true);
// 	} else {
// 		setIsValidMail(false);
// 	}
// };

//Валидация имени
// const nameRegex = /^(?=.{2,15}$)[a-zA-Z][a-zA-Z0-9]*(?: [a-zA-Z0-9]+)*$/
// const validateName = (event) => {
// 	setName(event.target.value)
// 	if (nameRegex.test(event.target.value)) {
// 		setIsValidName(true);
// 	} else {
// 		setIsValidName(false);
// 	}
// };