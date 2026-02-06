import { Link } from 'react-router-dom';
import brandLogo from '../../assets/icons/logo.svg';
import ContentWrapper from '../components/wrappers/ContentWrapper';
import FacebookIcon from '../components/icons/FacebookIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import InstagramIcon from '../components/icons/InstagramIcon';

const currentYear = new Date(Date.now()).getFullYear();

export default function Footer() {
	return (
		<footer className="bg-dark-800 text-light-900 mt-16 md:mt-24 lg:mt-30">
			<ContentWrapper className="grid gap-12 pt-13 pb-9.5 md:gap-8 md:pt-15 md:pb-11.5 lg:gap-9 lg:pt-18.5 lg:pb-12">
				<div className="grid justify-items-center gap-12 md:justify-items-start md:gap-8 lg:flex lg:items-center lg:justify-between">
					<a href="#">
						<img src={brandLogo} alt="Brand logo" />
					</a>

					<nav aria-label="Footer nav">
						<ul className="subtitle grid justify-items-center gap-4 md:flex md:items-center md:gap-8">
							<li>
								<a className="hover:text-primary" href="#">
									Home
								</a>
							</li>
							<li>
								<Link
									className="hover:text-primary"
									to={'/category/headphones'}
								>
									Headphones
								</Link>
							</li>
							<li>
								<Link className="hover:text-primary" to={'/category/speakers'}>
									Speakers
								</Link>
							</li>
							<li>
								<Link className="hover:text-primary" to={'/category/earphones'}>
									Earphones
								</Link>
							</li>
						</ul>
					</nav>
				</div>

				<div className="grid justify-items-center gap-12 text-center md:grid-cols-2 md:gap-y-20 md:text-start lg:gap-y-14">
					<p className="opacity-50 md:col-start-1 md:col-end-3 lg:col-end-2">
						Audiophile is an all in one stop to fulfill your audio needs. We're
						a small team of music lovers and sound specialists who are devoted
						to helping you get the most out of personal audio. Come and visit
						our demo facility - we’re open 7 days a week.
					</p>
					<p className="opacity-50 md:justify-self-start">
						Copyright {currentYear} - RR Nofuente. All Rights Reserved
					</p>
					<ul
						aria-label="Socials"
						className="flex items-center gap-4 md:justify-self-end lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:self-end"
					>
						<li>
							<a href="#">
								<FacebookIcon />
							</a>
						</li>
						<li>
							<a href="#">
								<TwitterIcon />
							</a>
						</li>
						<li>
							<a href="#">
								<InstagramIcon />
							</a>
						</li>
					</ul>
				</div>
			</ContentWrapper>
		</footer>
	);
}
