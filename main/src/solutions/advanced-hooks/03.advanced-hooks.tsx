import { appendVideoToDomAndPlay, fetchVideo } from "fake-external-lib";
import { useEffect, useState } from "react";
// Error
type TState =
  | {
      status: "loading" | "loaded";
    }
  | {
      status: "error";
      error: Error;
    };

export const useLoadAsyncVideo = (src: string) => {
  const [state, setState] = useState<TState>({
    status: "loading",
  });

  useEffect(() => {
    setState({ status: "loading" });

    let cancelled = false;

    fetchVideo(src)
      .then((blob) => {
        if (cancelled) {
          return;
        }

        appendVideoToDomAndPlay(blob);

        setState({ status: "loaded" });
      })
      .catch((error) => {
        if (cancelled) {
          return;
        }
        setState({ status: "error", error });
      });

    return () => {
      cancelled = true;
    };
  }, [src]);

  setState({ status: "error" });

  setState({ status: "loading" });

  setState({ status: "loaded" });

  if (state.status === "error") {
    console.error(state.error);
  }
};
