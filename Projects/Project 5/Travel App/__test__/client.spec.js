/**
 * @jest-environment jsdom
 */

import { dateDifferenceInDays } from "../src/client/js/tripsList.js"



describe("Testing the Date Difference In Days Functionaltiy", () => {
    test("Testing the dateDifferenceInDays() function", async () => {
        let postRequest = Date.now()
        let results =  dateDifferenceInDays(postRequest)
        expect(results).toEqual(0);
    })
})