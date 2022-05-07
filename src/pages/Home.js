import React from "react"
import { Link } from "react-router-dom"
import logo from "../images/logo.svg"
import earthIcon from "../images/earthIcon.svg"
import walletIcon from "../images/walletIcon.svg"
import ticketIcon from "../images/ticketIcon.svg"
import Input from "../components/Input"
import style from "../styles/componentsStyle/pagesstyle/Home.module.css"
const Home = () => {
	return (
		<>
			<section className={style.logoContainer}>
				<h1 className={style.logo__H1}>DISCOVER HOW TRAVELLING CAN BE EASY</h1>
				<Input
					className={style.logo__input}
					type="text"
					placeholder="Where to?"></Input>
			</section>
			<section className={style.aboutSite__container}>
				<h2 className={style.aboutSite__header}>
					How We can <p className={style.aboutSite__header__paragraph}>help</p>{" "}
					You?
				</h2>
				<div className={style.aboutSite__column__container}>
					<div className={style.aboutSite__column}>
						<img src={ticketIcon} alt="icon" className={style.aboutSite__column__image}></img>
						<h4 className={style.aboutSite__column__header}>Buy tickets</h4>
						<p className={style.aboutSite__column__paragraph}>
							Eos tota dicunt democritum no. Has natum gubergren ne. Est
							viris soleat sadipscing cu. Legere epicuri insolens eu nec,
							dicit virtute urbanitas id nam, qui in habeo semper eligendi.
						</p>
					</div>
					<div className={style.aboutSite__column}>
						<img src={earthIcon} alt="icon" className={style.aboutSite__column__image}></img>
						<h4 className={style.aboutSite__column__header}>
							Check our recommendations
						</h4>
						<p className={style.aboutSite__column__paragraph}>
							Eos tota dicunt democritum no. Has natum gubergren ne. Est
							viris soleat sadipscing cu. Legere epicuri insolens eu nec,
							dicit virtute urbanitas id nam, qui in habeo semper eligendi.
						</p>
					</div>
					<div className={style.aboutSite__column}>
						<img  src={walletIcon} alt="icon" className={style.aboutSite__column__image}></img>
						<h4 className={style.aboutSite__column__header}>
							Charge your wallet
						</h4>
						<p className={style.aboutSite__column__paragraph}>
							Eos tota dicunt democritum no. Has natum gubergren ne. Est
							viris soleat sadipscing cu. Legere epicuri insolens eu nec,
							dicit virtute urbanitas id nam, qui in habeo semper eligendi.
						</p>
					</div>
				</div>
			</section>

			<section className={style.ourService__container}>
				<h2 className={style.ourService__container__header}>Our Top Services</h2>
				<div className={style.ourService__column__container}>
					<div className={style.ourService__column}>
						<img alt="service icon" className={style.ourService__column__image}></img>
						<h4 className={style.ourService__column__header}>Plane</h4>
						<p className={style.ourService__column__paragraph}>
							At eripuit signiferumque sea, vel ad mucius molestie, cu
							labitur.
						</p>
					</div>
					<div>
						<img alt="service icon" className={style.ourService__column__image}></img>
						<h4 className={style.ourService__column__header}>Train</h4>
						<p className={style.ourService__column__paragraph}>
							At eripuit signiferumque sea, vel ad mucius molestie, cu
							labitur.
						</p>
					</div>
					<div>
						<img alt="service icon" className={style.ourService__column__image}></img>
						<h4 className={style.ourService__column__header}>Taxi</h4>
						<p className={style.ourService__column__paragraph}>
							At eripuit signiferumque sea, vel ad mucius molestie, cu
							labitur.
						</p>
					</div>
					<div>
						<img alt="service icon" className={style.ourService__column__image}></img>
						<h4 className={style.ourService__column__header}>Bus</h4>
						<p className={style.ourService__column__paragraph}>
							At eripuit signiferumque sea, vel ad mucius molestie, cu
							labitur.
						</p>
					</div>
				</div>
			</section>
			<section>
				<div>
					<img alt="reason of choose us"></img>
				</div>
				<div>
					<h4>The Reason You Choose Us</h4>
					<p>
						Assum suavitate ea vel, vero erat doming cu cum. Zril ornatus sea
						cu. Pro ex integre pertinax. Cu cum harum paulo legendos, mei et
						quod enim mnesarchum, habeo affert laoreet sea ei.
					</p>
					<Link to="/offer">About Us</Link>
				</div>
			</section>
			<section>
				<h2>Get In Touch with Easytravel</h2>
				<p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
				<Link to="/contact">Contact</Link>
			</section>
			<footer>
				<div>
					<img alt="facebook icon"></img>
					<img alt="twitter icon"></img>
					<img alt="instagram icon"></img>
					<img alt="youtube icon"></img>
					<img alt="pinterest icon"></img>
				</div>
				<div>
					<p>© easytravel. All rights reserved.</p>
				</div>
			</footer>
		</>
	)
}

export default Home
