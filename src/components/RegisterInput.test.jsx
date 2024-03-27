/**
 * test scenario for RegisterInput
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from "react";
import { afterEach, describe, it, expect, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
import RegisterInput from "./RegisterInput";
import jest from 'jest-mock';

expect.extend(matchers);

describe("RegisterInput component", () => {
    afterEach(() => {
        cleanup();
    });

    it("should handle name typing correctly", async () => {
        // arrange
        render(<RegisterInput register={() => {}} />);
        const nameInput = await screen.getByTitle("name");

        // action
        await userEvent.type(nameInput, "nametest");

        // assert
        expect(nameInput).toHaveValue("nametest");
    });

    it("should handle email typing correctly", async () => {
        // arrange
        render(<RegisterInput register={() => {}} />);
        const emailInput = await screen.getByTitle("email");

        // action
        await userEvent.type(emailInput, "emailtest");

        // assert
        expect(emailInput).toHaveValue("emailtest");
    });

    it("should handle password typing correctly", async () => {
        // arrange
        render(<RegisterInput register={() => {}} />);
        const passwordInput = await screen.getByTitle("password");

        // action
        await userEvent.type(passwordInput, "passwordtest");

        //assert
        expect(passwordInput).toHaveValue("passwordtest");
    });

    it("should call register function when register button is clicked", async () => {
        // Arrange
        const mockRegister = jest.fn();
        render(<RegisterInput register={mockRegister} />);
        
        // Act
        const nameInput = screen.getByTitle("name");
        await userEvent.type(nameInput, "nametest");
    
        const emailInput = screen.getByTitle("email");
        await userEvent.type(emailInput, "emailtest");
    
        const passwordInput = screen.getByTitle("password");
        await userEvent.type(passwordInput, "passwordtest");
    
        const registerButton = screen.getByRole("button", { name: "Sign Up" });
        await userEvent.click(registerButton);
        
        // Assert
        expect(mockRegister).toBeCalledWith({
            name: "nametest",
            email: "emailtest",
            password: "passwordtest",
        });
    });
});