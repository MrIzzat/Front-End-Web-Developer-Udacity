/**
 * @jest-environment jsdom
 */

import { sendPost } from "../src/client/js/formHandler.js"



describe("Testing the Send Post Functionaltiy", () => {
    test("Testing the sendPost() function", async () => {
        let postRequest = "Bad Form Text"
        let results =  await sendPost(postRequest)
        expect(results).toEqual(undefined);
    })
})