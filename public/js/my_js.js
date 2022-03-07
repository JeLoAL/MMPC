$(document).ready(function(){
    //Contacts
    $('#contacts').on('input', function(){
        if(this.value[0] != 0 || this.value[1] != 9 || this.value.length >= 12){
            $('#err').html(`
                <div id="contact_err" class="col-lg-12 overlap alert alert-warning d-flex align-items-center" role="alert">
                    <p id="err">Please insert correct phone no.! &nbsp</p>
                    <span><i class="fas fa-exclamation-triangle"></i> </span>
                </div>
            `);
        }
        else{
            $('#contact_err').remove();
        }
        if(this.value == ""){
            $('#contact_err').remove();
        }
        console.log(this.value);
    });

    // Spouse
    $('#status').on('change', function(){
        if(this.value == "Married"){
            $('#spouse').html(`
            <div id="spouse_remove" class="row mt-2">
                <div class="col-lg-12 bg-gray">
                    <h4><strong>Spouse Information</strong></h4>
                </div>
                <div class="col-lg-3">
                    <div class="form-floating mb-3 mt-3">
                        <input type="text" class="form-control" id="floatingInput" name="spouse_name" placeholder="Spouse Name" required>
                        <label for="floatingInput">Spouse Name</label>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="form-floating mb-3 mt-3">
                        <input type="date" class="form-control" id="floatingInput" name="spouse_birthdate" placeholder="Spouse BirthDate" required>
                        <label for="floatingInput">Birth Date</label>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="form-floating mb-3 mt-3">
                        <input type="text" class="form-control" id="floatingInput" name="spouse_occu" placeholder="Spouse Occupation" required>
                        <label for="floatingInput">Spouse Occupation</label>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="form-floating mb-3 mt-3">
                        <input type="text" class="form-control" id="floatingInput" name="spouse_sal" placeholder="Spouse Salary" required>
                        <label for="floatingInput">Spouse Salary</label>
                    </div>
                </div>
            </div>`);
        }else{
            $('#spouse_remove').remove();
        }
        console.log(this.value);
    });

    // Brgy
    $('#municipality').on('change', function(){
        if(this.value == 4900){
            $('#brgy').html(`
                    <option value=""></option>
                    <option value="Agot">Agot</option>
                    <option value="Agumaymayan">Agumaymayan</option>
                    <option value="Amoingon">Amoingon</option>
                    <option value="Apitong">Apitong</option>
                    <option value="Balagasan">Balagasan</option>
                    <option value="Balaring">Balaring</option>
                    <option value="Balogo">Balogo</option>
                    <option value="Bamban">Bamban</option>
                    <option value="Bangbangalon">Bangbangalon</option>
                    <option value="Bantad">Bantad</option>
                    <option value="Bantay">Bantay</option>
                    <option value="Bayuti">Bayuti</option>
                    <option value="Binunga">Binunga</option>
                    <option value="Boi">Boi</option>
                    <option value="Boton">Boton</option>
                    <option value="Buliasnin">Buliasnin</option>
                    <option value="Bunganay">Bunganay</option>
                    <option value="Caganhao">Caganhao</option>
                    <option value="Canat">Canat</option>
                    <option value="Catubugan">Catubugan</option>
                    <option value="Cawit">Cawit</option>
                    <option value="Daig">Daig</option>
                    <option value="Daypay">Daypay</option>
                    <option value="Duyay">Duyay</option>
                    <option value="Hinapulan">Hinapulan</option>
                    <option value="Ihatub">Ihatub</option>
                    <option value="Isok 1">Isok 1</option>
                    <option value="Isok 2">Isok 2</option>
                    <option value="Laylay">Laylay</option>
                    <option value="Lupac">Lupac</option>
                    <option value="Mahinhin">Mahinhin</option>
                    <option value="Mainit">Mainit</option>
                    <option value="Malbog">Malbog</option>
                    <option value="Maligaya">Maligaya</option>
                    <option value="Malusak ">Malusak</option>
                    <option value="Mansiwat">Mansiwat</option>
                    <option value="Mataas na Bayan">Mataas na Bayan</option>
                    <option value="Maybo">Maybo</option>
                    <option value="Mercado">Mercado</option>
                    <option value="Murallon">Murallon</option>
                    <option value="Ogbac">Ogbac</option>
                    <option value="Pawa">Pawa</option>
                    <option value="Pili">Pili</option>
                    <option value="Poctoy">Poctoy</option>
                    <option value="Poras">Poras</option>
                    <option value="Putting Buhangin">Putting Buhangin</option>
                    <option value="Puyog">Puyog</option>
                    <option value="Sabong">Sabong</option>
                    <option value="San Miguel">San Miguel</option>
                    <option value="Santol">Santol</option>
                    <option value="Sawi">Sawi</option>
                    <option value="Tabi">Tabi</option>
                    <option value="Tabigue">Tabigue</option>
                    <option value="Tagwak">Tagwak</option>
                    <option value="Tambunan">Tambunan</option>
                    <option value="Tampus">Tampus</option>
                    <option value="Tanza">Tanza</option>
                    <option value="Tugos">Tugos</option>
                    <option value="Tumagabok">Tumagabok</option>
                    <option value="Tumapon">Tumapon</option>
            `);
        }
        else if(this.value == 4901){
            $('#brgy').html(`
                <option value=""></option>
                <option value="Anapog-Sibucao">Anapog-Sibucao</option>
                <option value="Argao">Argao</option>
                <option value="Balanacan">Balanacan</option>
                <option value="Banto">Banto</option>
                <option value="Bintakay">Bintakay</option>
                <option value="Bocboc">Bocboc</option>
                <option value="Butansapa">Butansapa</option>
                <option value="Candahon">Candahon</option>
                <option value="Capayang">Capayang</option>
                <option value="Danao">Danao</option>
                <option value="Dulong Bayan">Dulong Bayan</option>
                <option value="Gitnang Bayan">Gitnang Bayan</option>
                <option value="Guisian">Guisian</option>
                <option value="Hinadharan">Hinadharan</option>
                <option value="Hinanggayon">Hinanggayon</option>
                <option value="Ino">Ino</option>
                <option value="Janagdong">Janagdong</option>
                <option value="Lamesa">Lamesa</option>
                <option value="Laon">Laon</option>
                <option value="Magapua">Magapua</option>
                <option value="Malayak">Malayak</option>
                <option value="Malusak">Malusak</option>
                <option value="Mampaitan">Mampaitan</option>
                <option value="Mangyan-Mababad">Mangyan-Mababad</option>
                <option value="Market Site">Market Site</option>
                <option value="Mataas Na Bayan">Mataas Na Bayan</option>
                <option value="Mendez">Mendez</option>
                <option value="Nangka I">Nangka I</option>
                <option value="Nangka II">Nangka II</option>
                <option value="Paye">Paye</option>
                <option value="Pili">Pili</option>
                <option value="Puting Buhangin">Puting Buhangin</option>
                <option value="Sayao">Sayao</option>
                <option value="Silangan">Silangan</option>
                <option value="Sumangga">Sumangga</option>
                <option value="Tarug">Tarug</option>
                <option value="Villa Mendez">Villa Mendez</option>
            `);
        }
        else if(this.value == 4902){
            $('#brgy').html(`
                <option value=""></option>
                <option value="Alobo">Alobo</option>
                <option value="Angas">Angas</option>
                <option value="Aturan">Aturan</option>
                <option value="Bagong Silang Pob">Bagong Silang Pob</option>
                <option value="Baguidbirin">Baguidbirin</option>
                <option value="Baliis">Baliis</option>
                <option value="Balogo">Balogo</option>
                <option value="Banahaw Pob.">Banahaw Pob.</option>
                <option value="Bangcuangan">Bangcuangan</option>
                <option value="Banogbog">Banogbog</option>
                <option value="Biga">Biga</option>
                <option value="Botilao">Botilao</option>
                <option value="Buyabod">Buyabod</option>
                <option value="Dating Bayan">Dating Bayan</option>
                <option value="Devilla">Devilla</option>
                <option value="Dolores">Dolores</option>
                <option value="Haguimit">Haguimit</option>
                <option value="Hupi">Hupi</option>
                <option value="Ipil">Ipil</option>
                <option value="Jolo">Jolo</option>
                <option value="Kaganhao">Kaganhao</option>
                <option value="Kalangkang">Kalangkang</option>
                <option value="Kamandugan">Kamandugan</option>
                <option value="Kasily">Kasily</option>
                <option value="Kilo-kilo">Kilo-kilo</option>
                <option value="Kinyaman">Kinyaman</option>
                <option value="Labo">Labo</option>
                <option value="Lamesa">Lamesa</option>
                <option value="Landy(Perez)">Landy(Perez)</option>
                <option value="Lapu-lapu Pob. (5th Zone)">Lapu-lapu Pob. (5th Zone)</option>
                <option value="Libjo">Libjo</option>
                <option value="Lipa">Lipa</option>
                <option value="Lusok">Lusok</option>
                <option value="Maharlika Pob. (1st Zone)">Maharlika Pob. (1st Zone)</option>
                <option value="Makulapnit">Makulapnit</option>
                <option value="Maniwaya">Maniwaya</option>
                <option value="Manlibunan">Manlibunan</option>
                <option value="Masaguisi">Masaguisi</option>
                <option value="Masalukot">Masalukot</option>
                <option value="Matalaba">Matalaba</option>
                <option value="Mongpong">Mongpong</option>
                <option value="Morales">Morales</option>
                <option value="Napo (Malabon)">Napo (Malabon)</option>
                <option value="Pag-Asa Pob. (4th Zone)">Pag-Asa Pob. (4th Zone)</option>
                <option value="Pantayin">Pantayin</option>
                <option value="Polo">Polo</option>
                <option value="Pulong-Parang">Pulong-Parang</option>
                <option value="Punong">Punong</option>
                <option value="San Antonio">San Antonio</option>
                <option value="San Isidro">San Isidro</option>
                <option value="Tagum">Tagum</option>
                <option value="Tamayo">Tamayo</option>
                <option value="Tambangan">Tambangan</option>
                <option value="Tawiran">Tawiran</option>
                <option value="Taytay">Taytay</option>
            `);
        }
        else if(this.value == 4903){
            $('#brgy').html(`
                <option value=""></option>
                <option value="Bangwayin">Bangwayin</option>
                <option value="Bayakbakin">Bayakbakin</option>
                <option value="Bolo">Bolo</option>
                <option value="Bonliw">Bonliw</option>
                <option value="Buangan">Buangan</option>
                <option value="Cabuyo">Cabuyo</option>
                <option value="Cagpo">Cagpo</option>
                <option value="Dampulan">Dampulan</option>
                <option value="Kay Duke">Kay Duke</option>
                <option value="Mabuhay">Mabuhay</option>
                <option value="Makawayan">Makawayan</option>
                <option value="Malibago">Malibago</option>
                <option value="Malinao">Malinao</option>
                <option value="Maranlig">Maranlig</option>
                <option value="Marlangga">Marlangga</option>
                <option value="Matuyatuya">Matuyatuya</option>
                <option value="Nangka">Nangka</option>
                <option value="Pakaskasan">Pakaskasan</option>
                <option value="Payanas">Payanas</option>
                <option value="Poblacion">Poblacion</option>
                <option value="Poctoy">Poctoy</option>
                <option value="Sibuyao">Sibuyao</option>
                <option value="Suha">Suha</option>
                <option value="Talawan">Talawan</option>
                <option value="Tigwi">Tigwi</option>
            `);
        }
        else if(this.value == 4904){
            $('#brgy').html(`
                <option value=""></option>
                <option value="Bagacay">Bagacay</option>
                <option value="Bagtingon">Bagtingon</option>
                <option value="Bicas-bicas">Bicas-bicas</option>
                <option value="Caigangan">Caigangan</option>
                <option value="Daykitin">Daykitin</option>
                <option value="Libas">Libas</option>
                <option value="Malbog">Malbog</option>
                <option value="Sihi">Sihi</option>
                <option value="Timbo (Sanggulong)">Timbo (Sanggulong)</option>
                <option value="Tungib-Lipata">Tungib-Lipata</option>
                <option value="Yook">Yook</option>
                <option value="Barangay I (Pob.)">Barangay I (Pob.)</option>
                <option value="Barangay II (Pob.)">Barangay II (Pob.)</option>
                <option value="Barangay III (Pob.)">Barangay III (Pob.)</option>
                <option value="Barangay IV (Pob.)">Barangay IV (Pob.)</option>
            `);
        }
        else if(this.value == 4905){
            $('#brgy').html(`
                <option value=""></option>
                <option value="Antipolo">Antipolo</option>
                <option value="Bachao Ibaba">Bachao Ibaba</option>
                <option value="Bachao Ilaya">Bachao Ilaya</option>
                <option value="Bacong-Bacong">Bacong-Bacong</option>
                <option value="Bahi">Bahi</option>
                <option value="Bangbang">Bangbang</option>
                <option value="Banot">Banot</option>
                <option value="Banuyo">Banuyo</option>
                <option value="Bognuyan">Bognuyan</option>
                <option value="Cabugao">Cabugao</option>
                <option value="Dawis">Dawis</option>
                <option value="Dili">Dili</option>
                <option value="Libtangin">Libtangin</option>
                <option value="Mahunig">Mahunig</option>
                <option value="Mangiliol">Mangiliol</option>
                <option value="Masiga">Masiga</option>
                <option value="Matandang Gasan">Matandang Gasan</option>
                <option value="Pangi">Pangi</option>
                <option value="Pinggan">Pinggan</option>
                <option value="Tabionan">Tabionan</option>
                <option value="Tapuyan">Tapuyan</option>
                <option value="Tiguion">Tiguion</option>
                <option value="Barangay I (Pob.)">Barangay I (Pob.)</option>
                <option value="Barangay II (Pob.)">Barangay II (Pob.)</option>
                <option value="Barangay III (Pob.)">Barangay III (Pob.)</option>
            `);
        }
        else{
            $('#brgy').html(`<option>No Data</option>`)
        }
        console.log(this.value)
    });

    // Beneficiaries
    var maxGroup = 5;
    $(".addMore").click(function(){
        if($('body').find('.fieldGroup').length < maxGroup){
            var fieldHTML = '<div class="form-group fieldGroup">'+$(".fieldGroupCopy").html()+'</div>';
            $('body').find('.fieldGroup:last').after(fieldHTML);
            console.log('Beneficiaries Array: '+$('body').find('.fieldGroupCopy').length);
        }else{
            alert('Maximum '+maxGroup+' beneficiaries are allowed.');
        }
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".fieldGroup").remove();
    });
    
    function formatNum(num){
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }


    // calculator
    $('#calculate').on('click', function(){


        const cbu = $('#cbu').val();
        const amor = $('#amortization').val();
        const la =$('#amount').val();
        const loanamount = parseInt(la);
        const lt = $('#loanterm').val();
        const loanterm = parseInt(lt);
        $('.loanamount').html(loanamount);



        const deduction = {
            interest: 0.02,
            collectionFee: 0.01,
            serviceFee: 0.01,
            loanretention: cbu,
            dues: 20,
            insurance: [0, 0.002083, 0.002083, 0.003125, 0.004167, 0.005208, 0.006250, 0.007292, 0.008333, 0.009375, 0.010417, 0.011458, 0.012500],
            notorialFee: 200
        }

        var t_interest = loanamount * (deduction.interest*loanterm);
        var t_collectionFee = loanamount * deduction.collectionFee;
        var t_serviceFee = loanamount * deduction.serviceFee;
        var t_loanretention = loanamount * deduction.loanretention;
        var t_dues = loanterm * deduction.dues;
        var t_insurance = loanamount * deduction.insurance[loanterm];
        var t_notorialFee = deduction.notorialFee;
        var t_deduction = t_interest + t_collectionFee + t_serviceFee + t_loanretention + t_dues + t_insurance + t_notorialFee;
        var net = loanamount - t_deduction;

        // Passing Deduction to modal
        $('.interest').html(formatNum(t_interest.toFixed(2)));
        $('.collectionFee').html(formatNum(t_collectionFee.toFixed(2)));
        $('.serviceFee').html(formatNum(t_serviceFee.toFixed(2)));
        $('.loanretention').html(formatNum(t_loanretention.toFixed(2)));
        $('.dues').html(formatNum(t_dues.toFixed(2)));
        $('.insurance').html(formatNum(t_insurance.toFixed(2)));
        $('.notorial').html(formatNum(t_notorialFee.toFixed(2)));
        $('.t_deduction').html(formatNum(t_deduction.toFixed(2)));
        $('.net').html(formatNum(net.toFixed(2)));

        // Show the deduction modal button
        $('#deduction').html(`
        <div class="d-grid gap-2">
            <button class="btn btn-success" type="button"  data-toggle="modal" data-target="#deductionModal">Show All Deduction</button>
        </div>
        `);

        // amortization Schedule
        let amorArr = [1, 2, 7];
        let start = new Date();
        
        // Set due date
        let setEndPayment = new Date(start);
        let endPayment = setEndPayment.setMonth(setEndPayment.getMonth() + loanterm);
        let due = new Date(endPayment);

        let amountPay = 0;
        let cnt = 1;

        
        $('.amortization').html(`
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Php `+formatNum(loanamount.toFixed(2))+`</td>
        </tr>`
        );

        // Remove existing amortization
        if($('.schedAmor').length!=0){
            $('.schedAmor').remove();
        }

        // Amortizaton for monthly
        if(amor==3){
            // Set Start Payment
            let setstrtPayment = new Date(start);
            let strtPayment = setstrtPayment.setMonth(setstrtPayment.getMonth() + 1);
            let sched = new Date(strtPayment);
            let amountToPay = Math.ceil(loanamount/loanterm);
            let balance = loanamount - amountToPay;
            do {
                // Show amortization
                let last_payment = loanamount-amountPay;
                cnt==loanterm ?
                $('.amortization').append(`
                <tr class="schedAmor">
                    <td>`+cnt+`</td>
                    <td>`+sched.toDateString()+`</td>
                    <td>Php `+formatNum(last_payment.toFixed(2))+`</td>
                    <td>Php `+formatNum(balance.toFixed(2))+`</td>
                </tr>`) :
                $('.amortization').append(`
                <tr class="schedAmor">
                    <td>`+cnt+`</td>
                    <td>`+sched.toDateString()+`</td>
                    <td>Php `+formatNum(amountToPay.toFixed(2))+`</td>
                    <td>Php `+formatNum(balance.toFixed(2))+`</td>
                </tr>`);
                //Set new Date
                let newDate = sched.setMonth(sched.getMonth() + 1);
                sched = new Date(newDate);
                cnt += 1;
                amountPay += amountToPay;
                cnt==loanterm ? balance -= balance : balance -= amountToPay;                
            }while (sched <= due)
        }
        // Amortization for Daily, Every other day, Weekly, 
        else{

            // Use to count the number of payment
            let setCnt = new Date(start);
            let strtCnt = setCnt.setDate(setCnt.getDate() + amorArr[amor]);
            let PaymentCnt = new Date(strtCnt);
            let numberOfPayment = 0;
            while (PaymentCnt <= due) {
                let newDate1 = PaymentCnt.setDate(PaymentCnt.getDate() + amorArr[amor]);
                PaymentCnt = new Date(newDate1);
                numberOfPayment += 1;
            }
            console.log('Number of Payment: '+numberOfPayment)
            // Set Start Payment
            let setstrtPayment = new Date(start);
            let strtPayment = setstrtPayment.setDate(setstrtPayment.getDate() + amorArr[amor]);
            let sched = new Date(strtPayment);
            let amountToPay = Math.ceil(loanamount/numberOfPayment);
            let balance = loanamount - amountToPay;
            while (sched <= due) {
                // Show amortization
                let last_payment = loanamount-amountPay;
                cnt==numberOfPayment ?
                $('.amortization').append(`
                <tr class="schedAmor">
                    <td>`+cnt+`</td><td>`+sched.toDateString()+`</td>
                    <td>Php `+formatNum(last_payment.toFixed(2))+`</td>
                    <td>Php `+formatNum(balance.toFixed(2))+`</td>
                </tr>`) :
                $('.amortization').append(`
                <tr class="schedAmor">
                    <td>`+cnt+`</td>
                    <td>`+sched.toDateString()+`</td>
                    <td>Php `+formatNum(amountToPay.toFixed(2))+`</td>
                    <td>Php `+formatNum(balance.toFixed(2))+`</td>
                </tr>`);
                //Set new Date
                let newDate = sched.setDate(sched.getDate() + amorArr[amor]);
                sched = new Date(newDate);
                cnt += 1;
                amountPay += amountToPay;
                cnt==numberOfPayment ? balance -= balance : balance -= amountToPay;               
            }
        }
    });
});


