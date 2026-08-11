import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import { describe, test, expect, vi, afterEach } from "vitest";
import "@testing-library/jest-dom";

describe("Navbar Component", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  // 1. Logout Test
  test("calls onLogout handler when Logout button is clicked", () => {
    const mockOnLogout = vi.fn();
    render(<Navbar onLogout={mockOnLogout} />);

    const logoutBtn = screen.getByRole("button", { name: /logout/i });
    fireEvent.click(logoutBtn);

    expect(mockOnLogout).toHaveBeenCalledTimes(1);
  });

  // 2. Click ALL Navigation Links (Executes every inline onClick function)
  test("handles smooth scrolling for all navigation links", () => {
    render(<Navbar onLogout={() => {}} />);

    const mockScrollIntoView = vi.fn();
    const fakeElement = { scrollIntoView: mockScrollIntoView };
    vi.spyOn(document, "getElementById").mockReturnValue(fakeElement);

    // Array of all link text labels in your Navbar
    const links = [
      "About",
      "Skills",
      "Experience",
      "Projects",
      "Certifications",
      "Education",
      "Contact",
    ];

    // Loop through each link and click it
    links.forEach((linkText) => {
      const linkElement = screen.getByText(linkText);
      fireEvent.click(linkElement);
    });

    // Verify that scrollIntoView was called 7 times (once for each link)
    expect(mockScrollIntoView).toHaveBeenCalledTimes(links.length);
  });

  // 3. Section Element Not Found Branch Test
  test("does nothing if the target section element is not found", () => {
    render(<Navbar onLogout={() => {}} />);

    vi.spyOn(document, "getElementById").mockReturnValue(null);

    const skillsLink = screen.getByText("Skills");
    expect(() => fireEvent.click(skillsLink)).not.toThrow();
  });
});