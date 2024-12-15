"use client"

import styles from "./page.module.css";
import Footer from "@/components/Footer";
import PostFeed from "@/components/PostFeed";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login, getUsername, createUsername, createPost, getLastPost } from "@/services/Web3Service.js";


export default function Home() {

	const [wallet, setWallet] = useState(null);

	const [username, setUsername] = useState("");

	const [hasUsername, setHasUsername] = useState(false);

	const [postText, setPostText] = useState("");

	const [triggerSendPost, setTriggerSendPost] = useState(false);

	const [feed, setFeed] = useState([]);

	const [currentPage, setCurrentPage] = useState(1);

	const notifySuccess = (message) => toast.success(message);
	const notifyError = (message) => toast.error(message);

	function loadMore() {
		setCurrentPage(currentPage + 1)
	}

	function btnConnectWallet() {
		login()
			.then(wallet => {
				notifySuccess("Wallet Connected");
				setWallet(wallet);
			})
			.catch(error => notifyError(`Connect Wallet: ${error.message}`));
	}

	function logout() {
		localStorage.removeItem("wallet");
		setHasUsername(false);
	}

	function onChangeUsernameValue(evt) {
		setUsername(evt.target.value);
	}

	function onChangePostTextValue(evt) {
		setPostText(evt.target.value);
	}

	function btnCreateUsername() {
		createUsername(username)
			.then(tx => {
				notifySuccess("Username created");
				setHasUsername(true);
			})
			.catch(error => notifyError(`Create Username: ${error.message}`));
	}

	function btnCreatePost() {
		createPost(postText)
			.then(tx => {
				notifySuccess("Post created");
				setTriggerSendPost(prev => !prev);
				setPostText("");
			})
			.catch(error => notifyError(`Create Post: ${error.message}`))
	}

	useEffect(() => {
		const connectedWallet = localStorage.getItem("wallet");
		setWallet(connectedWallet);
	});

	useEffect(() => {

		if (wallet) {
			getUsername()
				.then(usrnm => {
					if (usrnm.length >= 3) {
						setHasUsername(true);
						setUsername(usrnm);
					}
				})
				.catch(error => notifyError(`Get Username: ${error.message}`));
		}
	}, [wallet, hasUsername]);

	useEffect(() => {
		getLastPost(currentPage)
			.then((posts) => {
				const validPosts = posts.filter(post => post.username && post.username.trim() !== "");

				setFeed(prevFeed => {
					const newPosts = validPosts.filter(newPost => !prevFeed.some(existingPost => existingPost.id === newPost.id));
					return [...prevFeed, ...newPosts];
				});
			})
			.catch(error => notifyError(`Get Posts Error: ${error.message}`));
	}, [triggerSendPost, currentPage]);

	return (
		<>

			<nav className="d-flex flex-wrap justify-content-between align-items-center py-3 mb-0 container">
				<div className="nav col-md-4 mb-0 gap-3 d-flex align-items-center">
					<img src="/assets/logo.png" className="logo" width="48" />
					<p className="lead mb-0 fw-bold">Crypto Feed dApp</p>
				</div>
				<div className="nav col-md-4 mb-0 gap-3 d-flex justify-content-center">
					<p className="lead fw-bold mb-0" style={{ color: "#06B5D9" }}>Using <a style={{ color: "#06B5D9" }} href="https://testnet.bscscan.com">BSC Testnet Network</a></p>
				</div>
				{
					hasUsername
						?
						<>
							<ul className="nav col-md-4 justify-content-end align-items-center gap-5 lead d-flex">
								<li className="nav-item">
									<p className="mb-0">Welcome{`, ${username}`}</p>
								</li>
								<li className="nav-item">
									<button className="nav-link px-2 text-body-secondary" onClick={logout}>Logout</button>
								</li>
							</ul>
						</>
						: <></>
				}
			</nav>

			<ToastContainer />

			<div className={`d-flex flex-wrap justify-content-center ${hasUsername && wallet ? "align-items-start" : "align-items-center"} py-3 mb-4 container`}>
				{/* LEFT SIDE */}
				{
					!hasUsername || !wallet
						?
						<>
							<div className="col-md-6 text-center">
								<img src="assets/full-logo.png" />
							</div>
						</>
						: <></>
				}

				{/* RIGHT SIDE */}

				{
					wallet && !hasUsername
						?
						<>
							<div className="col-md-6 text-center">
								<label htmlFor="username" className="lead">Create username*</label>
								<div className="input-group justify-content-center ">
									<input type="text" className={`${styles.inputCreateUserStyle}`} id="username" onChange={onChangeUsernameValue} value={username} />
									<input type="button" value="ENTER" className={`btn ${styles.btnCreateUsernameStyle}`} onClick={btnCreateUsername} />
								</div>
								<span className="lead" style={{ fontSize: "16px" }}>*You will not be able to change it later.</span>
							</div>
						</>
						: <></>
				}
				{
					!wallet && !hasUsername
						?
						<>
							{/* BTN CONNECT */}
							<div className="col-md-6 text-center">
								<button className={`btn ${styles.btnStyle}`} onClick={btnConnectWallet}>
									<img src="assets/metamask-logo.png" width="48" />
									<span className="lead">Connect to Metamask</span>
								</button>
							</div>
						</>
						:
						<></>
				}
				{
					hasUsername && wallet
						?
						<>
							<div className={`col-md-10 ${styles.feed} `}>
								{/* FORM */}
								<div id="post-form">
									<p className="lead">Type something here</p>
									<textarea
										id="post" className={`p-2 form-control ${styles.fieldTextPost}`}
										onChange={onChangePostTextValue} maxLength={"256"}
										style={{ overflow: "hidden", resize: "none" }}
										onInput={(e) => {
											e.target.style.height = "auto";
											e.target.style.height = `${e.target.scrollHeight}px`;
										}}
									></textarea>
									<span>{postText.length}/256</span>
									<input type="button" className={`form-control ${styles.btnPostNow} mt-2`} value="Post Now" onClick={btnCreatePost}></input>
								</div>
								{/* DIVIDER */}
								<div className="row flex-lg-row mt-2 mb-2 align-items-center">
									<div className="col-md-4">
										<hr />
									</div>
									<div className={`col-md-4 ${styles.dividerText}`}>
										<span className={`lead ${styles.dividerText}`}>Posts Below</span>
									</div>
									<div className="col-md-4">
										<hr />
									</div>
								</div>
								{/* FEED */}
								<div id="feed">
									<ul className={`${styles.configFeed}`}>
										{
											feed.length > 0
												?
												<>
													{[...feed].reverse().map((postFeed, index) => (
														<li key={postFeed.id} className="mb-3">
															<PostFeed post={postFeed} />
														</li>
													))}
												</>
												:
												<>
													<div>
														<p className="lead">No posts yet</p>
													</div>
												</>
										}
									</ul>
								</div>



								{/* Botões de Paginação */}
								<div className="row flex-lg-row mt-2 mb-2 align-items-center">
									<button
										className={`btn ${styles.btnLoadMorePosts}`}
										onClick={loadMore}
									>
										Load More Posts
									</button>
								</div>
								{/* END FEED */}
							</div>
						</>
						: <></>
				}

			</div>


			<Footer />
		</>
	);
}
