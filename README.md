Models: Artists, Songs, Albums, Tracks

Associations:

One to many relationship between Artists and Songs
An Artist can have multiple Songs
One to many relationship between Artists and Albums
An Artist can have multiple Albums
One to many relationship between Albums and Tracks
An Album can have multiple Tracks
A Song can be a Track on multiple Albums
Model Fields:

Artists
id of the data type UUID (universally unique identifier)
name of the data type VARCHAR(255)

Songs
id of the data type UUID
artistId of the data type UUID
name of the data type VARCHAR(255)
duration of the data type INTEGER

Albums
id of the data type UUID
artistId of the data type UUID
name of the data type VARCHAR(255)

Tracks
id of the data type UUID
idx of the data type INTEGER (the order the songs appear in the album)
songId of the data type UUID
albumId of the data type UUID

Routes
In this module, you will build the following routes:

GET /api/albums
Return all albums with their artists
GET /api/albums/search/:term
Returns all albums with the searched term in their name
GET /api/albums/:id/tracks
Returns the tracks of an album
Each track should include the song
Each track should be listed in order based on its index

------------------

Anatomy of a test
We will go over the anatomy of a test once more and break down each of the parts:

describe is a function provided by the Mocha testing framework to create named sections and subsections of tests.
Code syntax: describe(‘ ’, () => {})
describe accepts two arguments: a string to name the describe block, and a function to contain the test blocks.
You can nest describe functions to create subsections of tests.
it is a function provided by Mocha to create a single test. The it function should be placed within a describe block.
Code syntax: it(‘ ’, () => {})
it accepts two arguments: a string to name the test, and a function to contain the test logic.
expect is a function provided by the Chai assertion library to test a value - generally the outcome of a test case - against an expected value. expect should be used within an it block. If all expect assertions within an it block return true, that test will pass.
Code syntax: expect( ).to.equal( )
expect accepts one argument, which is the value it will test. Assertion methods should then be called on expect, such as .to.equal( ), which checks the value passed to expect against another value that it will equal if the code is behaving as intended.
beforeEach is a function provided by Mocha to perform an action before every test is run. beforeEach should be contained within a describe block, and will be run before each it function within that block. beforeEach is generally used to establish consistent conditions for tests - such as creating variables or seeding data - which are reset every time before the next test is run.
Code syntax: expect( ).to.equal( )
Remember, tests are very literal. expect().to.equal() compares two values similarly to a triple equal sign. Everything about the actual output must meet the expected output. For example, if your expected output is “Panic! At the Disco”, with the exclamation point, and your actual output is “Panic At the Disco”, without the exclamation point, the test will fail.


Testing Best Practices
Stay Organized
Use describe blocks to organize your tests. For example, you could have a section of tests describing your database models and then subsections for tests on each individual model.

Test One Thing At a Time
Use each it block to test one discrete piece of expected behavior. If you use an it block to test more than one piece of behavior and the test fails, you may have a hard time determining what part of the test is failing.

You can include one or multiple expect assertions within a single it function. However, if you do include more than one, all expect assertions should be testing the same discrete piece of expected behavior using related examples. As you write your tests, ask yourself: if this test failed, would it be easy for me to pinpoint what is not working?

Code Coverage
Aim for high code coverage. That means that most of the expected functionality of your code should be checked, or “covered” by testing. There is no universal standard for the ideal level of code coverage. But as a reference point, Google uses the general code coverage guidelines of 60% as “acceptable”, 75% as “commendable” and 90% as “exemplary.” (Source: Google Testing Blog: Code Coverage Best PracticesLinks to an external site.).
----------
Once your syncAndSeed function is complete, import it into your models.spec.js file. Run the tests using your test:dev script. Is your first test passing? If not, adjust your code until the first test passes.

Next, write some tests to confirm that the seeded artists have the required properties. Then continue to build out your Artist model and seed function to pass those tests.

Alternative Approach
Another approach to testing your models could be to import the Sequelize models into your test file and call them directly to create instances in the test database to run tests on. The benefit of that approach would be that you could test the models separately from testing the seed function. Then if something broke, you would know whether the issue was in your models or your seed function. The approach you’re using in this module is a little faster to set up, but if you were working on a bigger project it might be worth it to create a special test database to test the two aspects separately.
