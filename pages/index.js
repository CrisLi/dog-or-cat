import Greeting from 'components/Greeting';

export default () => (
  <div className="container">
    <div className="main d-flex justify-content-center align-items-center">
      <Greeting />
    </div>
    <style jsx>{`
      .main {
        height: 100vh;
      }
    `}
    </style>
  </div>
);
