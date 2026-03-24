import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

vi.mock("next/image", () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) =>
    React.createElement("img", props),
}));

vi.mock("@/lib/gsap", () => {
  const chain = {
    kill: vi.fn(),
  };

  return {
    gsap: {
      timeline: vi.fn(() => ({
        from: vi.fn().mockReturnThis(),
        fromTo: vi.fn().mockReturnThis(),
        to: vi.fn().mockReturnThis(),
      })),
      from: vi.fn(() => chain),
      fromTo: vi.fn(() => chain),
      to: vi.fn(() => chain),
      set: vi.fn(),
      registerPlugin: vi.fn(),
    },
    ScrollTrigger: {
      create: vi.fn(() => chain),
    },
    SplitText: vi.fn(),
    ScrollSmoother: {
      create: vi.fn(() => chain),
    },
    useGSAP: (callback: () => void) => {
      callback();
    },
  };
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
