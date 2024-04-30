var request = require("request");
const expect = require("chai").expect; 


    describe("Test GET api", function () {
        var url = "http://localhost:3000/api/cat";

        it("returns status code of 200",  function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

    });

    describe("Test POST api", function () {
        var url = "http://localhost:3000/api/cat";
        var data = {title: 'Cat title', subTitle: 'Cat Subtitle', link: 'path', description: 'description'};

        it("post cat to DB", function (done) {
            request(url, {method: 'post', body: data, json: true},  function (error, response, body) {
                console.log('error', error);
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

    });

    describe("Test DELETE api", function () {
        var url = "http://localhost:3000/api/cat/662785fbc1ca410c0a4f257e";

        it("delete a cat", function (done) {
            request(url, {method: 'delete'},  function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

    });

