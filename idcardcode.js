let pic='';
        let name_person='';
        let regno_person='';
        let father_person='';
        let adhaar_person='';
        let village_person='';
        let phone_person='';
        
        let reg_num='';
        
         document.querySelector('.js-idcard-box').innerHTML=``;
         let idinputbox=document.querySelector('.js-input-box');
        let idsearchbtn=document.querySelector('.js-search-btn');
        idinputbox.addEventListener('keydown',(event)=>{
            if(event.key==='Enter'){
                search();
            }
        });
        idsearchbtn.addEventListener('click',search);
        function search(){
            let value=0;
            
            reg_num=idinputbox.value;
            console.log(idinputbox);
            console.log(reg_num);
            obj.forEach( (details) => {
                
                if(details.regno===reg_num){
                    value=1;
                    pic=details.photo;
                    name_person=details.name;
                    regno_person=details.regno;
                    father_person=details.father;
                    adhaar_person=details.adhaar;
                    village_person=details.village;
                    phone_person=details.phone;
                    generateidcard();
                }
                
            });
            if(value===0)
            {
                document.querySelector('.js-idcard-box').innerHTML='Nek Id Card ledhu dengaii!!';
            }
        }
        function generateidcard(){
            document.querySelector('.js-idcard-box').innerHTML=`
            <div class="idcardbox">
        <div class="head">
            <div class="logobox">
                <img class="logo" src="sasilogopic.jpg" alt="no logo found">
            </div>
            <div class="textbox"><p>Values we live....</p></div>
        </div>
        <div class="body">
            <div class="idimagebox">
                <img class="idimage" src=${pic} alt="no id image found">
            </div>
            <div class="iddetailsbox">
                <p>${name_person}</p>
                <p>${regno_person}</p>
                <p>B.Tech C.S.E</p>
            </div>
            <div class="barcodebox">
                <img class="barcodeimage" src="barcodeimage.jpg" alt="no barcode found">
            </div>
        </div>
        <div class="tail">
        <div class="iddatabox">
            <div class="leftdatabox">
                <p>Father Name: ${father_person}</p>
                <p>Adhaar no: ${adhaar_person}</p>
                <p>cell no: ${phone_person}</p>
                <p>Validity: 2023 - 27</p>
            </div>
            <div class="rightdatabox">
                <p>Blood Group: B +ve</p>
                <p>Village: ${village_person}</p>
            </div>
        </div>
        <div class="signaturebox">
            <img class="signature" src="signature.jpg" alt="no signature image found">
            
        </div>
        <div class="signbox"><p class="sign">signature</p></div>
        </div>
    </div>
            `;
        } 
