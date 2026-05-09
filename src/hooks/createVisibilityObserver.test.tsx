import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@solidjs/testing-library";
import { createVisibilityObserver } from "~/hooks/createVisibilityObserver";

describe("createVisibilityObserver", () => {
  let observeMock: ReturnType<typeof vi.fn>;
  let disconnectMock: ReturnType<typeof vi.fn>;
  let observerCallback: ((entries: IntersectionObserverEntry[]) => void) | null;

  beforeEach(() => {
    observeMock = vi.fn();
    disconnectMock = vi.fn();
    observerCallback = null;

    vi.stubGlobal(
      "IntersectionObserver",
      vi.fn(function(callback: (entries: IntersectionObserverEntry[]) => void) {
        observerCallback = callback;
        return {
          observe: observeMock,
          disconnect: disconnectMock,
          unobserve: vi.fn(),
          takeRecords: vi.fn(() => []),
          root: null,
          rootMargin: "",
          thresholds: [],
        };
      }),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  function Tester(props: { threshold?: number }) {
    let ref!: HTMLDivElement;
    // eslint-disable-next-line solid/reactivity
    const isVisible = createVisibilityObserver(() => ref, props.threshold);
    return <div ref={ref!} data-testid="el" data-visible={isVisible()} />;
  }

  it("creates IntersectionObserver with given threshold", () => {
    render(() => <Tester threshold={0.3} />);

    expect(IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      { threshold: 0.3 },
    );
  });

  it("defaults threshold to 0.1 when not provided", () => {
    render(() => <Tester />);

    expect(IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      { threshold: 0.1 },
    );
  });

  it("sets isVisible to true when element intersects", () => {
    const { queryByTestId } = render(() => <Tester threshold={0.3} />);

    const el = queryByTestId("el");
    expect(el).toBeTruthy();

    observerCallback?.([
      { isIntersecting: true } as IntersectionObserverEntry,
    ]);

    expect(el?.getAttribute("data-visible")).toBe("true");
  });

  it("starts with isVisible as false", () => {
    const { queryByTestId } = render(() => <Tester />);

    const el = queryByTestId("el");
    expect(el?.getAttribute("data-visible")).toBe("false");
  });

  it("does not create observer for undefined element", () => {
    function TesterNoRef() {
      createVisibilityObserver(() => undefined, 0.5);
      return <div />;
    }
    render(() => <TesterNoRef />);
    expect(IntersectionObserver).not.toHaveBeenCalled();
  });

  it("disconnects on cleanup", () => {
    const { unmount } = render(() => <Tester />);
    expect(disconnectMock).not.toHaveBeenCalled();
    unmount();
    expect(disconnectMock).toHaveBeenCalledOnce();
  });
});
