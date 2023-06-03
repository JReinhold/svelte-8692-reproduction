import "./app.css";
import App from "./App.svelte";

import type { ComponentType as InternalComponentType } from "svelte/types/runtime/internal";
import type { ComponentType } from "svelte";

type MyInternalType = InternalComponentType;
type MyExportedType = ComponentType;

const app = new App({
	target: document.getElementById("app"),
});

export default app;
