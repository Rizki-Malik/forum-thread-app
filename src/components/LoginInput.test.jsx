/**
 * test scenario for LoginInput
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from "react";
import { afterEach, describe, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
import LoginInput from "./LoginInput";
import jest from 'jest-mock';

expect.extend(matchers);

describe("LoginInput component", () => {
    afterEach(() => {
        cleanup();
    });

    it("should handle email typing correctly", async () => {
        // arrange
        render(<LoginInput login={() => {}} />);
        const emailInput = await screen.getByTitle("email");

        // action
        await userEvent.type(emailInput, "emailtest");

        // assert
        expect(emailInput).toHaveValue("emailtest");
    });

    it("should handle password typing correctly", async () => {
        // arrange
        render(<LoginInput login={() => {}} />);
        const passwordInput = await screen.getByTitle("password");

        // action
        await userEvent.type(passwordInput, "passwordtest");

        //assert
        expect(passwordInput).toHaveValue("passwordtest");
    });

    it("should call login function when login button is clicked", async () => {
        // Arrange
        const mockLogin = jest.fn();
        render(<LoginInput login={mockLogin} />);
    
        // action
        const emailInput = screen.getByTitle("email");
        await userEvent.type(emailInput, "emailtest");
    
        const passwordInput = screen.getByTitle("password");
        await userEvent.type(passwordInput, "passwordtest");
    
        const loginButton = screen.getByRole("button", { name: "Sign In" });
        await userEvent.click(loginButton);
    
        // Assert
        expect(mockLogin).toBeCalledWith({
            email: "emailtest",
            password: "passwordtest",
        });
    });
});