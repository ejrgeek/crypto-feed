// SPDX-License-Identifier: MIT
pragma solidity >=0.8.20 <0.9.0;

struct Post {
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
	
	function createPost(string calldata text) public{

		nextId++;
		Post memory post = Post({
			author: msg.sender,
			text: text,
			postedOn: block.timestamp,
			username: users[msg.sender]
		});
		
		feed[nextId] = post;

		emit PostCreated(nextId, msg.sender, users[msg.sender], post.postedOn);
	}

	function changeUsername(string calldata newUsername) public {
		require(bytes(newUsername).length >= 3, "Username must be three or more characters long");
		users[msg.sender] = newUsername;
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