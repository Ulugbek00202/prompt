for (;;) {
	let user = prompt('add, bilan Ism kiriting. Toxtatish uchun stop yozing !!!')

	if (user === null) {
		console.log('Foydalanuvchi Cancel tugmasini bosdi. Yana davom etmoqda...')
		continue
	}

	if (user === 'stop') {
		console.log("Tsikl to'xtatildi")
		break
	}

	let massiv = user.split('add,')

	console.log('Ajratilgan element:', massiv.splice(0, 1))

	console.log('Qolgan massiv:', massiv)

	if (massiv === `delete ${massiv}`) {
		console.log(massiv.splice(0))
	}
}
