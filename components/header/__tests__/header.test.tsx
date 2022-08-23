import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "../header";

describe("Header", () => {
    test("renders header component", () => {
        render(<Header />);

        expect(screen.getByRole("heading")).toBeInTheDocument();
    });
})
