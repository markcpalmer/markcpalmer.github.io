
function showHideItem(item) {
    var my_display = document.getElementById(item);
    if(my_display.style.display == "block") {
        my_display.style.display = "none";
    }
    else {
        my_display.style.display = "block";
    }
}



document.getElementById('aboutMarkParagraph').style.display = "none";
document.getElementById('aboutMark').addEventListener('click',function(){ 
    showHideItem('aboutMarkParagraph')
})


document.getElementById('contactInfoParagraph').style.display="none";
document.getElementById('contactInfo').addEventListener('click',function(){
    showHideItem('contactInfoParagraph');
})

document.getElementById("skillsParagraph").style.display="none";
document.getElementById("skills").addEventListener("click",function(){
    showHideItem('skillsParagraph');
})

//document.getElementById("marksProjectsParagraph").style.display="none";
document.getElementById("marksProjects").addEventListener("click",function(){
    showHideItem('marksProjectsParagraph');
})

document.getElementById("linksParagraph").style.display="none";
document.getElementById("links").addEventListener("click",function(){
    showHideItem('linksParagraph');
})



document.getElementById('projectVirtualpet').style.display = "none";
document.getElementById('projectCodebusiness').style.display = "none";


document.getElementById('tabVirtualpet').addEventListener("click", function() {
    document.getElementById('tabHospital').classList.remove("projectActiveTab");
    document.getElementById('tabVirtualpet').classList.add("projectActiveTab");
    document.getElementById('tabCodebusiness').classList.remove("projectActiveTab");
    document.getElementById('projectHospital').style.display = "none";
    document.getElementById('projectVirtualpet').style.display = "block";
    document.getElementById('projectCodebusiness').style.display = "none";
});


document.getElementById('tabHospital').addEventListener("click", function() {
    document.getElementById('tabVirtualpet').classList.remove("projectActiveTab");
    document.getElementById('tabHospital').classList.add("projectActiveTab");
    document.getElementById('tabCodebusiness').classList.remove("projectActiveTab");
    document.getElementById('projectVirtualpet').style.display = "none";
    document.getElementById('projectHospital').style.display = "block";
    document.getElementById('projectCodebusiness').style.display = "none";
});

document.getElementById('tabCodebusiness').addEventListener("click", function() {
    document.getElementById('tabVirtualpet').classList.remove("projectActiveTab");
    document.getElementById('tabcodebusiness').classList.add("projectActiveTab");
    document.getElementById('tabHospital').classList.remove("projectActiveTab");
    document.getElementById('projectVirtualpet').style.display = "none";
    document.getElementById('projectCodebusiness').style.display = "block";
    
    document.getElementById('projectHospital').style.display = "none";
});

