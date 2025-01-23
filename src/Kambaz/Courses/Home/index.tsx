import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <table id="wd-home">
      <tr>
        <td>
           <button>Collapse All</button> 
           <button>View Progress</button>
           <select id="wd-select-one-publish-option">
              <option value="ALL">Publish All</option>
           </select>
           <button>+ Module</button>
        </td>
      </tr>
      <tr>
        <td valign="top">
          <Modules />
        </td>
        <td valign="top">
          <CourseStatus />
        </td>
      </tr>
    </table>
);}
