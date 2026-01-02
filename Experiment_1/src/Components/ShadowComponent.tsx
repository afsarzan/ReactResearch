import { useRef, useLayoutEffect, useState } from 'react';

export default function ShadowComponent() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);

  useLayoutEffect(() => {
    if (hostRef.current && !hostRef.current.shadowRoot) {
      // Create the shadow root once
      const root = hostRef.current.attachShadow({ mode: 'open' });
      setShadowRoot(root);
    }
  }, []);

  useLayoutEffect(() => {
    if (shadowRoot) {
      shadowRoot.innerHTML = `
        <style>
          h1 { color: yellowgreen; }
          p { font-style: italic; }
        </style>
        <h1>Inside Shadow DOM</h1>
        <p>Global CSS cannot touch this color!</p>
      `;
    }
  }, [shadowRoot]);

  return (
    <div ref={hostRef}>
      {/* Shadow root content is set via innerHTML in useLayoutEffect */}
    </div>
  );
}