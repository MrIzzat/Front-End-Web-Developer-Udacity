/**
 * @jest-environment jsdom
 */
import { checkURL } from "../src/client/js/urlChecker.js"



describe("Testing the URL Checker Functionaltiy", () => {
    test("Testing the checkURL() function", () => {
        let url = "Bad URL"

        expect(checkURL(url)).toEqual(false);
    })
})