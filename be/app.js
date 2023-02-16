const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bcrypt = require("bcrypt");

const app = express();

const PORT = 8080;
const SALT_ROUNDS = 10;

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
    image: body.image,
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
        (d.image = body.image),
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

/*=======================================================*/

/*-------------- GET /users/ -----------------*/
app.get("/users/list", (request, response) => {
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

app.post("/users/list", (request, response) => {
  const body = request.body;
  console.log(body);

  fs.readFile("./public/data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const dataObject = JSON.parse(readData);

    // ROLE
    fs.readFile("./public/data/role.json", "utf-8", (readError, readData) => {
      if (readError) {
        response.json({
          status: "file read error",
          data: [],
        });
      }

      const roleData = JSON.parse(readData);
      const roleName = roleData.filter((role) => role.id === body.role)[0];

      const userPassword = body.password;

      bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
        if (err) {
          response.json({
            status: "generating salt error",
          });
        }
        bcrypt.hash(userPassword, salt, (hashError, hashData) => {
          if (hashError) {
            response.json({
              status: "hashing has error",
              data: [],
            });
          }

          const newUser = {
            id: Date.now().toString(),
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            age: body.age,
            phonenumber: body.phonenumber,
            password: hashData,
            role: roleName,
          };

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
    });
  });
});

/*-------------- DELETE /users/ ------------*/
app.delete("/users/list", (request, response) => {
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

/*--------------- PUT /users/ ------------*/
app.put("/users/list", (request, response) => {
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

    fs.writeFile(
      "./public/data/users.json",
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

/*------------ POST /user login/ ------------*/
app.post("/login", (request, response) => {
  const body = request.body;

  fs.readFile("./public/data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file not found",
        data: [],
      });
    }

    const usersArrayObject = JSON.parse(readData);

    const foundUser = usersArrayObject.filter(
      (user) => body.email === user.email
    );

    if (foundUser.length === 0) {
      response.json({
        status: "user not found",
        data: [],
      });
    } else {
      const foundUserObj = foundUser[0];
      const plainPassword = body.password;
      const savedPassword = foundUserObj.password;

      bcrypt.compare(
        plainPassword,
        savedPassword,
        (compareError, compareResult) => {
          if (compareError) {
            response.json({
              status: "Username or password do not match",
            });
          }

          if (compareResult) {
            response.json({
              status: "success",
              data: {
                email: foundUserObj.email,
                firstname: foundUserObj.firstname,
                lastname: foundUserObj.lastname,
              },
            });
          } else {
            response.json({
              status: "Username or password do not match",
              data: [],
            });
          }
        }
      );
    }
  });
});

/// API get all user roles

app.get("/users/roles", (request, response) => {
  fs.readFile("./public/data/role.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }

    const dataObject = JSON.parse(readData);

    response.json({
      status: "success",
      data: dataObject,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
