// Vitest setup — runs before each test file
// jsdom environment; localStorage mock is built-in

// SolidJS dev build expects global React for devtools
(globalThis as Record<string, unknown>).React = {};
