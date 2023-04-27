"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Items", [
      {
        itemName: "Sepatu Vans",
        description: "sepatu buat kaki",
        price: 699999,
        imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
        stock: 2,
        color: "Brown",
        visibility: "True",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemName: "Sepatu High",
        description: "sepatu buat kaki",
        price: 499999,
        imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
        stock: 7,
        color: "Red",
        visibility: "True",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemName: "Sepatu Skate",
        description: "sepatu buat kaki",
        price: 799999,
        imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
        stock: 10,
        color: "Brown",
        visibility: "True",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemName: "Sepatu Running",
        description: "sepatu buat kaki",
        price: 899999,
        imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
        stock: 12,
        color: "Brown",
        visibility: "True",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemName: "Sepatu Convers ChuckTaylor",
        description: "sepatu buat kaki",
        price: 499999,
        imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
        stock: 5,
        color: "Brown",
        visibility: "True",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemName: "Sepatu Convers ChuckTaylor II",
        description: "sepatu buat kaki",
        price: 999999,
        imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
        stock: 3,
        color: "Brown",
        visibility: "True",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemName: "Sepatu Convers Johnvarvatos",
        description: "sepatu buat kaki",
        price: 450000,
        imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
        stock: 12,
        color: "Brown",
        visibility: "True",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemName: "Sepatu Nike Jordan",
        description: "sepatu lah intinya",
        price: 999999,
        imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
        stock: 3,
        color: "Brown",
        visibility: "True",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemName: "Sepatu Nike Stefanjanoski",
        description: "sepatuu",
        price: 899999,
        imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
        stock: 15,
        color: "Brown",
        visibility: "True",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemName: "Sepatu VansSk8",
        description: "buat main papan",
        price: 999999,
        imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
        stock: 30,
        color: "Brown",
        visibility: "True",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Items", null, {});
  },
};
