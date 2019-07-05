// use the path of your model
const feedback = require('./app/models/feedback');
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://localhost:27017/apitesting';
beforeAll(async() => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});
afterAll(async() => {
    await mongoose.connection.close();
});
describe('forum Schema test anything', () => {
    // the code below is for insert testing
    it('Add product testing anything', () => {
        const feedback = {
            'name': 'Nokia',
            'email': '21',
            'phone': 'asd',
            'message': 'asda'
        };

        return feedback.create(feedback)
            .then((feedback.name) => {
                expect(j.name).toEqual('Nokia');
            });
    });
    // the code below is for delete testing
    // it('to test the delete product is working or not', async() => {
    //     const status = await Product.deleteMany();
    //     expect(status.ok).toBe(1);
    // });

})