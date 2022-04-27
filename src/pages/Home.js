import React from "react"
import { Link } from "react-router-dom"
import logo from "../images/logo.svg"
import Input from "../components/Input"
import style from "../styles/componentsStyle/pagesstyle/Home.module.css"
const Home = () => {
	return (
		<>
			<section className={style.logoContainer}>
				<h1 className={style.logo__H1}>DISCOVER HOW TRAVELLING CAN BE EASY</h1>
				<Input className={style.logo__input} type="text" placeholder="Where to?"></Input>
			</section>
			<section>
				<h2>How We can help You?</h2>
				<div>
					<div>
						<img alt="icon"></img>
						<h4>Buy tickets</h4>
						<p>
							Eos tota dicunt democritum no. Has natum gubergren ne. Est
							viris soleat sadipscing cu. Legere epicuri insolens eu nec,
							dicit virtute urbanitas id nam, qui in habeo semper eligendi.
						</p>
					</div>
					<div>
						<img alt="icon"></img>
						<h4>Check our recommendations</h4>
						<p>
							Eos tota dicunt democritum no. Has natum gubergren ne. Est
							viris soleat sadipscing cu. Legere epicuri insolens eu nec,
							dicit virtute urbanitas id nam, qui in habeo semper eligendi.
						</p>
					</div>
					<div>
						<img alt="icon"></img>
						<h4>Charge your wallet</h4>
						<p>
							Eos tota dicunt democritum no. Has natum gubergren ne. Est
							viris soleat sadipscing cu. Legere epicuri insolens eu nec,
							dicit virtute urbanitas id nam, qui in habeo semper eligendi.
						</p>
					</div>
				</div>
			</section>

            <section>
            <h2>Our Top Services</h2>
            <div>
                <div>
                    <img alt="service icon"></img>
                    <h4>Plane</h4>
                    <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
                </div>
                <div>
                    <img alt="service icon"></img>
                    <h4>Train</h4>
                    <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
                </div>
                <div>
                    <img alt="service icon"></img>
                    <h4>Taxi</h4>
                    <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
                </div>
                <div>
                    <img alt="service icon"></img>
                    <h4>Bus</h4>
                    <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
                </div>

            </div>

            </section>
            <section>
                <div>
                    <img alt="reason of choose us"></img>
                </div>
                <div>
                    <h4>The Reason You Choose Us</h4>
                    <p>Assum suavitate ea vel, vero erat doming cu cum. Zril ornatus sea cu. Pro ex integre pertinax. Cu cum harum paulo legendos, mei et quod enim mnesarchum, habeo affert laoreet sea ei.</p>
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
