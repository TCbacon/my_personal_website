import './Crypto.css';
import '../GridStyle/GridStyle.css';
import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Wrapper, CryptoTable, Icon, Title, Description, WaringMsg, Image } from './CryptocurrencyPicks.styles';
import { isPersistedState } from '../SessionStorageHelper';
import { DeviceSize } from "../Responsive";
import { ThreeD } from '../ThreeD';
import { SphereGeometry, MeshStandardMaterial, TextureLoader } from 'three';


function CryptocurrencyPicks() {

	const [crypto, setCrypto] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");
	const [isMobile, setIsMobile] = useState(window.innerWidth < DeviceSize.mobile);


	let cryptoNameSet = new Set(["Bitcoin", "Dogecoin", "Ethereum", "Bitcoin Cash", "Litecoin"]);
	const API = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR';

	useEffect(() => {
		const cryptoSessionState = isPersistedState("cryptodata");
		if (cryptoSessionState) {
			setCrypto(cryptoSessionState);
			setIsLoading(false);
			return;
		}

		Axios.get(
			`${API}`
		).then((res) => {
			var newArr = [];
			for (var obj of res.data.coins) {
				if (cryptoNameSet.has(obj.name)) {
					newArr.push(obj);
				}
			}

			setCrypto(newArr);
			sessionStorage.setItem("cryptodata", JSON.stringify(newArr));
			setIsLoading(false);
		}).catch(error => {

			if (error.response) {
				setError("Response timed out...");
			}

			else if (error.request) {
				setError("Cannot retrieve data. Check internet connection...");
			}

			else {
				setError("An error occcured...");
			}

			setIsLoading(false);

		});
	}, []);


	const gridData = () => {
		return crypto.map((val, id) => {
			return (
				<Fragment key={id}>
					<div className="rank">{id + 1}</div>
					<div className="logo">
						<a href={val.websiteUrl} target="_blank" rel="noreferrer">
							<Icon src={val.icon} alt="logo" width="50px" />
						</a>
						<p>{val.name}</p>
					</div>
					<div className="symbol">{val.symbol}</div>
					<div>${val.marketCap.toFixed(2)}</div>
					<div>${val.price.toFixed(2)}</div>
					<div>{val.availableSupply.toFixed(2)}</div>
					<div>{val.volume.toFixed(0)}</div>
				</Fragment>
			);
		});
	};


	const handleResize = () => {
		if (window.innerWidth < DeviceSize.mobile) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	// create an event listener
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	});

	return (

		isLoading
			?
			<Title><h1>Loading crypto data...</h1></Title>
			:
			<Wrapper>
				<WaringMsg>
					<h1>Disclaimer</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</WaringMsg>

				<Description>
					<h1>My Crypto Trading Experience</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum sapien quis velit sagittis, ut porttitor tortor pharetra. Vestibulum pellentesque est ipsum, non commodo lectus interdum id. Maecenas bibendum, arcu eu suscipit pharetra, quam ipsum finibus nibh, nec pulvinar nulla est eget ante. Ut eu orci id velit imperdiet cursus. Nam cursus augue eget odio fringilla tempus. Duis tincidunt rutrum viverra. Sed a vestibulum orci. Nunc nunc lacus, maximus sit amet ligula at, posuere scelerisque lorem. Donec sed tortor sem. Vestibulum consectetur facilisis neque, vitae dignissim dolor varius non.

						Sed tempor odio at congue mattis. Sed lectus nibh, fringilla sed laoreet a, aliquam in purus. Nunc suscipit feugiat commodo. Etiam vel tellus in nibh mollis auctor ac sed tellus. Sed dignissim ipsum vel est commodo facilisis. Mauris blandit lectus vel mauris tempus vestibulum. Suspendisse vel eleifend neque, pharetra luctus urna. Quisque consequat, est et sollicitudin elementum, mauris tortor facilisis elit, a pharetra quam tortor vitae erat. Vestibulum ante sapien, sollicitudin vel aliquet nec, facilisis a erat. Suspendisse suscipit vehicula orci feugiat lacinia. Praesent luctus bibendum sapien. Phasellus convallis sed sem sed dignissim. Sed dapibus luctus urna, condimentum porta urna finibus facilisis. Aliquam lacus enim, malesuada et placerat tincidunt, maximus at quam.

						Praesent sed iaculis ipsum. Duis non tellus eu libero dictum suscipit nec et metus. Aliquam erat volutpat. Nam id pulvinar ex. Donec rutrum, lectus et pulvinar vehicula, quam tellus suscipit est, quis pretium nibh elit quis diam. Aliquam non condimentum mi. Curabitur egestas sodales leo eu gravida. Cras non leo lobortis, viverra velit vel, rutrum nibh. Donec gravida et ipsum ut consectetur. Ut pretium iaculis tellus nec facilisis. Aenean condimentum, tellus quis interdum aliquet, odio metus tincidunt felis, ut vulputate erat quam sit amet risus. Proin fermentum faucibus nulla, vel ultrices metus mattis sed. Mauris condimentum enim sit amet mauris hendrerit, quis pharetra ipsum malesuada. Integer maximus feugiat velit vitae dapibus.

						Aenean cursus orci tortor, sit amet suscipit justo aliquam vitae. Duis tempor libero eu sapien vehicula finibus. Curabitur elementum purus porta ex molestie maximus. Donec auctor sit amet purus at egestas. Maecenas pulvinar pellentesque volutpat. Maecenas at urna non orci ultrices ullamcorper. Suspendisse a lacinia lorem. Pellentesque efficitur odio dolor, et iaculis risus lacinia eget. Nulla vel nibh eu libero convallis ullamcorper. Donec rhoncus ultricies ullamcorper. Curabitur vel feugiat velit. Duis nec suscipit mi, ut bibendum diam. Suspendisse facilisis at felis quis facilisis. Nullam vitae blandit tortor, non condimentum erat. Vestibulum nunc tortor, suscipit vitae tempor quis, luctus quis metus.

						Maecenas sed leo sollicitudin, mollis dui convallis, interdum elit. Donec scelerisque felis congue, ultricies ante efficitur, tempor sapien. Donec euismod lectus at ultrices mattis. Praesent ut dui arcu. Praesent viverra, eros a imperdiet consectetur, lectus magna efficitur purus, ut tincidunt lorem mi sit amet justo. Aenean eget interdum sem, id luctus metus. Nullam quam nunc, lobortis quis diam at, accumsan efficitur leo. Mauris efficitur erat et ligula euismod, eu interdum nunc luctus. Nam aliquet facilisis aliquet. Nunc sagittis enim sed sapien malesuada gravida. Curabitur nulla dui, vehicula eu laoreet non, imperdiet quis ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis tortor vestibulum nisi condimentum pretium. Pellentesque ut tincidunt quam. Duis accumsan ante in est consequat gravida. Fusce fringilla erat molestie diam tempor, at viverra turpis feugiat.
					</p>
				</Description>
				{error
					? <h1 className="cryptoErrorTitle">{error}</h1>
					:
					<Title>
						<h1 className="cryptoTitle">My Top Cryptos </h1>
					</Title>
				}
				{isMobile ? <p className="scrollText">Scroll → to see more stats...</p> : <p></p>}

				<CryptoTable>
					<div className="header">Rank</div>
					<div className="header">Name</div>
					<div className="header">Symbol</div>
					<div className="header">Market Cap</div>
					<div className="header">Price</div>
					<div className="header">Available Supply</div>
					<div className="header">Volume(24hrs)</div>
					{gridData()}
				</CryptoTable>

				<Description>
					<h1>My Favorite Cryptocurrency</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum sapien quis velit sagittis, ut porttitor tortor pharetra. Vestibulum pellentesque est ipsum, non commodo lectus interdum id. Maecenas bibendum, arcu eu suscipit pharetra, quam ipsum finibus nibh, nec pulvinar nulla est eget ante. Ut eu orci id velit imperdiet cursus. Nam cursus augue eget odio fringilla tempus. Duis tincidunt rutrum viverra. Sed a vestibulum orci. Nunc nunc lacus, maximus sit amet ligula at, posuere scelerisque lorem. Donec sed tortor sem. Vestibulum consectetur facilisis neque, vitae dignissim dolor varius non.

						Sed tempor odio at congue mattis. Sed lectus nibh, fringilla sed laoreet a, aliquam in purus. Nunc suscipit feugiat commodo. Etiam vel tellus in nibh mollis auctor ac sed tellus. Sed dignissim ipsum vel est commodo facilisis. Mauris blandit lectus vel mauris tempus vestibulum. Suspendisse vel eleifend neque, pharetra luctus urna. Quisque consequat, est et sollicitudin elementum, mauris tortor facilisis elit, a pharetra quam tortor vitae erat. Vestibulum ante sapien, sollicitudin vel aliquet nec, facilisis a erat. Suspendisse suscipit vehicula orci feugiat lacinia. Praesent luctus bibendum sapien. Phasellus convallis sed sem sed dignissim. Sed dapibus luctus urna, condimentum porta urna finibus facilisis. Aliquam lacus enim, malesuada et placerat tincidunt, maximus at quam.

						Praesent sed iaculis ipsum. Duis non tellus eu libero dictum suscipit nec et metus. Aliquam erat volutpat. Nam id pulvinar ex. Donec rutrum, lectus et pulvinar vehicula, quam tellus suscipit est, quis pretium nibh elit quis diam. Aliquam non condimentum mi. Curabitur egestas sodales leo eu gravida. Cras non leo lobortis, viverra velit vel, rutrum nibh. Donec gravida et ipsum ut consectetur. Ut pretium iaculis tellus nec facilisis. Aenean condimentum, tellus quis interdum aliquet, odio metus tincidunt felis, ut vulputate erat quam sit amet risus. Proin fermentum faucibus nulla, vel ultrices metus mattis sed. Mauris condimentum enim sit amet mauris hendrerit, quis pharetra ipsum malesuada. Integer maximus feugiat velit vitae dapibus.

						Aenean cursus orci tortor, sit amet suscipit justo aliquam vitae. Duis tempor libero eu sapien vehicula finibus. Curabitur elementum purus porta ex molestie maximus. Donec auctor sit amet purus at egestas. Maecenas pulvinar pellentesque volutpat. Maecenas at urna non orci ultrices ullamcorper. Suspendisse a lacinia lorem. Pellentesque efficitur odio dolor, et iaculis risus lacinia eget. Nulla vel nibh eu libero convallis ullamcorper. Donec rhoncus ultricies ullamcorper. Curabitur vel feugiat velit. Duis nec suscipit mi, ut bibendum diam. Suspendisse facilisis at felis quis facilisis. Nullam vitae blandit tortor, non condimentum erat. Vestibulum nunc tortor, suscipit vitae tempor quis, luctus quis metus.

						Maecenas sed leo sollicitudin, mollis dui convallis, interdum elit. Donec scelerisque felis congue, ultricies ante efficitur, tempor sapien. Donec euismod lectus at ultrices mattis. Praesent ut dui arcu. Praesent viverra, eros a imperdiet consectetur, lectus magna efficitur purus, ut tincidunt lorem mi sit amet justo. Aenean eget interdum sem, id luctus metus. Nullam quam nunc, lobortis quis diam at, accumsan efficitur leo. Mauris efficitur erat et ligula euismod, eu interdum nunc luctus. Nam aliquet facilisis aliquet. Nunc sagittis enim sed sapien malesuada gravida. Curabitur nulla dui, vehicula eu laoreet non, imperdiet quis ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis tortor vestibulum nisi condimentum pretium. Pellentesque ut tincidunt quam. Duis accumsan ante in est consequat gravida. Fusce fringilla erat molestie diam tempor, at viverra turpis feugiat.
					</p>
					<Image src='https://fakeimg.pl/300x300/?text=crypto img' alt="crypto-img" />
					<ThreeD
						geo={new SphereGeometry(5, 100, 100, 5)}
						mat={new MeshStandardMaterial({ map: new TextureLoader().load("https://fakeimg.pl/300x300/?text=crypto img"), color: 0xFD8EBB })}
						duration={16000}
						yRot={0.02}
						width={200}
						height={200}
					/>
				</Description>

			</Wrapper>

	);
}


export default CryptocurrencyPicks;
