var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_db"
});

connection.connect(function (err) {
  if (err) throw err;


});

function afterConnection() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}




function QuantityAsk() {
  inquirer.prompt([
    {
      type: "input",
      name: 'quantity',
      message: 'How many do you need?'
    }
  ]).then(function (input) {
    connection.query("SELECT * FROM products", function (err, res) {

     if (input.quantity > res[1].stock_quantity) {
       console.log("work")
     }

    });

  })
}





function promptUserInput() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'item_id',
      message: 'Please enter the Item ID which you would like to purchase.',
      choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    }
  ]).then(function (input) {
    connection.query("SELECT * FROM products", function (err, res) {

      console.log('User selected ' + input.item_id);

      if (input.item_id === "1") {
        console.log(res[0])
      }
      if (input.item_id === "2") {
        console.log(res[1])
      }
      if (input.item_id === "3") {
        console.log(res[2])
      }
      if (input.item_id === "4") {
        console.log(res[3])
      }
      if (input.item_id === "5") {
        console.log(res[4])
      }
      if (input.item_id === "6") {
        console.log(res[5])
      }
      if (input.item_id === "7") {
        console.log(res[6])
      }
      if (input.item_id === "8") {
        console.log(res[7])
      }
      if (input.item_id === "9") {
        console.log(res[8])
      }
      if (input.item_id === "10") {
        console.log(res[9])
      }

      QuantityAsk();

    });

  })
}

promptUserInput();