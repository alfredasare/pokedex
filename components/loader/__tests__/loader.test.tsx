import {render, screen} from "@testing-library/react";
import Loader from "../loader";

describe("Loader", () => {
    test("render loader image", () => {
        render(<Loader />);

        const image = screen.getByRole("img") as HTMLImageElement;
        expect(image.alt).toBe("Pokeball");
    })
})
