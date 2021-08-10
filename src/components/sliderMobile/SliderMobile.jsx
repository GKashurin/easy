import React, {Component} from "react"
import Card from "./Card";

export class SliderMobile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			radius: 150,
			cards: [],
			theta: 0.0
		}
		this.temp_theta = 0.0;
		this.anim_id = null;
	}

	componentDidMount() {
		let center_of_wheel = {
			x: parseFloat(this.wheel.style.width) / 2.0,
			y: parseFloat(this.wheel.style.height) / 2.0,
		}
		let new_cards = [];

		for (let i = 0; i < 8; i++) {
			new_cards.push(
				<Card theta={(Math.PI / 4.0) * i} radius={this.state.radius} center={center_of_wheel} key={`card_${i}`}/>
			)
		}

		this.setState({cards: new_cards})
	}

	handle_scroll = e => {
		clearTimeout(this.anim_id)
		this.temp_theta = this.temp_theta - 200;
		this.wheel.style.transform = `translate(-50%, -50%) rotate(${this.temp_theta}deg)`;
		this.anim_id = setTimeout(() => {
			this.setState({theta: this.temp_theta});
		},150)
	}

	render() {
		return (
			<div onClick={this.handle_scroll} ref={ref_id => this.wheel = ref_id} style={styles.wheel}>
				{this.state.cards}
			</div>
		)
	}
}

const styles = {
	wheel: {
		position: "absolute",
		top: "50%",
		left: "0",
		height: "150px",
		width: "150px",
		backgroundColor: "transparent",
		transform: "translate(-50%, -50%)",
		borderRadius: "50%",
	}
}

export default SliderMobile;

