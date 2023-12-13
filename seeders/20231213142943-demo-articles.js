'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.bulkInsert('Articles', [{
          name: 'Introduction to Ashtanga',
          slug: 'Introduction-to-ashtanga',
          image: 'ashtanga.jpg',
          body: '<p>Lorem Ipsum</p>',
          published: '2020-01-08 15:02:30',
          createdAt: new Date(),
          updatedAt: new  Date()
        }]),
        queryInterface.bulkInsert('Articles', [{
          name: 'Morning vinyasa flow routine',
          slug: 'morning-vinyasa-flow-routine',
          image: 'morning.jpg',
          body: '<p>Lorem ipsum</p>',
          published: '2020-01-08 15:02:41',
          createdAt: new Date(),
          updatedAt: new Date()
        }]),
      queryInterface.bulkInsert('Articles', [{
        name: 'Secrets of a yoga teacher',
        slug: 'secrets-of-a-yoga-teacher',
        image: 'yoga-teacher.jpg',
        body: '<p>Lorem ipsum</p>',
        published: '2020-01-08 15:03:00',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
