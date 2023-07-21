Cypress.Commands.add("getUser", (type, value) => {
    return cy.request("GET", `/usuarios?${type}=${value}`)
})

Cypress.Commands.add("postUser", (userData) => {
    return cy.request("POST", `/usuarios`, userData)
})

Cypress.Commands.add("getUserId", (id) => {
    return cy.request("GET", `/usuarios/${id}`)
})

Cypress.Commands.add("deleteUser", (id) => {
    return cy.request("DELETE", `/usuarios/${id}`)
})

Cypress.Commands.add("updateUser", (id, updateData) => {
    return cy.request("PUT", `/usuarios/${id}`, updateData)
})
