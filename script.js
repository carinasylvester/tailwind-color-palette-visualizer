const tailwindColors = [
	{
		name: "Red",
		shades: [
			{ weight: 50, hex: "#fef2f2" },
			{ weight: 100, hex: "#fee2e2" },
			{ weight: 200, hex: "#fecaca" },
			{ weight: 300, hex: "#fca5a5" },
			{ weight: 400, hex: "#f87171" },
			{ weight: 500, hex: "#ef4444" },
			{ weight: 600, hex: "#dc2626" },
			{ weight: 700, hex: "#b91c1c" },
			{ weight: 800, hex: "#991b1b" },
			{ weight: 900, hex: "#7f1d1d" },
			{ weight: 950, hex: "#450a0a" },
		],
	},
	{
		name: "Orange",
		shades: [
			{ weight: 50, hex: "#fff7ed" },
			{ weight: 100, hex: "#ffedd5" },
			{ weight: 200, hex: "#fed7aa" },
			{ weight: 300, hex: "#fdba74" },
			{ weight: 400, hex: "#fb923c" },
			{ weight: 500, hex: "#f97316" },
			{ weight: 600, hex: "#ea580c" },
			{ weight: 700, hex: "#c2410c" },
			{ weight: 800, hex: "#9a3412" },
			{ weight: 900, hex: "#7c2d12" },
			{ weight: 950, hex: "#431407" },
		],
	},
	{
		name: "Amber",
		shades: [
			{ weight: 50, hex: "#fffbeb" },
			{ weight: 100, hex: "#fef3c7" },
			{ weight: 200, hex: "#fde68a" },
			{ weight: 300, hex: "#fcd34d" },
			{ weight: 400, hex: "#fbbf24" },
			{ weight: 500, hex: "#f59e0b" },
			{ weight: 600, hex: "#d97706" },
			{ weight: 700, hex: "#b45309" },
			{ weight: 800, hex: "#92400e" },
			{ weight: 900, hex: "#78350f" },
			{ weight: 950, hex: "#451a03" },
		],
	},
	{
		name: "Yellow",
		shades: [
			{ weight: 50, hex: "#fefce8" },
			{ weight: 100, hex: "#fef9c3" },
			{ weight: 200, hex: "#fef08a" },
			{ weight: 300, hex: "#fde047" },
			{ weight: 400, hex: "#facc15" },
			{ weight: 500, hex: "#eab308" },
			{ weight: 600, hex: "#ca8a04" },
			{ weight: 700, hex: "#a16207" },
			{ weight: 800, hex: "#854d0e" },
			{ weight: 900, hex: "#713f12" },
			{ weight: 950, hex: "#422006" },
		],
	},
	{
		name: "Lime",
		shades: [
			{ weight: 50, hex: "#f7fee7" },
			{ weight: 100, hex: "#ecfccb" },
			{ weight: 200, hex: "#d9f99d" },
			{ weight: 300, hex: "#bef264" },
			{ weight: 400, hex: "#a3e635" },
			{ weight: 500, hex: "#84cc16" },
			{ weight: 600, hex: "#65a30d" },
			{ weight: 700, hex: "#4d7c0f" },
			{ weight: 800, hex: "#3f6212" },
			{ weight: 900, hex: "#365314" },
			{ weight: 950, hex: "#1a2e05" },
		],
	},
	{
		name: "Green",
		shades: [
			{ weight: 50, hex: "#f0fdf4" },
			{ weight: 100, hex: "#dcfce7" },
			{ weight: 200, hex: "#bbf7d0" },
			{ weight: 300, hex: "#86efac" },
			{ weight: 400, hex: "#4ade80" },
			{ weight: 500, hex: "#22c55e" },
			{ weight: 600, hex: "#16a34a" },
			{ weight: 700, hex: "#15803d" },
			{ weight: 800, hex: "#166534" },
			{ weight: 900, hex: "#14532d" },
			{ weight: 950, hex: "#052e16" },
		],
	},
	{
		name: "Emerald",
		shades: [
			{ weight: 50, hex: "#ecfdf5" },
			{ weight: 100, hex: "#d1fae5" },
			{ weight: 200, hex: "#a7f3d0" },
			{ weight: 300, hex: "#6ee7b7" },
			{ weight: 400, hex: "#34d399" },
			{ weight: 500, hex: "#10b981" },
			{ weight: 600, hex: "#059669" },
			{ weight: 700, hex: "#047857" },
			{ weight: 800, hex: "#065f46" },
			{ weight: 900, hex: "#064e3b" },
			{ weight: 950, hex: "#022c22" },
		],
	},
	{
		name: "Teal",
		shades: [
			{ weight: 50, hex: "#f0fdfa" },
			{ weight: 100, hex: "#ccfbf1" },
			{ weight: 200, hex: "#99f6e4" },
			{ weight: 300, hex: "#5eead4" },
			{ weight: 400, hex: "#2dd4bf" },
			{ weight: 500, hex: "#14b8a6" },
			{ weight: 600, hex: "#0d9488" },
			{ weight: 700, hex: "#0f766e" },
			{ weight: 800, hex: "#115e59" },
			{ weight: 900, hex: "#134e4a" },
			{ weight: 950, hex: "#042f2e" },
		],
	},
	{
		name: "Cyan",
		shades: [
			{ weight: 50, hex: "#ecfeff" },
			{ weight: 100, hex: "#cffafe" },
			{ weight: 200, hex: "#a5f3fc" },
			{ weight: 300, hex: "#67e8f9" },
			{ weight: 400, hex: "#22d3ee" },
			{ weight: 500, hex: "#06b6d4" },
			{ weight: 600, hex: "#0891b2" },
			{ weight: 700, hex: "#0e7490" },
			{ weight: 800, hex: "#155e75" },
			{ weight: 900, hex: "#164e63" },
			{ weight: 950, hex: "#083344" },
		],
	},
	{
		name: "Sky",
		shades: [
			{ weight: 50, hex: "#f0f9ff" },
			{ weight: 100, hex: "#e0f2fe" },
			{ weight: 200, hex: "#bae6fd" },
			{ weight: 300, hex: "#7dd3fc" },
			{ weight: 400, hex: "#38bdf8" },
			{ weight: 500, hex: "#0ea5e9" },
			{ weight: 600, hex: "#0284c7" },
			{ weight: 700, hex: "#0369a1" },
			{ weight: 800, hex: "#075985" },
			{ weight: 900, hex: "#0c4a6e" },
			{ weight: 950, hex: "#082f49" },
		],
	},
	{
		name: "Blue",
		shades: [
			{ weight: 50, hex: "#eff6ff" },
			{ weight: 100, hex: "#dbeafe" },
			{ weight: 200, hex: "#bfdbfe" },
			{ weight: 300, hex: "#93c5fd" },
			{ weight: 400, hex: "#60a5fa" },
			{ weight: 500, hex: "#3b82f6" },
			{ weight: 600, hex: "#2563eb" },
			{ weight: 700, hex: "#1d4ed8" },
			{ weight: 800, hex: "#1e40af" },
			{ weight: 900, hex: "#1e3a8a" },
			{ weight: 950, hex: "#172554" },
		],
	},
	{
		name: "Indigo",
		shades: [
			{ weight: 50, hex: "#eef2ff" },
			{ weight: 100, hex: "#e0e7ff" },
			{ weight: 200, hex: "#c7d2fe" },
			{ weight: 300, hex: "#a5b4fc" },
			{ weight: 400, hex: "#818cf8" },
			{ weight: 500, hex: "#6366f1" },
			{ weight: 600, hex: "#4f46e5" },
			{ weight: 700, hex: "#4338ca" },
			{ weight: 800, hex: "#3730a3" },
			{ weight: 900, hex: "#312e81" },
			{ weight: 950, hex: "#1e1b4b" },
		],
	},
	{
		name: "Violet",
		shades: [
			{ weight: 50, hex: "#f5f3ff" },
			{ weight: 100, hex: "#ede9fe" },
			{ weight: 200, hex: "#ddd6fe" },
			{ weight: 300, hex: "#c4b5fd" },
			{ weight: 400, hex: "#a78bfa" },
			{ weight: 500, hex: "#8b5cf6" },
			{ weight: 600, hex: "#7c3aed" },
			{ weight: 700, hex: "#6d28d9" },
			{ weight: 800, hex: "#5b21b6" },
			{ weight: 900, hex: "#4c1d95" },
			{ weight: 950, hex: "#2e1065" },
		],
	},
	{
		name: "Purple",
		shades: [
			{ weight: 50, hex: "#faf5ff" },
			{ weight: 100, hex: "#f3e8ff" },
			{ weight: 200, hex: "#e9d5ff" },
			{ weight: 300, hex: "#d8b4fe" },
			{ weight: 400, hex: "#c084fc" },
			{ weight: 500, hex: "#a855f7" },
			{ weight: 600, hex: "#9333ea" },
			{ weight: 700, hex: "#7e22ce" },
			{ weight: 800, hex: "#6b21a8" },
			{ weight: 900, hex: "#581c87" },
			{ weight: 950, hex: "#3b0764" },
		],
	},
	{
		name: "Fuchsia",
		shades: [
			{ weight: 50, hex: "#fdf4ff" },
			{ weight: 100, hex: "#fae8ff" },
			{ weight: 200, hex: "#f5d0fe" },
			{ weight: 300, hex: "#f0abfc" },
			{ weight: 400, hex: "#e879f9" },
			{ weight: 500, hex: "#d946ef" },
			{ weight: 600, hex: "#c026d3" },
			{ weight: 700, hex: "#a21caf" },
			{ weight: 800, hex: "#86198f" },
			{ weight: 900, hex: "#701a75" },
			{ weight: 950, hex: "#4a044e" },
		],
	},
	{
		name: "Pink",
		shades: [
			{ weight: 50, hex: "#fdf2f8" },
			{ weight: 100, hex: "#fce7f3" },
			{ weight: 200, hex: "#fbcfe8" },
			{ weight: 300, hex: "#f9a8d4" },
			{ weight: 400, hex: "#f472b6" },
			{ weight: 500, hex: "#ec4899" },
			{ weight: 600, hex: "#db2777" },
			{ weight: 700, hex: "#be185d" },
			{ weight: 800, hex: "#9d174d" },
			{ weight: 900, hex: "#831843" },
			{ weight: 950, hex: "#500724" },
		],
	},
	{
		name: "Rose",
		shades: [
			{ weight: 50, hex: "#fef2f2" },
			{ weight: 100, hex: "#fee2e2" },
			{ weight: 200, hex: "#fecaca" },
			{ weight: 300, hex: "#fca5a5" },
			{ weight: 400, hex: "#f87171" },
			{ weight: 500, hex: "#ef4444" },
			{ weight: 600, hex: "#dc2626" },
			{ weight: 700, hex: "#b91c1c" },
			{ weight: 800, hex: "#991b1b" },
			{ weight: 900, hex: "#7f1d1d" },
			{ weight: 950, hex: "#450a0a" },
		],
	},
	{
		name: "Orange",
		shades: [
			{ weight: 50, hex: "#fff7ed" },
			{ weight: 100, hex: "#ffedd5" },
			{ weight: 200, hex: "#fed7aa" },
			{ weight: 300, hex: "#fdba74" },
			{ weight: 400, hex: "#fb923c" },
			{ weight: 500, hex: "#f97316" },
			{ weight: 600, hex: "#ea580c" },
			{ weight: 700, hex: "#c2410c" },
			{ weight: 800, hex: "#9a3412" },
			{ weight: 900, hex: "#7c2d12" },
			{ weight: 950, hex: "#431407" },
		],
	},
	{
		name: "Amber",
		shades: [
			{ weight: 50, hex: "#fffbeb" },
			{ weight: 100, hex: "#fef3c7" },
			{ weight: 200, hex: "#fde68a" },
			{ weight: 300, hex: "#fcd34d" },
			{ weight: 400, hex: "#fbbf24" },
			{ weight: 500, hex: "#f59e0b" },
			{ weight: 600, hex: "#d97706" },
			{ weight: 700, hex: "#b45309" },
			{ weight: 800, hex: "#92400e" },
			{ weight: 900, hex: "#78350f" },
			{ weight: 950, hex: "#451a03" },
		],
	},
	{
		name: "Yellow",
		shades: [
			{ weight: 50, hex: "#fefce8" },
			{ weight: 100, hex: "#fef9c3" },
			{ weight: 200, hex: "#fef08a" },
			{ weight: 300, hex: "#fde047" },
			{ weight: 400, hex: "#facc15" },
			{ weight: 500, hex: "#eab308" },
			{ weight: 600, hex: "#ca8a04" },
			{ weight: 700, hex: "#a16207" },
			{ weight: 800, hex: "#854d0e" },
			{ weight: 900, hex: "#713f12" },
			{ weight: 950, hex: "#422006" },
		],
	},
	{
		name: "Lime",
		shades: [
			{ weight: 50, hex: "#f7fee7" },
			{ weight: 100, hex: "#ecfccb" },
			{ weight: 200, hex: "#d9f99d" },
			{ weight: 300, hex: "#bef264" },
			{ weight: 400, hex: "#a3e635" },
			{ weight: 500, hex: "#84cc16" },
			{ weight: 600, hex: "#65a30d" },
			{ weight: 700, hex: "#4d7c0f" },
			{ weight: 800, hex: "#3f6212" },
			{ weight: 900, hex: "#365314" },
			{ weight: 950, hex: "#1a2e05" },
		],
	},
	{
		name: "Green",
		shades: [
			{ weight: 50, hex: "#f0fdf4" },
			{ weight: 100, hex: "#dcfce7" },
			{ weight: 200, hex: "#bbf7d0" },
			{ weight: 300, hex: "#86efac" },
			{ weight: 400, hex: "#4ade80" },
			{ weight: 500, hex: "#22c55e" },
			{ weight: 600, hex: "#16a34a" },
			{ weight: 700, hex: "#15803d" },
			{ weight: 800, hex: "#166534" },
			{ weight: 900, hex: "#14532d" },
			{ weight: 950, hex: "#052e16" },
		],
	},
	{
		name: "Emerald",
		shades: [
			{ weight: 50, hex: "#ecfdf5" },
			{ weight: 100, hex: "#d1fae5" },
			{ weight: 200, hex: "#a7f3d0" },
			{ weight: 300, hex: "#6ee7b7" },
			{ weight: 400, hex: "#34d399" },
			{ weight: 500, hex: "#10b981" },
			{ weight: 600, hex: "#059669" },
			{ weight: 700, hex: "#047857" },
			{ weight: 800, hex: "#065f46" },
			{ weight: 900, hex: "#064e3b" },
			{ weight: 950, hex: "#022c22" },
		],
	},
	{
		name: "Teal",
		shades: [
			{ weight: 50, hex: "#f0fdfa" },
			{ weight: 100, hex: "#ccfbf1" },
			{ weight: 200, hex: "#99f6e4" },
			{ weight: 300, hex: "#5eead4" },
			{ weight: 400, hex: "#2dd4bf" },
			{ weight: 500, hex: "#14b8a6" },
			{ weight: 600, hex: "#0d9488" },
			{ weight: 700, hex: "#0f766e" },
			{ weight: 800, hex: "#115e59" },
			{ weight: 900, hex: "#134e4a" },
			{ weight: 950, hex: "#042f2e" },
		],
	},
	{
		name: "Cyan",
		shades: [
			{ weight: 50, hex: "#ecfeff" },
			{ weight: 100, hex: "#cffafe" },
			{ weight: 200, hex: "#a5f3fc" },
			{ weight: 300, hex: "#67e8f9" },
			{ weight: 400, hex: "#22d3ee" },
			{ weight: 500, hex: "#06b6d4" },
			{ weight: 600, hex: "#0891b2" },
			{ weight: 700, hex: "#0e7490" },
			{ weight: 800, hex: "#155e75" },
			{ weight: 900, hex: "#164e63" },
			{ weight: 950, hex: "#083344" },
		],
	},
	{
		name: "Sky",
		shades: [
			{ weight: 50, hex: "#f0f9ff" },
			{ weight: 100, hex: "#e0f2fe" },
			{ weight: 200, hex: "#bae6fd" },
			{ weight: 300, hex: "#7dd3fc" },
			{ weight: 400, hex: "#38bdf8" },
			{ weight: 500, hex: "#0ea5e9" },
			{ weight: 600, hex: "#0284c7" },
			{ weight: 700, hex: "#0369a1" },
			{ weight: 800, hex: "#075985" },
			{ weight: 900, hex: "#0c4a6e" },
			{ weight: 950, hex: "#082f49" },
		],
	},
	{
		name: "Blue",
		shades: [
			{ weight: 50, hex: "#eff6ff" },
			{ weight: 100, hex: "#dbeafe" },
			{ weight: 200, hex: "#bfdbfe" },
			{ weight: 300, hex: "#93c5fd" },
			{ weight: 400, hex: "#60a5fa" },
			{ weight: 500, hex: "#3b82f6" },
			{ weight: 600, hex: "#2563eb" },
			{ weight: 700, hex: "#1d4ed8" },
			{ weight: 800, hex: "#1e40af" },
			{ weight: 900, hex: "#1e3a8a" },
			{ weight: 950, hex: "#172554" },
		],
	},
	{
		name: "Indigo",
		shades: [
			{ weight: 50, hex: "#eef2ff" },
			{ weight: 100, hex: "#e0e7ff" },
			{ weight: 200, hex: "#c7d2fe" },
			{ weight: 300, hex: "#a5b4fc" },
			{ weight: 400, hex: "#818cf8" },
			{ weight: 500, hex: "#6366f1" },
			{ weight: 600, hex: "#4f46e5" },
			{ weight: 700, hex: "#4338ca" },
			{ weight: 800, hex: "#3730a3" },
			{ weight: 900, hex: "#312e81" },
			{ weight: 950, hex: "#1e1b4b" },
		],
	},
	{
		name: "Violet",
		shades: [
			{ weight: 50, hex: "#f5f3ff" },
			{ weight: 100, hex: "#ede9fe" },
			{ weight: 200, hex: "#ddd6fe" },
			{ weight: 300, hex: "#c4b5fd" },
			{ weight: 400, hex: "#a78bfa" },
			{ weight: 500, hex: "#8b5cf6" },
			{ weight: 600, hex: "#7c3aed" },
			{ weight: 700, hex: "#6d28d9" },
			{ weight: 800, hex: "#5b21b6" },
			{ weight: 900, hex: "#4c1d95" },
			{ weight: 950, hex: "#2e1065" },
		],
	},
	{
		name: "Purple",
		shades: [
			{ weight: 50, hex: "#faf5ff" },
			{ weight: 100, hex: "#f3e8ff" },
			{ weight: 200, hex: "#e9d5ff" },
			{ weight: 300, hex: "#d8b4fe" },
			{ weight: 400, hex: "#c084fc" },
			{ weight: 500, hex: "#a855f7" },
			{ weight: 600, hex: "#9333ea" },
			{ weight: 700, hex: "#7e22ce" },
			{ weight: 800, hex: "#6b21a8" },
			{ weight: 900, hex: "#581c87" },
			{ weight: 950, hex: "#3b0764" },
		],
	},
	{
		name: "Fuchsia",
		shades: [
			{ weight: 50, hex: "#fdf4ff" },
			{ weight: 100, hex: "#fae8ff" },
			{ weight: 200, hex: "#f5d0fe" },
			{ weight: 300, hex: "#f0abfc" },
			{ weight: 400, hex: "#e879f9" },
			{ weight: 500, hex: "#d946ef" },
			{ weight: 600, hex: "#c026d3" },
			{ weight: 700, hex: "#a21caf" },
			{ weight: 800, hex: "#86198f" },
			{ weight: 900, hex: "#701a75" },
			{ weight: 950, hex: "#4a044e" },
		],
	},
	{
		name: "Pink",
		shades: [
			{ weight: 50, hex: "#fdf2f8" },
			{ weight: 100, hex: "#fce7f3" },
			{ weight: 200, hex: "#fbcfe8" },
			{ weight: 300, hex: "#f9a8d4" },
			{ weight: 400, hex: "#f472b6" },
			{ weight: 500, hex: "#ec4899" },
			{ weight: 600, hex: "#db2777" },
			{ weight: 700, hex: "#be185d" },
			{ weight: 800, hex: "#9d174d" },
			{ weight: 900, hex: "#831843" },
			{ weight: 950, hex: "#500724" },
		],
	},
	{
		name: "Rose",
		shades: [
			{ weight: 50, hex: "#fff1f2" },
			{ weight: 100, hex: "#ffe4e6" },
			{ weight: 200, hex: "#fecdd3" },
			{ weight: 300, hex: "#fda4af" },
			{ weight: 400, hex: "#fb7185" },
			{ weight: 500, hex: "#f43f5e" },
			{ weight: 600, hex: "#e11d48" },
			{ weight: 700, hex: "#be123c" },
			{ weight: 800, hex: "#9f1239" },
			{ weight: 900, hex: "#881337" },
			{ weight: 950, hex: "#4c0519" },
		],
	},
	{
		name: "Slate",
		shades: [
			{ weight: 50, hex: "#f8fafc" },
			{ weight: 100, hex: "#f1f5f9" },
			{ weight: 200, hex: "#e2e8f0" },
			{ weight: 300, hex: "#cbd5e1" },
			{ weight: 400, hex: "#94a3b8" },
			{ weight: 500, hex: "#64748b" },
			{ weight: 600, hex: "#475569" },
			{ weight: 700, hex: "#334155" },
			{ weight: 800, hex: "#1e293b" },
			{ weight: 900, hex: "#0f172a" },
			{ weight: 950, hex: "#020617" },
		],
	},
	{
		name: "Gray",
		shades: [
			{ weight: 50, hex: "#f9fafb" },
			{ weight: 100, hex: "#f3f4f6" },
			{ weight: 200, hex: "#e5e7eb" },
			{ weight: 300, hex: "#d1d5db" },
			{ weight: 400, hex: "#9ca3af" },
			{ weight: 500, hex: "#6b7280" },
			{ weight: 600, hex: "#4b5563" },
			{ weight: 700, hex: "#374151" },
			{ weight: 800, hex: "#1f2937" },
			{ weight: 900, hex: "#111827" },
			{ weight: 950, hex: "#030712" },
		],
	},
	{
		name: "Zinc",
		shades: [
			{ weight: 50, hex: "#fafafa" },
			{ weight: 100, hex: "#f4f4f5" },
			{ weight: 200, hex: "#e4e4e7" },
			{ weight: 300, hex: "#d4d4d8" },
			{ weight: 400, hex: "#a1a1aa" },
			{ weight: 500, hex: "#71717a" },
			{ weight: 600, hex: "#52525b" },
			{ weight: 700, hex: "#3f3f46" },
			{ weight: 800, hex: "#27272a" },
			{ weight: 900, hex: "#18181b" },
			{ weight: 950, hex: "#09090b" },
		],
	},
	{
		name: "Neutral",
		shades: [
			{ weight: 50, hex: "#fafafa" },
			{ weight: 100, hex: "#f5f5f5" },
			{ weight: 200, hex: "#e5e5e5" },
			{ weight: 300, hex: "#d4d4d4" },
			{ weight: 400, hex: "#a3a3a3" },
			{ weight: 500, hex: "#737373" },
			{ weight: 600, hex: "#525252" },
			{ weight: 700, hex: "#404040" },
			{ weight: 800, hex: "#262626" },
			{ weight: 900, hex: "#171717" },
			{ weight: 950, hex: "#0a0a0a" },
		],
	},
	{
		name: "Stone",
		shades: [
			{ weight: 50, hex: "#fafaf9" },
			{ weight: 100, hex: "#f5f5f4" },
			{ weight: 200, hex: "#e7e5e4" },
			{ weight: 300, hex: "#d6d3d1" },
			{ weight: 400, hex: "#a8a29e" },
			{ weight: 500, hex: "#78716c" },
			{ weight: 600, hex: "#57534e" },
			{ weight: 700, hex: "#44403c" },
			{ weight: 800, hex: "#292524" },
			{ weight: 900, hex: "#1c1917" },
			{ weight: 950, hex: "#0c0a09" },
		],
	},
];

