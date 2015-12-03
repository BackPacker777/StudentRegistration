/*  AUTHOR: hbates@northmen.org
 *  VERSION: 1.0
 *  CREATED: 12.01.2015
 */

"use strict";

export default class AddDivClass {
    constructor(whichDiv) {
        this.whichDiv = whichDiv;
    }

    addDiv(counter) {
        if (this.whichDiv == "sibling") {
            let newSibRow = document.createElement("div");
            newSibRow.className = "row";
            newSibRow.innerHTML = '<div class="small-2 columns">'
                                + '<span class="label">Last Name</span><br>'
                                + '<input name="sibLastName1" id="sibLastName1" placeholder="Last Name" type="text">'
                                + '</div>'
                                + '<div class="small-2 columns">'
                                + '<span class="label">First Name</span><br>'
                                + '<input name="sibFirstName1" id="sibFirstName1" placeholder="First Name" type="text">'
                                + '</div>'
                                + '<div class="small-2 columns">'
                                + '<span class="label">DoB</span><br>'
                                + '<input name="sibDob1" id="sibDob1" type="date">'
                                + '</div>'
                                + '<div class="small-1 columns">'
                                + '<span class="label">Grade</span><br>'
                                + '<input name="sibGrade1" id="sibGrade1" placeholder="Grade" type="number">'
                                + '</div>'
                                + '<div class="small-2 columns end">'
                                + '<span class="label">School</span><br>'
                                + '<select name="sibSchool1" id="sibSchool1" required>'
                                + '<option>Choose</option>'
                                + '<option value="1">Central</option>'
                                + '<option value="2">Lincoln</option>'
                                + '<option value="3">Ottawa</option>'
                                + '<option value="4">Sheridan</option>'
                                + '<option value="5">Middle School</option>'
                                + '<option value="6">High School</option>'
                                + '<option value="7">Montessori</option>'
                                + '</select>'
                                + '</div>';
            document.getElementById("siblings").appendChild(newSibRow);
        }
    }
}