import React from "react";
import posts from "./posts";
import Post from "./Post";
import UserButton from "./UserButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPosts: posts,
      oneToTen: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  }

  whenTheButtonIsClicked = (user) => {
    console.log(user);
    let selectedUser = user;
    let filteredPosts = posts.filter((post) => post.userId === selectedUser);
    this.setState({ filteredPosts: filteredPosts });
  };
  render() {
    let userIds = [...new Set(posts.map((post) => post.userId))];
    return (
      <div className="main-content">
        <div>
          {userIds.map((uid) => (
            <UserButton
              whenClicked={this.whenTheButtonIsClicked.bind(this)}
              key={uid}
              user={uid}
            />
          ))}
          <button onClick={() => this.setState({ filteredPosts: posts })}>
            Reset
          </button>
        </div>
        <ul>
          {this.state.filteredPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
