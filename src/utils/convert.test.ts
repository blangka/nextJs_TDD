import {ageFromString} from "@/utils/convert";

describe('convert', () => {
    it('convert 함수들 테스트', () => {
        expect(ageFromString("24")).toBe("24세");
    });
});
