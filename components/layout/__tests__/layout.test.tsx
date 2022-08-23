import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Layout from "../Layout";

describe("Layout", () => {
    test("layout renders children", () => {
        render(
            <Layout
                title="Layout component"
            >
                <h1>Layout works</h1>
            </Layout>
        )
        expect(screen.getByText(/layout works/i)).toBeInTheDocument();
    });
})
