const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

const PORT = 8080;
app.use(cors());
app.use(express.json());

/*--------------- GET /product/ --------------*/
app.get("/products", (request, response) => {
  fs.readFile("./public/data/products.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }
    const objectData = JSON.parse(readData);

    response.json({
      status: "success",
      data: objectData,
    });
  });
});

/*-------------- POST /product/ --------------*/
app.post("/products", (request, response) => {
  const body = request.body;
  console.log(body);

  const newUser = {
    id: Date.now().toString(),
    productname: body.productname,
    price: body.price,
    stock: body.stock,
    color: body.color,
    category: body.category,
    description: body.description,
  };

  fs.readFile("./public/data/products.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "read file error",
        data: [],
      });
    }

    const dataObject = JSON.parse(readData);
    console.log(dataObject);
    console.log("================");
    dataObject.push(newUser);
    console.log(dataObject);

    fs.writeFile(
      "./data/products.json",
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            staus: "error during file write",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: dataObject,
        });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
