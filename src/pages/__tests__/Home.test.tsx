import { render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Home from "../";
import { trpc } from "../../utils/trpc";

describe("Home", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });
  it("renders homepage", () => {
    const expectedText = "Hello from tRPC";

    vi.spyOn(trpc, "useQuery").mockReturnValue({
      data: expectedText,
      error: null,
      isError: false,
      isIdle: false,
      isLoading: false,
      isLoadingError: false,
      isRefetchError: false,
      isSuccess: true,
      status: "success",
      dataUpdatedAt: 0,
      errorUpdatedAt: 0,
      failureCount: 0,
      errorUpdateCount: 0,
      isFetched: false,
      isFetchedAfterMount: false,
      isFetching: false,
      isPlaceholderData: false,
      isPreviousData: false,
      isRefetching: false,
      isStale: false,
      refetch: vi.fn(),
      remove: vi.fn(),
    });
    render(<Home />);
    const trpcText = screen.getByText(expectedText);

    expect(trpcText).toBeDefined();
  });
});
