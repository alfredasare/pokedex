import {render, screen, within} from "@testing-library/react";
import uuid from 'uuid';

import DetailsCard from "../detailsCard";
import bulbasaur from "../../../mocks/bulbasaur.json";

jest.mock('uuid', () => {
    const base = '9134e286-6f71-427a-bf00-';
    let current = 100000000000;

    return {
        v4: () => {
            const uuid = base + current.toString();
            current++;

            return uuid;
        }
    }
});

describe("Details", () => {
    test("details card should render Pokemon data", () => {
        render(<DetailsCard pokemon={bulbasaur} />);

        const sections = screen.getAllByRole('list');
        const [baseStats, types, moves] = sections;

        expect(within(baseStats).getAllByRole("listitem").length).toBe(6);
        expect(within(types).getAllByRole("listitem").length).toBe(2);
        expect(within(moves).getAllByRole("listitem").length).toBe(12);
    });
});
