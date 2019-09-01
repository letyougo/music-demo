class Base {
	json () {
		return JSON.parse(JSON.stringify(this))
	}
}
export default Base
