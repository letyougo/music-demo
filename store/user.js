import Base from './base'
import { observable, computed, action, autorun, when } from 'mobx'
import {
	getUserDetail
} from '../api/user'
import {
	setCountry
} from '../i18n'

class User extends Base{
	@observable name = 'jay'

	@action.bound
	async fetch(){
		let {
			data,stutus
		} = await getUserDetail()
		setCountry(data.country)
		this.data = data
		return data
	}
}

const user = new User()
export default user
