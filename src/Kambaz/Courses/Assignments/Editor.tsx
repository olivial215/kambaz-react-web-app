export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <h3> Assignment Name</h3>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={30} rows={10}>
          The assignment is available online Submit a link to the landing page of
          your Web application running on Netlify. The landing page should also include 
          the following: your full name and section Links to each of the lab
          assignments Link to the Kanbas application Links to all relevant source code
          repositories The Kanbas application should include a link to navigate back to the 
          landing page
        </textarea>

        <br />
        
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td valign="top">
              <input id="wd-points" value={100} />
            </td>
            </tr>

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

            <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission">Submission Type</label>
            </td>
            <td valign="top">
                <select id="wd-select-one-submission">
                    <option value="ONLINE">ONLINE</option>
                </select>

                
            </td>
            </tr>

            <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission"></label>
            </td>
            <td align="left" valign="top">
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

            <tr>
                <td align="right" valign="top">
                <label htmlFor="wd-assign">Assign</label> Assign to
                </td>
                <td>
                <input id="wd-points" value={"Everyone"} />
                </td>
            </tr>

        </table>
      </div>
  );}
  