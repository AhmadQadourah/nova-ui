# 🧩 nova-ui

A lightweight and customizable React component library built with **Tailwind CSS** and ❤️. Perfect for rapid prototyping and clean UIs.

## 🚀 Installation

First, install `nova-ui` into your React + Tailwind project:

```bash
npm install nova-ui
```

If you're testing locally:

```bash
npm link
# in your project:
npm link nova-ui
```

---

## ⚙️ Setup

Make sure Tailwind is working in your project.

Then import the Tailwind file from nova-ui in your `main.tsx` or `index.tsx`:

```tsx
import "nova-ui/dist/tailwind.css";
```

---

## 🧱 Components

### 🔘 Button

```tsx
import { NButton } from "nova-ui";

<NButton accent="primary" size="lg">
  Click Me
</NButton>;
```

#### Props:

| Prop       | Type    | Default | Description                         |
| ---------- | ------- | ------- | ----------------------------------- |
| `accent`   | string  | primary | one of: primary, danger, success... |
| `size`     | string  | md      | sm / md / lg                        |
| `outline`  | boolean | false   | render button with outline style    |
| `disabled` | boolean | false   | disable button                      |

---

### ✏️ Input

```tsx
import { NInput } from "nova-ui";

<NInput label="Email" placeholder="you@example.com" error="Required field" />;
```

#### Props:

| Prop          | Type      | Default    | Description                     |
| ------------- | --------- | ---------- | ------------------------------- |
| `label`       | string    | -          | Top label                       |
| `placeholder` | string    | "Enter..." | Input placeholder               |
| `error`       | string    | -          | Error message shown under input |
| `icon`        | ReactNode | -          | Icon shown inside input         |
| `size`        | string    | md         | sm / md / lg                    |
| `variant`     | string    | outlined   | outlined / filled / underlined  |

---

### 💳 Card

```tsx
import { NCard } from "nova-ui";

<NCard title="Title" description="Short description">
  <div>Any children or content here</div>
</NCard>;
```

---

### ⏳ Loader

```tsx
import { Loader } from "nova-ui";

<Loader size="lg" color="success" center message="Loading data..." />;
```

---

### 🔍 NoResult

```tsx
import { NoResult } from "nova-ui";

<NoResult />;
```

---

## 🛠️ Contributing

To contribute or develop locally:

```bash
git clone git@github.com:AhmadQadourah/nova-ui.git
cd nova-ui
npm install
npm run dev
```

---

## 📄 License

MIT © Ahmad Qadourah
