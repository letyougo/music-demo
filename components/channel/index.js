import {
	Component
} from 'react'
import styles from './index.css'
import {inject, observer} from "mobx-react";

@inject('music')
@observer
class Channel extends Component{
	render() {
		const {
			music
		} = this.props
		console.log(music)
		return (
			<div className={styles.page}>
				<div
				onClick={e => {
					this.props.onHide()
				}}
					className={styles["page--mask"]}></div>
				<div className={styles["page--content"]}>
					<div className={styles["page--content--level1"]}>
						{music.group1.map(item => <div>{item.name}</div>)}
					</div>
					<div style={{display:'flex'}}>
						<div className={styles["page--content--level2"]}>
							{music.group2.map(item => <div>{item.name}</div>)}
						</div>
						<div className={styles["page--content--level3"]}>
							{music.group3.map(item => <div>{item.name}</div>)}
						</div>
					</div>

				</div>
			</div>
		);
	}

	componentDidMount() {

	}

}

export default Channel
