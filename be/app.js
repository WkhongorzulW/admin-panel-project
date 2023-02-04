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

  const newProduct = {
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
    dataObject.push(newProduct);

    fs.writeFile(
      "./public/data/products.json",
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error during file write",
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

/*-------------- DELETE /product/ ------------*/
app.delete("/products", (request, response) => {
  const body = request.body;

  fs.readFile("./public/data/products.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const readObject = JSON.parse(readData);
    const filteredObject = readObject.filter((o) => o.id !== body.productId);

    fs.writeFile(
      "./public/data/products.json",
      JSON.stringify(filteredObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error during write file",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: filteredObject,
        });
      }
    );
  });
});

/*--------------- PUT /products/ ----------------*/
app.put("/products", (request, response) => {
  const body = request.body;

  fs.readFile("./public/data/products.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const savedData = JSON.parse(readData);

    const changedData = savedData.map((d) => {
      if (d.id === body.id) {
        (d.productname = body.productname),
          (d.price = body.price),
          (d.stock = body.stock),
          (d.color = body.color),
          (d.category = body.category),
          (d.description = body.description);
      }
      return d;
    });

    fs.writeFile(
      "./public/data/products.json",
      JSON.stringify(changedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error during write file",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: changedData,
        });
      }
    );
  });
});

/*-------------- GET /users/ -----------------*/
app.get("/users", (request, response) => {
  fs.readFile("./public/data/users.json", "utf-8", (readError, readData) => {
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

app.post("/users", (request, response) => {
  const body = request.body;
  console.log(body);

  const newUser = {
    id: Date.now().toString(),
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email,
    age: body.age,
    phonenumber: body.phonenumber,
    role: body.role,
  };

  fs.readFile("./public/data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const dataObject = JSON.parse(readData);
    dataObject.push(newUser);

    fs.writeFile(
      "./public/data/users.json",
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error during write file",
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

/*-------------- DELETE /users/ ------------*/
app.delete("/users", (request, response) => {
  const body = request.body;

  fs.readFile("./public/data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const readObject = JSON.parse(readData);
    const filteredObject = readObject.filter((o) => o.id !== body.userId);

    fs.writeFile(
      "./public/data/users.json",
      JSON.stringify(filteredObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error during write file",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: filteredObject,
        });
      }
    );
  });
});

app.put("/users", (request, response) => {
  const body = request.body;

  fs.readFile("./public/data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const savedData = JSON.parse(readData);

    const changedData = savedData.map((d) => {
      if (d.id === body.id) {
        (d.firstname = body.firstname),
          (d.lastname = body.lastname),
          (d.email = body.email),
          (d.age = body.age),
          (d.phonenumber = body.phonenumber),
          (d.role = body.role);
      }
      return d;
    });

    fs.writeFile("./public/data/users.json", "utf-8", (writeError) => {
      if (writeError) {
        response.json({
          status: "error during write file",
          data: [],
        });
      }
      response.json({
        status: "success",
        data: changedData,
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
