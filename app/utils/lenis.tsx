"use client";

import { ReactLenis as Lenis } from "lenis/react";

export function ReactLenis({ root, children }: { root?: boolean; children: React.ReactNode }) {
  return (
    <Lenis root={root} options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </Lenis>
  );
}
