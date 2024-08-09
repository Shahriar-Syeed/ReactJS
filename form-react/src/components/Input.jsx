export default function Input({ label, id, error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      {/* <input id="email" type="email" name="email" ref={mail} /> */}
      <div className="control-error">
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
