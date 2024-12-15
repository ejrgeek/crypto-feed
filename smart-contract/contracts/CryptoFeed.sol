// SPDX-License-Identifier: MIT
pragma solidity >=0.8.20 <0.9.0;

struct Post {
	uint id;
	address author;
	string username;
	string text;
	uint postedOn;
}

contract CryptoFeed {

	uint constant PAGE_SIZE = 10;
	uint private nextId = 0;
	mapping(uint => Post) public feed;
	mapping(address => string) public users;

	event PostCreated(uint id, address indexed author, string username, uint postedOn);
	event UsernameCreated(address indexed user, string username);
	
	function createPost(string calldata text) public {
		require(bytes(users[msg.sender]).length > 0, "You need a username to post");
		require(bytes(text).length > 0, "Post text cannot be empty");
		require(bytes(text).length <= 256, "Post text exceeds maximum length of 256 characters");

		nextId++;
		Post memory post = Post({
			id: nextId,
			author: msg.sender,
			text: text,
			postedOn: block.timestamp,
			username: users[msg.sender]
		});

		feed[nextId] = post;

		emit PostCreated(nextId, msg.sender, users[msg.sender], post.postedOn);
	}

	function createUsername(string calldata newUsername) public {
		require(bytes(users[msg.sender]).length < 1, "You have already created a username");
		require(bytes(newUsername).length >= 3, "Username must be three or more characters long");
		require(bytes(newUsername).length <= 14, "Username cannot exceed 14 characters");
		
		users[msg.sender] = newUsername;
		emit UsernameCreated(msg.sender, newUsername);
	}

	function getLastPosts(uint page) public view returns (Post[] memory){
		require(page > 0, "There is no page zero");
		uint startIndex = (PAGE_SIZE * (page-1)) + 1;

		Post[] memory lastPosts = new Post[](PAGE_SIZE);

		for (uint i = 0; i < PAGE_SIZE; i++) {
			lastPosts[i] = feed[startIndex + i];
			lastPosts[i].username = users[lastPosts[i].author];
		}

		return lastPosts;
	}

}