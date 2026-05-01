Act as an expert Frontend Developer. I am building a portfolio based on "hachahbo.com". I have already provided the exact design system, colors, and custom utilities in the `app/globals.css` file using Tailwind v4 and oklch colors.

Please initialize a Next.js (App Router) project with Shadcn UI, Framer Motion, and Lucide React. 

Using the custom classes already in my globals.css (like `.bg-grid`, `.neon-glow`, `.gradient-text`, and `.gradient-border`), build the following single-page portfolio:

1. Hero Section:
- Apply the `.bg-grid` to the background.
- Use `.gradient-text` for my name/title.
- Add two buttons (use Shadcn UI button components).

2. About Section (The Terminal):
- Create a terminal UI window. Apply `.gradient-border` and `.neon-glow` to the terminal container.
- Use Framer Motion for a typing animation inside the terminal using the var(--font-mono) font:
  `$ whoami > developer`
  `$ cat skills.txt > php, laravel, vue, docker`

3. Projects Section:
- A CSS grid of project cards.
- On hover, the cards should elevate and trigger the `.neon-glow` effect.

4. Animations:
- Add smooth scrolling and stagger the fade-in of each section using Framer Motion as I scroll down the page.

Please scaffold the components now.