const CryptoFeed = artifacts.require("CryptoFeed");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("CryptoFeed", function (accounts) {
	let cryptoFeed;

	const user1 = accounts[0];
	const user2 = accounts[1];

	const username1 = "Erlon";
	const username2 = "Vitor";

	beforeEach(async () =>{
		cryptoFeed = await CryptoFeed.new();
	});
	
	it("should fail if username is less than three characters", async () => {
		try {
			await cryptoFeed.changeUsername("Er", {from: user1});
			assert.fail("Expected revert not received");
		} catch (err) {
			assert(err.message.includes("Username must be three or more characters long"));
		}
	});

	it("should allow users to change their username", async () => {
		await cryptoFeed.changeUsername(username1, {from: user1});
		const username = await cryptoFeed.users(user1);
		assert.equal(username, username1, "Username should be updated");
	});

	it("should allow users to create a post", async () => {
		await cryptoFeed.changeUsername(username1, {from: user1});
		await cryptoFeed.createPost("Test post", {from: user1});

		const post = await cryptoFeed.feed(1);

		assert.equal(post.author, user1, "Author should be the user that created the post");
		assert.equal(post.text, "Test post", "Text of the post should match");
		assert.equal(post.username, username1, "Username in post should be corret");
	});

	it("should fail if an invalid page number is requested", async () => {
		try {
			await cryptoFeed.getLastPosts(0);
			assert.fail("Expected revert not received");
		} catch (err) {
			assert(err.message.includes("There is no page zero"), "Expected error for invalide page number")
		}
	});

	it("should paginate posts correctly", async () => {
		await cryptoFeed.changeUsername(username1, {from: user1});
		await cryptoFeed.createPost("Post 1", {from: user1});

		await cryptoFeed.changeUsername(username2, {from: user2});
		await cryptoFeed.createPost("Post 2", {from: user2});
		
		const posts = await cryptoFeed.getLastPosts(1);
		assert.equal(posts.length, 10, "Should return a page with 10 posts");
		assert.equal(posts[0].text, "Post 1", "The first post text should match");
		assert.equal(posts[1].text, "Post 2", "The second post text should match");

	});
	

	afterEach(async () => {
		cryptoFeed = await CryptoFeed.new();
	});	
	

});
