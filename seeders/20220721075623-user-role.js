'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.bulkInsert('user_role',[
          {
            user_id: 1,
            role_id: 2,
            // createdAt: new Date,
            // updatedAt: new Date
        },{
            user_id: 3,
            role_id: 1,
            // createdAt: new Date,
            // updatedAt: new Date
      },{
            user_id: 2,
            role_id: 3,
            // createdAt: new Date,
            // updatedAt: new Date
    },
      ])
      ])
    })
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.bulkDelete('user_role', null, {})
      ])
    })
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};