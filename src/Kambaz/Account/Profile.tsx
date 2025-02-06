import { Link } from "react-router-dom";
import { Form, FormSelect } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form.Control defaultValue="alice" placeholder="username" className="wd-username"/>

      <Form.Control defaultValue="123"   placeholder="password" type="password"
             className="wd-password" />
      <Form.Control defaultValue="Alice" placeholder="First Name" id="wd-firstname" />
      <Form.Control defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" />
      <Form.Control defaultValue="2000-01-01" type="date" id="wd-dob" />
      <Form.Control defaultValue="alice@wonderland" type="email" id="wd-email" />

        <FormSelect defaultValue = "Faculty" id="wd-role">
            
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
        </FormSelect>
 


        <Link id="wd-signout-btn"
            to="/Kambaz/Account/Signin"
            className="btn btn-red w-100 mb-2">
            Sign out </Link>
    </div>
);}
