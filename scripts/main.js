/*  AUTHOR: hbates@northmen.org
 *  VERSION: 1.1
 *  CREATED: 11.25.2015
 *  PURPOSE: Register Northmen!
 */

"use strict";

import LoadDataClass from './LoadDataClass';
import FadeStuffClass from './FadeStuffClass';
import AddDivClass from './AddDivClass';

class main {
    constructor() {

    }

    static setDate() {
        let date = new Date();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let year = date.getFullYear();
        //let weekDay = date.getDay();
        return month + "/" + day + "/" + year;
    }

    loadZipData() {
        let zipData = new LoadDataClass();
        zipData.loadData("data/ZipCodeDatabase.csv",  function(finalData) {
            let zip = document.getElementById("studentZip").value;
            for (let i = 0; i < finalData.length; i++) {
                if (zip == finalData[i][0]) {
                    document.getElementById("studentCity").innerText = finalData[i][1];
                    document.getElementById("studentState").innerText = finalData[i][2];
                }
            }
        });
    }

    static fade(direction, fadeWhat) {
        let fader = new FadeStuffClass(direction, fadeWhat);
        fader.doFade();
    }

    static fadeHousing() {
        let livesWith = document.getElementById("livesWith");
        if (livesWith.options[livesWith.selectedIndex].value == 0 || livesWith.options[livesWith.selectedIndex].value == 1) {
            main.fade("out", "dadAddress");
            main.fade("out", "momAddress");
            main.fade("out", "guardianInfo");
            main.fade("out", "guardianAddress");
        } else if (livesWith.options[livesWith.selectedIndex].value == 2 || livesWith.options[livesWith.selectedIndex].value == 4) {
            main.fade("in", "dadAddress");
            main.fade("out", "momAddress");
            main.fade("out", "guardianInfo");
            main.fade("out", "guardianAddress");
        }  else if (livesWith.options[livesWith.selectedIndex].value == 3 || livesWith.options[livesWith.selectedIndex].value == 5) {
            main.fade("out", "dadAddress");
            main.fade("in", "momAddress");
            main.fade("out", "guardianInfo");
            main.fade("out", "guardianAddress");
        }  else if (livesWith.options[livesWith.selectedIndex].value == 6) {
            main.fade("out", "dadAddress");
            main.fade("out", "momAddress");
            main.fade("in", "guardianInfo");
            main.fade("in", "guardianAddress");
        }
    }

    static fadeHomeless() {
        let homeLess = document.getElementById("homeless");
        if (!(homeLess.checked)) {
            main.fade("out", "homelessResidence");
        } else if (homeLess.checked) {
            main.fade("in", "homelessResidence");
        }
    }
}

window.onload = function() {
    let mainObject = new main();
    document.getElementById("date").innerText = main.setDate();
    main.fade("in","date");
    main.fade("in","ppsLogo");
    main.fadeHousing();
    main.fadeHomeless();
    document.getElementById("studentZip").addEventListener("change", mainObject.loadZipData);
    document.getElementById("livesWith").addEventListener("change", main.fadeHousing);
    document.getElementById("homeless").addEventListener("click", main.fadeHomeless);
    document.getElementById("addSibling").addEventListener("click", new AddDivClass("sibling").addDiv());
};