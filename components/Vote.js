export default ({ count, vote, message, name }) => (
  <div className="card border-primary" style={{ width: '20rem' }}>
    <div className="card-header">Vote: {count}</div>
    <div className="card-body text-primary">
      <h4 className="card-title">{message}</h4>
      <button className="btn btn-primary btn-block" onClick={() => vote(name)}>Vote</button>
    </div>
  </div>
);
