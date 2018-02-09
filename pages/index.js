import { compose, withState, withHandlers, lifecycle } from 'recompose';
import io from 'socket.io-client';
import fetch from 'isomorphic-unfetch';
import Greeting from 'components/Greeting';
import Vote from 'components/Vote';

const withVotes = compose(
  withState('votes', 'setVotes', ({ votes }) => votes),
  lifecycle({
    componentDidMount() {
      const socket = io();
      socket.on('votes', this.props.setVotes);
      this.setState({
        socket
      });
    },
    componentWillUnmount() {
      this.props.socket.close();
    }
  }),
  withHandlers({
    vote: ({ socket }) => (to) => socket.emit('vote', to)
  })
);

const HomePage = ({ votes, vote }) => (
  <div className="container">
    <div className="main">
      <div className="d-flex justify-content-center">
        <Greeting />
      </div>
      <div className="row">
        <div className="col-sm d-flex justify-content-center">
          <Vote count={votes.dogs} message="I like Dog" name="dogs" vote={vote} />
        </div>
        <div className="col-sm d-flex justify-content-center">
          <Vote count={votes.cats} message="I like Cat" name="cats" vote={vote} />
        </div>
      </div>
    </div>
    <style jsx>{`
      .main {
        margin-top: 5rem;
      }
    `}
    </style>
  </div>
);

const HomeWithVotes = withVotes(HomePage);

HomeWithVotes.getInitialProps = async () => {
  const response = await fetch('http://localhost:3000/votes');
  const votes = await response.json();
  return { votes };
};

export default HomeWithVotes;
