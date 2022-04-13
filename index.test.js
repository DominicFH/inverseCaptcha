const inverseCaptcha = require(".");

describe("inverseCaptcha", () => {
	describe("Single Digits", () => {
		it("When passed a single digit character, return that digit due to looping pair", () => {
			const input = "1";
			expect(inverseCaptcha(input)).toBe(1);
		});
		it("When passed a single digit character multiple times, return the sum of the pairs", () => {
			const input = "444444";
			expect(inverseCaptcha(input)).toBe(24);
		});
	});
	describe("Two Digits", () => {
		it("When passed two separate digits just one time each, return zero", () => {
			const input = "12";
			expect(inverseCaptcha(input)).toBe(0);
		});
		it("When passed two digits multiple times in sequence, return the sum of those numbers", () => {
			const input = "1122";
			expect(inverseCaptcha(input)).toBe(3);
		});
		it("When passed two digits multiple times with snaky looping included, return the sum of those numbers", () => {
			const input = "1221";
			expect(inverseCaptcha(input)).toBe(3);
		});
	});
	// I'm aware this is a bad describe block description but I kept thinking about that chocolate orange advert
	describe("TOTAL ECLIPSE", () => {
		it("When passed multiple digits one time each, return zero", () => {
			const input = "1234";
			expect(inverseCaptcha(input)).toBe(0);
		});
		it("When passed multiple digits multiple times in sequence, return the sum of those numbers", () => {
			const input = "11223344";
			expect(inverseCaptcha(input)).toBe(10);
		});
		it("When passed multiple digits multiple times with snaky looping included, return the sum of those numbers", () => {
			const input = "12233441";
			expect(inverseCaptcha(input)).toBe(10);
		});
	});
});
