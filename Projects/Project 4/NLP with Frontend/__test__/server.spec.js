/**
 * @jest-environment jsdom
 */

import {serverStart} from "../src/server/server.js"



describe("Testing the Server Start Functionaltiy", () => {
    test("Testing the serverStart() function", async() => {
        let port = 8080
       await  expect( serverStart(port)).toEqual(undefined);
    })
})