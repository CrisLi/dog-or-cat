export default ({ count, onClick, message }) => (
  <div className="card border-primary" style={{ width: '20rem' }}>
    <div className="card-header">Vote: {count}</div>
    <div className="card-body text-primary">
      <h4 className="card-title">{message}</h4>
      <button className="btn btn-primary btn-block" onClick={onClick}>Vote</button>
    </div>
  </div>
);
