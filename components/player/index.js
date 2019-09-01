import {
	Component
} from 'react'
import styles from "./index.css";
import i18n from "../../i18n";
import M1 from "../../assets/m1.mp3";
import {
	observable
} from 'mobx'
import {
	observer,
	inject,
	Provider
} from 'mobx-react'

@inject('music')
@observer
class Player extends Component{
	@observable duration = 0
	@observable pause = true
	@observable currentTime = 0
	render() {
		const {
			music
		} = this.props
		return (
			<div className={styles.control}>
				<div className={styles["control--progress"]}>
					<div className={styles["control--progress--start"]}>0</div>
					<div className={styles["control--progress--line"]}>
						<div style={{background:'#000',width: (this.currentTime /this.duration) * 100 + '%' ,height:'5px'}}></div>
					</div>
					<div className={styles["control--progress--end"]}>{this.duration}</div>
				</div>
				<div className={styles["control--button"]}>
					<div onClick={e => {
						music.collectMusicById({id:music.recommendMusic.id})
					}}>
						<div></div>
						<p>{i18n('music')['收藏频道']}</p>
					</div>
					<p className={ !this.pause ?  styles["control--button__active"] : ''} onClick={e => {
						let audio = this.refs.audio
						if(audio.paused) {
							this.refs.audio.play()
						} else {
							this.refs.audio.pause()
						}
						this.pause = audio.paused
					}}></p>
					<div>
						<div></div>
						<p>{i18n('music')['更多频道']}</p>
					</div>
				</div>
				<audio
					onTimeUpdate={e => {
						this.currentTime = this.refs.audio.currentTime
					}}
					onCanPlay={e => {
						this.duration = parseInt(this.refs.audio.duration)
					}}
					ref={'audio'} src={M1} preload="auto" ></audio>
			</div>
		);
	}

	componentDidMount() {
		console.log(this.refs.audio,this.refs.audio.duration)
	}
}

export default Player
