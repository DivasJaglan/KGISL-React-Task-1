function UserProfile(props) {
  return (
    <div className="w-50 mx-auto p-4 bg-body-tertiary rounded-2">
      <table className=" table m-auto table-bordered table-light table-hover table-striped-columns fs-5">
        <tbody>
          <tr>
            <th scope="row">Name</th>
            <td>{props.name}</td>
          </tr>
          <tr>
            <th scope="row">Age</th>
            <td>{props.age}</td>
          </tr>
          {props.location && (
            <tr>
              <th scope="row">Location</th>
              <td>{props.location}</td>
            </tr>
          )}
          <tr>
            <th scope="row">isActive</th>
            <td>{props.isActive ? "Active User" : "Inactive User"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserProfile;
