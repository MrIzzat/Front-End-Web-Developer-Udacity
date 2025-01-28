/**
 * @jest-environment jsdom
 */

import { getCityWeather } from "../src/server/server.js"



describe("Testing the get City Weather Functionaltiy", () => {
    test("Testing the getCityWeather() function", async () => {
        let postRequest = "Bad Form Text"
        let results =  await getCityWeather(postRequest)
        expect(results).toEqual("error");
    })
})