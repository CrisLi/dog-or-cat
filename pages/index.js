import Greeting from 'components/Greeting';
import Vote from 'components/Vote';

export default () => (
  <div className="container">
    <div className="main">
      <div className="d-flex justify-content-center">
        <Greeting />
      </div>
      <div className="row">
        <div className="col-sm d-flex justify-content-center">
          <Vote count={10} message="I like Dog" />
        </div>
        <div className="col-sm d-flex justify-content-center">
          <Vote count={10} message="I like Cat" />
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
