import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Text } from "react-bootstrap-text";

function Blog(props) {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState({});
	const [posts, setPosts] = useState([]);
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setUsers(data);
			});
	}, []);

	useEffect(() => {
		setComments([]);
		setPost({});
		fetch(`https://jsonplaceholder.typicode.com/users/${selectedUser.id}/posts`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setPosts(data);
			});
	}, [selectedUser.id]);

	useEffect(() => {
		if (post.id) {
			fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					setComments(data);
				});
		}
	}, [post.id]);

	console.log("POST ID", post);

	return (
		<div>
			<Container
				style={{
					background: "white",
					borderBottom: "1px solid lightgrey",
					borderTop: "1px solid lightgrey",
					maxWidth: "100%",
				}}
				className='p-2'>
				<div className='ms-3'>
					<h1 style={{ textAlign: "left", fontSize: "30px", color: "grey", marginBottom: "0px" }}>Blog</h1>
					<p style={{ textAlign: "left", fontSize: "20px", color: "grey" }}>
						Interactive blog using{" "}
						<a href='https://jsonplaceholder.typicode.com/'>https://jsonplaceholder.typicode.com</a>
					</p>
				</div>
			</Container>
			<Row>
				<Col md={3}>
					<Card>
						<Card.Header>Users</Card.Header>
						<Card.Body>
							{users.map((user) => {
								if (user.id === selectedUser.id) {
									return (
										<>
										<Text truncate bold>
											{user.name}
										</Text><br/>
										</>
									);
								} else {
									return (
										<>
										<span onClick={() => setSelectedUser(user)}>
											<Text as="p" truncate>{user.name}</Text>
										</span><br/>
										</>
									);
								}
							})}
						</Card.Body>
					</Card>
				</Col>
				<Col md={9}>
					{!post.id ? (
						<Card>
							<Card.Header>Posts {selectedUser.id ? <>by {selectedUser.name}</> : ""}</Card.Header>
							<Card.Body>
								{posts.map((post) => {
									return (
										<Card className='mb-3'>
											<Card.Header>
												<Card.Title>
													<Text>{post.title}</Text>
												</Card.Title>
											</Card.Header>
											<Card.Body>
												<Text>{post.body}</Text>
											</Card.Body>
											<Card.Footer>
												<Button onClick={() => setPost(post)}>Comments</Button>
											</Card.Footer>
										</Card>
									);
								})}
							</Card.Body>
						</Card>
					) : (
						<Card>
							<Card.Header>
								<Card.Title>
									<Text truncate>{post.title}</Text>
								</Card.Title>
								<Text>by {selectedUser.name}</Text>
							</Card.Header>
							<Card.Body>
								<Text>{post.body}</Text>
							</Card.Body>
							<Card.Body>
								<h3>Comments</h3>
								{comments.map((comment) => {
									return (
										<Card className='mb-1'>
											<Card.Header>
												<Text bold size='6'>
													by {comment.name} ({comment.email})
												</Text>
											</Card.Header>
											<Card.Body>
												<Text>{comment.body}</Text>
											</Card.Body>
										</Card>
									);
								})}
							</Card.Body>
							<Card.Footer>
								<Button onClick={() => setPost({})}>back</Button>
							</Card.Footer>
						</Card>
					)}
				</Col>
			</Row>
		</div>
	);
}

export default Blog;
