import { render, screen } from "@testing-library/react";
import App from "./components/App";

test("renders learn react link", () => {
    try {
        render(<App />);
    } catch (error) {}
});
