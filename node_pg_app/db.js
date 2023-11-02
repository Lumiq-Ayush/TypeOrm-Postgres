// const { Pool} = require('pg')

// const pool = new Pool({
//   user: 'postgres',
//   database: 'airline',
//   password: 'Ayush@1234',
//   port: 5432,
//   host: 'localhost',
// });
// pool.connect().then(()=>{
//     console.log('asssad');
// });
// module.exports = { pool };
// typeorm library;

// database complexicity Manager

// indexing 

const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'Ayush@1234',
    database: 'airline',
});

client.connect().then(() => {
    console.log('Connected to PostgreSQL datjaabase!');
    })
    .catch((err) => { 
        console.error('Error connecting to the database:', err); 
    });

    // client.query('Select * from Passengers', (err, res) => {
    //     if (!err) {
    //         console.log(res.rows);
    //     } else {
    //         console.log("Error", err)
    //     }
    // });


    // client.query(`INSERT INTO Passengers (passengerid,name,passport_number) VALUES ('2','Shubh','Shubh222')`, (err, res) => {
    //     if (!err) {
    //         console.log(res);
    //     } else {
    //         console.log("Error", err)
    //     }
    // })


// client.query(`Delete from COMPANY where id = 1`, (err, res) => {
//     if (!err) {
//         console.log("Sucessfully Deleted");
//     } else {
//         console.log("Error", err)
//     }
// })


    // async function insertData() {
    //     const [name, color] = process.argv.slice(2);
    //     try {
    //       const res = await pool.query(
    //         "INSERT INTO login_details (name, color) VALUES ($1, $2)",
    //         [name, color]
    //       );
    //       console.log(`Added a shark with the name ${name}`);
    //     } catch (error) {
    //       console.error(error)
    //     }
    //   }


const viewData = async () => {
    try {
        const data = await client.query('Select * from Passengers');
        console.log(data.rows);
    } catch (err) {
        console.log('Error in viewing data', err);
    }
}

const InsertData = async () => {
    try {
        const data = await client.query(`INSERT INTO Passengers (passengerid,name,passport_number) VALUES ('3','Pobin','pobin333')`);
        console.log(data.rows);
    } catch (err) {
        console.log('Error in Inserting data', err);
    }
}
const UpdateData = async () => {
    try {
        const data = await client.query(`UPDATE Passengers SET name = 'Dhirendra' WHERE passengerid =2`);
        console.log(data.rows);
    } catch (err) {
        console.log('Error in Updating data', err);
    }
}

const DeleteData = async () => {
    try {
        const data = await client.query(`Delete from COMPANY where id = 1`);
        console.log(data.rows);
    } catch (err) {
        console.log('Error in Deleting data', err);
    }
}

viewData();
// InsertData();
// viewData();
// UpdateData();
// DeleteData();
