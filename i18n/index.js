import music from './music'
import user from './user'
let country = 'cn'
let map = {
	music,
	user
}
export const setCountry = (ct) => {
	country = ct
}

const i18n = (key) => {
	return map[key][country]
}
window.i18n = i18n
export default i18n