let currentColor = tailwindColors[0].name;
let copiedTimeout;

function init() {
	renderColorSelector();
	renderPalettes();
}

function renderColorSelector() {
	const selector = document.getElementById("colorSelector");
	tailwindColors.forEach((color, idx) => {
		const li = document.createElement("li");
		const input = document.createElement("input");
		const label = document.createElement("label");
		const circle = document.createElement("span");
		const ring = document.createElement("span");

		input.type = "radio";
		input.name = "color";
		input.id = `color-${idx}`;
		input.value = color.name;
		input.checked = idx === 0;
		input.addEventListener("change", () => selectColor(color.name));

		label.htmlFor = `color-${idx}`;
		label.title = color.name;

		circle.className = "color-circle";
		circle.style.color = color.shades[5].hex;

		ring.className = "color-ring";

		circle.appendChild(ring);
		label.appendChild(circle);
		li.appendChild(input);
		li.appendChild(label);
		selector.appendChild(li);
	});
}

function renderPalettes() {
	const container = document.getElementById("paletteContainer");
	tailwindColors.forEach((color) => {
		const wrapper = document.createElement("div");
		wrapper.className = "palette-wrapper";
		if (color.name === currentColor) {
			wrapper.classList.add("active");
		}
		wrapper.dataset.color = color.name;

		const header = document.createElement("h2");
		header.className = "palette-header";
		header.textContent = color.name;

		const palette = document.createElement("ul");
		palette.className = "palette";

		color.shades.forEach((shade) => {
			const li = document.createElement("li");
			li.className = "palette-item";
			li.style.backgroundColor = shade.hex;
			li.dataset.hex = shade.hex;

			const textColor = getContrastColor(shade.hex);
			li.style.color = textColor;

			const weight = document.createElement("span");
			weight.className = "weight";
			weight.textContent = shade.weight;
			weight.addEventListener("click", (e) => {
				e.stopPropagation();
				const tailwindClass = `${color.name.toLowerCase().replace(" ", "-")}-${
					shade.weight
				}`;
				copyToClipboard(tailwindClass, copied);
			});

			const hex = document.createElement("span");
			hex.className = "hex";
			hex.textContent = shade.hex;
			hex.addEventListener("click", (e) => {
				e.stopPropagation();
				copyToClipboard(shade.hex, copied);
			});

			const copied = document.createElement("span");
			copied.className = "copied-indicator";
			copied.textContent = "Copied!";

			li.appendChild(weight);
			li.appendChild(hex);
			li.appendChild(copied);
			palette.appendChild(li);
		});

		wrapper.appendChild(header);
		wrapper.appendChild(palette);
		container.appendChild(wrapper);
	});
}

function selectColor(colorName) {
	currentColor = colorName;
	document.querySelectorAll(".palette-wrapper").forEach((wrapper) => {
		wrapper.classList.toggle("active", wrapper.dataset.color === colorName);
	});
}

function copyToClipboard(text, indicator) {
	navigator.clipboard.writeText(text).then(() => {
		clearTimeout(copiedTimeout);
		document
			.querySelectorAll(".copied-indicator")
			.forEach((el) => el.classList.remove("show"));
		indicator.classList.add("show");
		copiedTimeout = setTimeout(() => {
			indicator.classList.remove("show");
		}, 2000);
	});
}

function getContrastColor(hex) {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);
	const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
	return luminance > 0.5 ? "#000000" : "#ffffff";
}

init();
