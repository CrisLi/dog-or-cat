import { compose, withState, withHandlers } from 'recompose';
import Greeting from 'components/Greeting';
import Vote from 'components/Vote';

const withWholeVotes = compose(
  withState('dogs', 'voteDog', 0),
  withState('cats', 'voteCat', 0),
  withHandlers({
    vote: ({ voteDog, voteCat }) => (to) => {
      switch (to) {
        case 'dogs':
          voteDog((current) => current + 1);
          break;
        case 'cats':
          voteCat((current) => current + 1);
          break;
        default:
          break;
      }
    }
  })
);

const Index = ({ dogs, cats, vote }) => (
  <div className="container">
    <div className="main">
      <div className="d-flex justify-content-center">
        <Greeting />
      </div>
      <div className="row">
        <div className="col-sm d-flex justify-content-center">
          <Vote count={dogs} message="I like Dog" name="dogs" vote={vote} />
        </div>
        <div className="col-sm d-flex justify-content-center">
          <Vote count={cats} message="I like Cat" name="cats" vote={vote} />
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

export default withWholeVotes(Index);
