import {api} from "../../support/userDataUtils"

describe("USER INTEGRATION TEST - POST/GET/PUT/DELETE", () => {
  let user;
  let idUser;
  let newUser;

  before(() => {
    user = api;
    newUser = api;
  });

  it("Should create a new user", () => {
    cy.postUser(user).should((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.contain({ message: "Cadastro realizado com sucesso" });
      idUser = response.body._id;
      expect(response.body._id).to.not.equal(null);
    });
  });

  it("Should list user by ID", () => {
    cy.getUser("_id", idUser).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Should list user by Name", () => {
    cy.getUser("nome", user.nome).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Should list user by Email", () => {
    cy.getUser("email", user.email).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Should retrieve a user by ID", () => {
    cy.getUserId(idUser).should((response) => {
      expect(response.status).to.eq(200);
            expect(response.body).to.have.keys("administrador","email","nome","password","_id")
    });
  });

  it("Should update a user", () => {
    cy.updateUser(idUser, newUser).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.equal("Registro alterado com sucesso");
    });
  });

  it("Should delete a user", () => {
    cy.deleteUser(idUser).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.contain({ message: "Registro excluído com sucesso" });
    });
  });
});
