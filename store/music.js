import { observable, computed, action, autorun, when } from 'mobx'
class Music {
  @observable name = 'jay'
}

const music = new Music()
