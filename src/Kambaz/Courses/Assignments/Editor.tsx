export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <h3> Assignment Name</h3>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={50} rows={10}>
          The assignment is available online Submit a link to the landing page of
          your Web application running on Netlify. The landing page should also include 
          the following: your full name and section Links to each of the lab
          assignments Link to the Kanbas application Links to all relevant source code
          repositories The Kanbas application should include a link to navigate back to the 
          landing page
        </textarea>

        <br/><br/>
        
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>

          <br/>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-passignment">Assignment Group</label>
            </td>
            <td valign="top">
                <select id="wd-select-one-assignment">
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="QUIZZES">DRAMA</option>
                    <option selected value="EXAMS">EXAMS</option>
                    <option value="DISCUSSIONS">DISCUSSIONS</option>
                </select>
            </td>
          </tr>

          <br/>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission">Submission Type</label>
            </td>
            <td>
                <select id="wd-select-one-submission">
                    <option value="ONLINE">ONLINE</option>
                </select>
            </td>
          </tr>

          <br/>

          <tr>
            <td align="right" valign="top"></td>
            <td>
                <label>Online Entry Options</label><br/>

                <input type="checkbox" name="check-online-entry" id="wd-chkbox-text"/>
                <label htmlFor="wd-chkbox-text">Text Entry</label><br/>

                <input type="checkbox" name="check-online-entry" id="wd-chkbox-website"/>
                <label htmlFor="wd-chkbox-website">Website URL</label><br/>

                <input type="checkbox" name="check-online-entry" id="wd-chkbox-media"/>
                <label htmlFor="wd-chkbox-media">Media Recordings</label><br/>

                <input type="checkbox" name="check-online-entry" id="wd-chkbox-annotation"/>
                <label htmlFor="wd-chkbox-annotation">Student Annotation</label><br/>

                <input type="checkbox" name="check-online-entry" id="wd-chkbox-file"/>
                <label htmlFor="wd-chkbox-file">File Uploads</label><br/>
            </td>
          </tr>

          <br/>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign">Assign</label>
            </td>
            <td>
            <label htmlFor="wd-assign">Assign to</label> <br></br>
              <input id="wd-assign" value={"Everyone"} />
            </td>
          </tr>

          <br/>
          
          <tr>
            <td align="right" valign="top">
            </td>
            <td>
            <label htmlFor="wd-due">Due</label> <br></br>
              <input type="date" value="2025-01-21" id="wd-text-fields-due"/><br/>
            </td>
          </tr>

          <br/>

          <tr>
            <td align="right" valign="top">
            </td>
            <td valign="top">
            <label htmlFor="wd-from">Available from</label> <br></br>
              <input type="date" value="2025-01-21" id="wd-btn-from"/><br/>
            </td>
            <td>
            <label htmlFor="wd-until">Until</label> <br></br>
              <input type="date" value="2025-01-21" id="wd-btn-to"/><br/>
            </td>
          </tr>

          <br/>
        </table>

      <table align="right">
        <tr>
          <td align="right" valign="bottom">
            <button>cancel</button> <button>save</button>
          </td>
        </tr>
      </table>

      </div>
      
  );}
  