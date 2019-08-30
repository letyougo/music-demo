import {
  Component
} from 'react'

import {
  observable
} from 'mobx'
import {
  observer,
  inject
} from 'mobx-react'

import {
  getInitData
} from '../api/init'


class Init  extends Component{

  render() {
    return (
      <div>
        init
      </div>
    );
  }

  componentDidMount() {
    getInitData().then(res => {
      console.log(res)
    })
  }
}

@observer
class Layout extends Component{
  @observable isIniting = false
  render() {
    return (
      <div>
        <Init/>
      </div>
    );
  }
}




export default Layout
