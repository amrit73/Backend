const feedback = require('./app/models/feedback');
const appointment = require('./app/models/appointment');
const user = require('./app/models/user');
const forum = require('./app/models/forum');
const forumComment = require('./app/models/forumComment');
const mongoose = require('mongoose');

//creating database for testing
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

//schema test of feedback
describe('feedbacks Schema test', () => {
    // the code below is for insert testing
    it('Add feedbacks testing', () => {
        const feedbacks = {
            'name': 'Nokia',
            'email': '21',
            'phone': 'asd',
            'message': 'asda'
        };

        return feedback.create(feedbacks)
            .then((j) => {
                expect(j.name).toEqual('Nokia');
            });
    });
});


//schema test of appointment
describe('appointment Schema test', () => {
    // the code below is for insert testing
    it('Add Appointment testing ', () => {
        const appointments = {
            'name': 'manish',
            'petname': 'dog',
            'email': 'manishchy@.gmail.com',
            'phone': '9813605819',
            'date': '26/01/2019',
            'time': '8:22',
            'message': 'hello'
        };

        return appointment.create(appointments)
            .then((appoint) => {
                expect(appoint.name).toEqual('manish');
            });
    });
});


//schema test of user
describe('user Schema test ', () => {
    // the code below is for insert testing
    it('user  testing ', () => {
        const users = {
            'name': 'amrit',
            'email': 'amrit73@.gmail.com',
            'phone': '9813605819',
            'username': 'amrit',
            'password': 'amrit'
        };

        return user.create(users)
            .then((u) => {
                expect(u.name).toEqual('amrit');
            });
    });
});

//schema test of forum
describe('forum Schema test ', () => {
    // the code below is for insert testing
    it('forum  testing ', () => {
        const forums = {
            'title': 'Testing the froum schema',
            'description': 'this is just for testing purpose',
            'author': 'amrit',
        };

        return forum.create(forums)
            .then((forumtesting) => {
                expect(forumtesting.author).toEqual('amrit');
            });
    });
    //the code below is for update testing
    it('forum update data testing ', () => {
        return forum.update({ author: 'amrit' }, {
            $set: {
                title: 'update done'
            }
        }).then((forumtesting) => {
            expect(forumtesting.ok).toEqual(1);
        });
    });
});

//schema test of forumComment
describe('forumComment Schema test ', () => {
    // the code below is for insert testing
    it('forumComment  testing ', () => {
        const forumComments = {
            'description': 'amrit',
            'author': 'amrit'
        };

        return forumComment.create(forumComments)
            .then((u) => {
                expect(u.author).toEqual('amrit');
            });
    });

});


//schema test of forum
describe('forum delete test ', () => {
    // the code below is for delete testing
    it('forum  delete ', async() => {
        const status = await forumComment.deleteOne({
            _id: '5d21b98e8ab96c17c4e0aa15'
        }).then(function(res) {
            expect(res.deletedCount).toBe(0)
        })


    });

});

//schema test of forum
describe('forum delete test ', () => {
    // the code below is for delete testing
    it('forum  delete ', async() => {
        const status = await forumComment.deleteOne({
            _id: '5d21b98e8ab96c17c4e0aa15'
        }).then(function(res) {
            expect(res.deletedCount).toBe(1)
        })
    });
});