function compute_age() {

    var dobString = document.getElementById("birth_date").value;
    var calculatedValue = calculate_age(dobString);
    console.log(dobString);
}

function calculate_age(dobString) {
    var diff_ms = Date.now() - Date.parse(dobString);

    var yearValue = Math.floor(diff_ms / 31536000000);
    console.log("Years ", yearValue);
    var monthValue = Math.floor((diff_ms % 31536000000) / 2592000000);
    console.log("Months ", monthValue);
    var dayValue = Math.floor(((diff_ms % 31536000000) % 2592000000) / 86400000);
    console.log("Days ", dayValue);

    $('#mem_age').val(yearValue);

    // Check if age is 18 above
    $(document).ready(function(){
        var age_err = $('#age_err');
        if(yearValue<18 || yearValue>60){
            $('#err').html(`
                <div id="age_err" class="col-lg-12 overlap alert alert-warning d-flex align-items-center" role="alert">
                    <p id="err">Age must atleast 18y/o and 60y/o below! &nbsp</p>
                    <span><i class="fas fa-exclamation-triangle"></i> </span>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`);
            $('#err').css('color', 'red')
        }
        else{
            age_err.remove();
        }
    
        if(yearValue===""){
            age_err.remove();
        }
    });

    
}


$(document).ready(function(){
    
});

function resolveAfter2Seconds() {
    return new Promise(resolve => {
    setTimeout(() => {
        resolve('resolved2');
    }, 2000);
    });
}
function resolveAfter4Seconds() {
    return new Promise(resolve => {
    setTimeout(() => {
        resolve('resolved4');
    }, 4000);
    });
}
function resolveAfter8Seconds() {
    return new Promise(resolve => {
    setTimeout(() => {
        resolve('resolved8');
    }, 8000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter4Seconds();;
    console.log(result);
    // expected output: "resolved"
}

async function asyncCallw() {
    console.log('calling2');
    const result = await resolveAfter8Seconds();
    console.log(result);;
    // expected output: "resolved"
}

asyncCall();
asyncCallw();