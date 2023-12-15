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


// UNderstanding of this
// typeorm library;

// database complexicity Manager

// indexing 

const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'Ayush@1234',
    database: 'login',
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


// const pgp = require('pg-promise')();
// const connectionString = 'postgres://postgres:Ayush@1234@localhost:5432/login';
// const db = pgp(connectionString);

// function generateRandomPassword(length = 12) {
//     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
//     let password = "";

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * charset.length);
//         password += charset[randomIndex];
//     }

//     return password;
// }

// const batchSize = 10;
// const length = 10000100;

// async function insertRandomValues() {
//     try {
//         let i = 10000011;

//         while (i <= length) {
//             const batchValues = [];

//             for (let j = 0; j < batchSize && i <= length; j++) {
//                 const id = i;
//                 const password = generateRandomPassword();
//                 batchValues.push({ id, password });
//                 i++;
//             }

//             if (batchValues.length > 0) {

                // const queryText = 'INSERT INTO LoginPage(id, password) VALUES($1, $2)';
                // const queryValues = batchValues.flat();

                //  await client.query(queryText, queryValues);

//                 const placeholders = Array.from({ length: batchValues[0].length }, (_, index) => `$${index + 1}`).join(',');

//                 const queryText = `INSERT INTO LoginPage(id, password) VALUES(${placeholders})`;

//                 const flattenedBatchValues = batchValues.reduce((acc, val) => acc.concat(val), []);

//                 await client.query(queryText, flattenedBatchValues);

//                 const cs = new pgp.helpers.ColumnSet(['id', 'password'], { table: 'LoginPage' });
//                 const values = pgp.helpers.insert(batchValues, cs);
//                 await db.none(values);
//             }

//         }

//         console.log('Values inserted successfully.');
//     } catch (error) {
//         console.error('Error inserting values:', error);
//     }
// }

// one by one insertion 

//     const length = 10000010;

//    async function insertRandomValues() {
//     try{
//         let i=10000002;
//         while(i<=length){
//             const id =i;
//             const password = generateRandomPassword()

//          await client.query('INSERT INTO LoginPage(id, password) VALUES($1, $2)', [id, password]);
//          i++;
//         }
//         console.log('Values inserted successfully.');
//     } catch (error) {
//       console.error('Error inserting values:', error);
//     } 
//     }

const pgp = require('pg-promise')();
const connectionString = 'postgres://postgres:Ayush@1234@localhost:5432/login';
const db = pgp(connectionString);

function generateRandomPassword(length = 12) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

const batchSize = 10000;
const length = 100000000;

async function insertRandomValues() {
    try {
        let i = 10000001;
        
        while (i <= length) {
            const batchValues = [];

            for (let j = 0; j < batchSize && i <= length; j++) {
                const id = i;
                const password = generateRandomPassword();
                batchValues.push({ id, password });
                i++;
            }
            //  console.log(batchValues)

           
            if (batchValues.length > 0) {
                const cs = new pgp.helpers.ColumnSet(['id', 'password'], { table: "practices" })
                const values = pgp.helpers.insert(batchValues, cs);
                // console.log(values);
                await db.none(values);
            }
        }

        console.log('Values inserted successfully.');
    } catch (error) {
        console.error('Error inserting values:', error);
    } finally {
        pgp.end();
    }
}


const viewData = async () => {
    try {
        const data = await client.query('SELECT * FROM Practices');
        console.log(data.rows);
    } catch (err) {
        console.log('Error in viewing data', err);
    }
}

const InsertData = async () => {
    try {
        const data = await client.query(`INSERT INTO LoginPage (id,password) VALUES ('2','kartik5465')`);
        console.log('value is inserted',data.rows);
    } catch (err) {
        console.log('Error in Inserting data', err);
    }
}

const UpdateData = async () => {
    try {
        const data = await client.query(`UPDATE Series SET imgsrc = 'https://wallpapercave.com/uwp/uwp3867921.jpeg' WHERE id =8`);

        console.log(data.rows);
    } catch (err) {
        console.log('Error in Updating data', err);
    }
}

const DeleteData = async () => {
    try {
        const data = await client.query(`SELECT * FROM LoginPage WHERE TRIM(password) = 'pobin111'`);
        console.log(data.rows);
    } catch (err) {
        console.log('Error in Deleting data', err);
    }
}



const Sdata = [
    {
      id: 10,
      imgsrc: 'https://wallpapercave.com/uwp/uwp3600586.jpeg',
      title: 'A Netflix Original Series',
      sname: 'Vikings Valhalla',
      link: 'https://www.netflix.com/in/title/81149450',
    },
    // {
    //   id: 11,
    //   imgsrc: 'https://wallpapercave.com/w/wp11755847.jpg',
    //   title: 'A Netflix Original Series',
    //   sname: 'Wednesday',
    //   link: 'https://www.netflix.com/in/title/81231974',
    // },
    // {
    //   id: 8,
    //   imgsrc: 'https://wallpapercave.com/w/uwp3821522.jpg',
    //   title: 'A Netflix Original Series',
    //   sname: 'The Witcher',
    //   link: 'https://www.netflix.com/in/title/80189685',
    // },
  ];


  async function insertDataIntoTable() {
    try {
      for (const series of Sdata) {
        const query = 'INSERT INTO Series (id, imgsrc, title, sname, link) VALUES ($1, $2, $3, $4, $5)';
        const values = [series.id, series.imgsrc, series.title, series.sname, series.link];
        await client.query(query, values);
      }
  
      console.log('Data inserted successfully.');
    } catch (error) {
      console.error('Error inserting data:', error);
    } finally {
      // Close the database connection
    //   client.end();
    }
  }
  


  insertDataIntoTable()

//  insertRandomValues()
// viewData(); 
// InsertData();
//viewData();
// UpdateData();
//DeleteData();