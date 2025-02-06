
import "./Editor.css"
import { Form, FormSelect, Row, Col, FormGroup, FormControl } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <p> Assignment Name</p>
        <Form.Control id="wd-name" value="A1 - ENV + HTML" /> <br/>

        <FormGroup className="mb-3" controlId="wd-textarea">
           
            <FormControl as="textarea" rows={6}>The assignment is available online Submit a link to the landing page of
          your Web application running on Netlify. The landing page should also include 
          the following: your full name and section Links to each of the lab
          assignments Link to the Kanbas application Links to all relevant source code
          repositories The Kanbas application should include a link to navigate back to the </FormControl>
        </FormGroup>

        <br/><br/>

        <div className="box">
        <Form.Group as={Row} className="mb-3" controlId="email1">
            <Form.Label column sm={2}>
            Points
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="number" value="100" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="password1">
            <Form.Label column sm={2}>
            Assignment Group
            </Form.Label>
            <Col sm={10}>
            <FormSelect id="wd-select-one-assignment">
                    <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="QUIZZES">DRAMA</option>
                    <option value="EXAMS">EXAMS</option>
                    <option value="DISCUSSIONS">DISCUSSIONS</option>
                </FormSelect>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="textarea2">
            <Form.Label column sm={2}>
            Display Grade as
            </Form.Label>
            <Col sm={10}>
            <FormSelect id="wd-select-one-assignment">
                    <option selected value="ASSIGNMENTS">Percentage</option>
                    <option value="QUIZZES">Pass/Fail</option>
            </FormSelect>
            </Col>
        </Form.Group>



        <Form.Group as={Row} className="mb-3" controlId="textarea2">
            <Form.Label column sm={2}>
            Submission Type
            </Form.Label>
            <Col sm={10}>
            <FormSelect id="wd-select-one-assignment">
                    <option selected value="ASSIGNMENTS">Online</option>

            </FormSelect>
              <br/>
            <Form.Label> Online Entry Options</Form.Label>
            <Form.Check label="Text Entry" />
            <Form.Check label="Website URL" />
            <Form.Check label="Media Recordings" />
            <Form.Check label="Student Annotation" />
            <Form.Check label="File Uploads" />
            
            </Col>
        </Form.Group>



        <Form.Group as={Row} className="mb-3" controlId="textarea2">
            <Form.Label column sm={2}>
            Assign
            </Form.Label>
            <Col sm={10}>
            <Form.Label>Assign to</Form.Label>
            <FormSelect id="wd-select-one-assignment">
                    <option selected value="ASSIGNMENTS">Everyone</option>
            </FormSelect>

              <br/>
              <Form.Label> Due</Form.Label>
            <Form.Control type="date" value="2025-05-05" />

            <p></p>
            <Form.Group as={Row}><div>
            <Form.Label> Available From</Form.Label>
            <Form.Control type="date" value="2025-05-05" />
            <p></p>
            <Form.Label> Until</Form.Label>
            <Form.Control type="date" value="2025-05-05" /></div>
            </Form.Group>
            </Col>
        </Form.Group>


        </div>
          
        <div className="wrapper">
        <button className="btn btn-red">save</button>
        <button className="btn btn-secondary">cancel</button>
        </div>


      </div>
      
  );}
  