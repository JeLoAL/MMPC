const mysql = require('mysql');
const uuid = require('uuid');
const multer = require('multer');

// Connection Pool
const pool = mysql.createPool({
    connectionLimit : 100,
    host            :process.env.DB_HOST,
    user            :process.env.DB_USER,
    password        :process.env.DB_PASSWORD,
    database        :process.env.DB_NAME
});

// SQL 
const member = 'SELECT * FROM member_info';

// Uploading Profile
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

exports.SAdashboard = (req, res) => { 
    const data = {
        title: "Dashboard",
        username: req.body.username
    }   
    res.render('sa-dashboard', data);
}

exports.SAdashboardGET = (req, res) => { 
    const data = {
        title: "Dashboard",
    }   
    res.render('sa-dashboard', data);
}

exports.SAmembers = (req, res) => { 
    const data = {
        title: "Members",
    }
    pool.getConnection((err, connection) => {
        if(err) throw err; //not connected
    
        //user the connect
        connection.query(member, (err, rows) =>{
            //When done with the connection, release it.
            connection.release();
            if(!err){
                res.render('admin/sa-members', {rows});
            } else {
                console.log(err);
            }
        });
    });
}
exports.SAmemberProfile = (req, res) => {
    const data = {
        title: "Members Profile"
    }
    res.render('sa-members-profile', data)
}

exports.SAaddmemberG = (req, res) => { 
    const data = {
        title: "Add Members",
        addmember: "/sa-addmember"
    }   
    res.render('sa-addmember', data);
}
exports.SAaddmemberP1 = upload.single('image'), (req, res) => {   
    res.render('sa-addmember', data);
}
exports.SAaddmemberP = (req, res) => { 
    const data = {
        title: "Add Members",
        email: req.body.email
    }
    res.render('sa-addmember', data);
}


exports.SAterminated = (req, res) => { 
    const data = {
        title: "Terminated Members",
    }   
    res.render('sa-terminated', data);
}
exports.SAaddloan = (req, res) => { 
    const data = {
        title: "Add Loan",
    }   
    res.render('sa-addloan', data);
}

exports.SApayment = (req, res) => { 
    const data = {
        title: "Loan Payment"
    }   
    res.render('sa-payment', data);
}

exports.SAmaturity = (req, res) => { 
    const data = {
        title: "Past Maturity Date"
    }   
    res.render('sa-maturity', data);
}

exports.SApatronage = (req, res) => { 
    const data = {
        title: "Patronage/Dividend",
    }   
    res.render('sa-patronage', data);
}

exports.SAexpenses = (req, res) => { 
    const data = {
        title: "Expenses",
    }   
    res.render('sa-expenses', data);
}
exports.SAcashflow= (req, res) => { 
    const data = {
        title: "Cash Flow",
    }   
    res.render('sa-cashflow', data);
}

exports.SAdailyCollection = (req, res) => { 
    const data = {
        title: "Daily Collection",
    }   
    res.render('sa-dailyCollection', data);
}

exports.SAloanrelease = (req, res) => { 
    const data = {
        title: "Loan Releases",
    }   
    res.render('sa-loan-releases', data);
}

exports.SAincomereport = (req, res) => { 
    const data = {
        title: "Income Report",
    }   
    res.render('sa-income-reports', data);
}

exports.SAcondonation = (req, res) => { 
    const data = {
        title: "Condonation",
    }   
    res.render('sa-condonation', data);
}