import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";
import { describe, test, expect } from "vitest"; // Added expect import
import "@testing-library/jest-dom";

const renderLogin = () => {
  return render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
  );
};

describe("Login Component", () => {
  test("renders username and password input fields", () => {
    renderLogin();

    // Changed getAllBy... to getBy... so it returns a single element
    const usernameInput = screen.getByPlaceholderText(/enter username/i);
    const passwordInput = screen.getByPlaceholderText(/enter password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test("shows success message on valid credentials", () => {
    renderLogin();

    // Select elements
    const usernameInput = screen.getByPlaceholderText(/enter username/i);
    const passwordInput = screen.getByPlaceholderText(/enter password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    // Simulate user typing
    fireEvent.change(usernameInput, { target: { value: "tejas" } });
    fireEvent.change(passwordInput, { target: { value: "9809" } });

    // Simulate clicking the Login button
    fireEvent.click(loginButton);

    // Verify success message appears
    const successMsg = screen.getByText(/login successful/i);
    expect(successMsg).toBeInTheDocument();
  });

  test("shows error message on invalid credentials", () => {
    renderLogin();

    const usernameInput = screen.getByPlaceholderText(/enter username/i);
    const passwordInput = screen.getByPlaceholderText(/enter password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    // Type WRONG password
    fireEvent.change(usernameInput, { target: { value: "tejas" } });
    fireEvent.change(passwordInput, { target: { value: "wrongpassword" } });

    fireEvent.click(loginButton);

    // Verify error message appears
    const errorMsg = screen.getByText(/invalid username and password/i);
    expect(errorMsg).toBeInTheDocument();
  });

  test("shows password alert when a valid username is provided", () => {
    vi.spyOn(window, "prompt").mockReturnValue("tejas");
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    renderLogin();

    // Make sure the text matches what is rendered in your Login.jsx UI
    const forgotPasswordBtn = screen.getByText(/forgot password/i);
    fireEvent.click(forgotPasswordBtn);

    expect(window.prompt).toHaveBeenCalledWith(
      "Please enter your username to recover password:",
    );
    expect(alertSpy).toHaveBeenCalledWith("Your password is: 9809");
  });

  test("shows error alert when username is not found", () => {
    vi.spyOn(window, "prompt").mockReturnValue("unknown_user");
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    renderLogin();

    const forgotPasswordBtn = screen.getByText(/forgot password/i);
    fireEvent.click(forgotPasswordBtn);

    expect(alertSpy).toHaveBeenCalledWith("Username not found!");
  });
});
