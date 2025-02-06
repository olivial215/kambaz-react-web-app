import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/ModuleControlButtons";
import { MdAssignment, MdOutlineAssignment } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";
import { RiTodoFill } from "react-icons/ri";
import { Form, InputGroup, FormControl, FormSelect, Col, Row} from "react-bootstrap";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BiPlus, BiSearch } from "react-icons/bi";

export default function Assignments() {
    return (
      <div id="wd-assignments">

<div className="container">

        
        <InputGroup className="mb-3">
            <InputGroup.Text><BiSearch></BiSearch></InputGroup.Text>
            <FormControl placeholder= {"Search for Assignments"}/>
        <button className="btn btn-red"> <BiPlus/> Assignment</button>
        <button className="btn btn-secondary"> <BiPlus/>  Group</button>
        
        </InputGroup>  
        
</div>
        <br/><br/>
          
          <ListGroup className="rounded-0" id="wd-modules">
    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" /> Assignments 
          <LessonControlButtons />
        </div>
        
      <ListGroup className="wd-lessons rounded-0">
        <ListGroup.Item className="wd-lesson p-3 ps-1">
          
    
            <BsGripVertical className="me-2 fs-3" />
            <MdOutlineAssignment/>
            <a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              A1 
              </a> 

            <LessonControlButtons />
        </ListGroup.Item>

        <ListGroup.Item className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <MdOutlineAssignment/>
            <a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              A2
              </a>
            <LessonControlButtons />
        </ListGroup.Item>

        <ListGroup.Item className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <MdOutlineAssignment/>
            <a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              A3
              </a>
               <LessonControlButtons />
        </ListGroup.Item>
      
      </ListGroup>
    </ListGroup.Item>
  </ListGroup>



      </div>
  );}
  