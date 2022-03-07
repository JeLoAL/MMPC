const mysql = require('mysql');
const uuid = require('uuid'); 
const path = require('path');
const multer = require('multer');

// Connection Pool
const pool = mysql.createPool({
    connectionLimit : 100,
    host            :process.env.DB_HOST,
    user            :process.env.DB_USER,
    password        :process.env.DB_PASSWORD,
    database        :process.env.DB_NAME
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './profile');
    },
    filename: (req, file, cb) => {
        rndmStrng = Math.random().toString(36).slice(2);
        console.log(file);
        cb(null,   Date.now()+'-'+rndmStrng+'-'+ file.originalname);
    }
})
const upload = multer({storage: storage});

// Homeage and Pre-gistration

exports.homepage = (req, res) => {
    const data = {
        title: "Mogpog Multi-purpose Cooperative"
    } 
    res.render('a-homepage', data);
}

exports.login = (req, res) => {
        const data = {
        title: "Login",
        username: req.body.username
    }
    res.render('a-login', data);
}
exports.registration = (req, res) => {
    const data = {
        id: uuid.v4(),
        title: "Pre-Registration",
        rndmID: Math.random().toString(36).slice(2)
    } 
    res.render('a-pre-registration', data);
}
exports.applicationUploadImage = upload.single('image'), (req, res) => {
    res.render('a-application-dl', data);
}

exports.applicationFormDL = (req, res) => {
    const data = {
        id: uuid.v4(),
        title: "Application Download",
        fullname: req.body.fn +' '+ req.body.ln,
        email: req.body.email,
        contact: req.body.contact,
        status: req.body.status,
        image: req.file.filename
    } 

    //
    pool.query('SELECT * FROM member_info WHERE email='+pool.escape(String(data.email)), (err, row) => {
        if(err) {
            // logger.error('Error in DB');
            // logger.debug(err);
            console.log(err);
            return;
        } else {
            if (row && row.length ) {
                emailExist = "Email already in use";
                console.log(emailExist);
                // do something with your row variable
            } else {
                emailExist = "";
                console.log("Email available");
            }
        }
    });

    
    console.log(data.image)
    res.render('a-application-dl', data);

}

exports.add_registration = (req, res) => {
    const{ fn, mn, ln, email, contact, gender, status, birth, birth_place, brgy, zipcode, sss, gsis, tin, course, school, year_grad, occupation, occu_address, emmployee_name, date_employed, salary, business_name, business_address} = req.body;
    const member_status = 0;
    const image = storage.filename;
    const mem_id = Math.random().toString(36).slice(2);

    // pool.query('INSERT INTO member_info SET mem_id = ?, fn = ?, mn = ?,  ln = ?, email = ?, contact = ?, gender = ?, status = ?, birth = ?, birth_place = ?, brgy = ?, zipcode = ?, member_status = ?, image = ?', [mem_id, fn, mn, ln, email, contact, gender, status, birth, birth_place, brgy, zipcode, member_status, image ], (err, results, fields) =>{
    //         if(!err){
    //             pool.query('INSERT INTO member_ids SET sss = ?, gsis = ?, tin = ?, mem_id = ?',[sss, gsis, tin, mem_id],(err, results, fields) =>{
    //                 if(!err){console.log(results);}else{console.log(err);}}
    //             );
    //             if(status == "Married"){
    //                 const {spouse_name, spouse_birth, spouse_occu, spouse_sal } = req.body
    //                 pool.query('INSERT INTO member_spouse SET spouse_name = ?, spouse_birth = ?, spouse_occupation = ?, spouse_salary = ?, mem_id = ?',[spouse_name, spouse_birth, spouse_occu, spouse_sal, mem_id],(err, results, fields) =>{
    //                     if(!err){console.log(results);}else{console.log(err);}}
    //                 );
    //             }
    //             pool.query('INSERT INTO member_education SET course = ?, school = ?, year_grad = ?, mem_id = ?',[course, school, year_grad, mem_id],(err, results, fields) =>{
    //                 if(!err){console.log(results);}else{console.log(err);}}
    //             );
    //             pool.query('INSERT INTO member_occupation SET occupation = ?, occu_address = ?, employee_name = ?, date_employed, salary, mem_id = ?',[occupation, occu_address, emmployee_name, date_employed, salary, mem_id],(err, results, fields) =>{
    //                 if(!err){console.log(results);}else{console.log(err);}}
    //             );
    //             pool.query('INSERT INTO member_business SET business_name = ?, business_address = ?, mem_id = ?',[business_name, business_address,  mem_id],(err, results, fields) =>{
    //                 if(!err){console.log(results);}else{console.log(err);}}
    //             );
    //         }
    //         else{
    //             console.log(err);
    //         }
    //     }
    // );
    res.render('a-application-dl')
}

// Caculator

exports.Calculator = (req, res) => {   
    const data = {
        id: uuid.v4(),
        title: "Calculator",
        title2: "Caculator"
    } 
    res.render('calculator', data);
}


//
//
//ERROR
//
//
exports.err401 = (req, res) => { 
    const data = {
        title: "401"
    }   
    res.render('401', data);
}
exports.err404 = (req, res) => { 
    const data = {
        title: "404"
    }   
    res.render('404', data);
}
exports.err500 = (req, res) => { 
    const data = {
        title: "500"
    }   
    res.render('500', data);
}


// Trial
exports.tryben = (req, res) => { 
    const ben_fullname = req.body;
    const data = {
        title: "Try Ben"
    }  
    console.log(ben_fullname)
    res.render('try-ben', data);
}

// // view users
// exports.view = (req, res) => {
//     //DB Connection
//     pool.getConnection((err, connection) => {
//         if(err) throw err; //not connected
//         console.log('Connection as ID ' + connection.threadId);

//         //user the connect
//         connection.query('SELECT * FROM user WHERE status = "active"', (err, rows) =>{
//             //When done with the connection, release it.
//             connection.release();
//             if(!err){
//                 res.render('try/try-home', { rows });
//             } else {
//                 console.log(err);
//             }
//             console.log('The data from user table: \n', rows);
//         }); 
//     });
// }

// //Search by the user
// exports.search = (req, res) => {
//     //DB Connection
//     pool.getConnection((err, connection) => {
//         if(err) throw err; //not connected
//         console.log('Connection as ID ' + connection.threadId);

//         let searchTerm = req.body.search;
//         //user the connect
//         connection.query('SELECT * FROM user WHERE fn LIKE ? OR ln LIKE ?',['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) =>{
//             //When done with the connection, release it.
//             connection.release();
//             if(!err){
//                 res.render('try-home', { rows });
//             } else {
//                 console.log(err);
//             }
//             console.log('The data from user table: \n', rows);
//         });
//     });
// }