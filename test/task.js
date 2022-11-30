import chai from 'chai';
// let mocha = require('mocha');
import chaihttp from 'chai-http';
import server from '../backend/server.js';
// import {request} from "chai";

//assertion style
chai.should();

chai.use(chaihttp);

describe('Tasks API', () => {

    describe("Test case for all the products", () => {
        it("It should GET all the products", (done) => {
            chai.request(server)
                .get("/api/products")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    // response.body.length.should.be.eq(3);
                done();
                })
        })
    })


    describe("Test case for all the orders", () => {
        it("It should GET all the orders", (done) => {
            chai.request(server)
                .get("/api/orders")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done();
                })
        })
    })

    describe("Test case for all the coupons", () => {
        it("It should GET all the coupons", (done) => {
            chai.request(server)
                .get("/api/coupon")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                done();
                })
        })
    })

    describe("Test case for all the users", () => {
        it("It should GET all the users", (done) => {
            chai.request(server)
                .get("/api/users")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                done();
                })
        })
    })

    // describe("GET /api/cart", () => {
    //     it("It should GET all the carts", (done) => {
    //         chai.request(server)
    //             .get("/api/cart")
    //             .end((err, response) => {
    //                 response.should.have.status(200);
    //                 response.body.should.be.a('object');
    //                 // response.body.length.should.be.eq(3);
    //             done();
    //             })
    //     })
    // })

    // describe('POST /api/coupon',()=>{
    //     it('It should return coupon', (done)=>{
    //         let credentials = {
    //             name: "aaaa",
    //             expiry : "1234",
    //             discount : 20
    //         }
    //         chai.request(server)
    //             .post('/api/coupon')
    //             .set('content-type', 'application/x-www-form-urlencoded')
    //             .send(credentials)
    //             .end((err,resp)=>{
    //                 resp.should.have.status(200)
    //                 resp.body.should.be.a('object')
    //                 console.log(resp.body);
    //             done()
    //             })
    //     })
    // })


    }
);


    




