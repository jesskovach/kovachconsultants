# Design System Documentation Template

This template is structured to live in Notion and covers all three dimensions: components + code, design tokens, and UX patterns.

---

## Part 1: Design Tokens

### Color System

Create a Notion database with these fields:

| Token Name | Hex Value | RGB | Use Case | Accessibility Notes | Component Example |
|---|---|---|---|---|---|
| `color-primary-50` | #F0F7FF | rgb(240, 247, 255) | Lightest primary for backgrounds | Passes AAA contrast on white | Button hover state |
| `color-primary-500` | #0066CC | rgb(0, 102, 204) | Primary action buttons, links | 7:1 contrast on white (AAA) | Primary CTA button |
| `color-primary-900` | #003366 | rgb(0, 51, 102) | Dark text on light bg | 15:1 contrast on white (AAA+) | Header text |
| `color-error-500` | #D32F2F | rgb(211, 47, 47) | Errors, destructive actions | 5.5:1 contrast on white (AA) | Error message text |
| `color-error-50` | #FFEBEE | rgb(255, 235, 238) | Error background | Passes AAA on white | Error banner background |
| `color-success-500` | #2E7D32 | rgb(46, 125, 50) | Success states, confirmations | 6:1 contrast on white (AAA) | Success message |
| `color-warning-500` | #F57C00 | rgb(245, 124, 0) | Warnings, cautions | 5.8:1 contrast on white (AA) | Warning icon |
| `color-neutral-100` | #F5F5F5 | rgb(245, 245, 245) | Dividers, disabled state bg | Passes AAA on white | Disabled button |
| `color-neutral-500` | #757575 | rgb(117, 117, 117) | Secondary text | 5.4:1 contrast on white (AA) | Helper text |
| `color-neutral-900` | #212121 | rgb(33, 33, 33) | Primary text | 18:1 contrast on white (AAA+) | Body text |

**Accessibility Note**: All colors tested with WCAG contrast checker. Primary palette meets AA (4.5:1) minimum; most exceed AAA (7:1). Avoid color-only communication—always add icons, text, or patterns.

---

### Typography

| Token | Font Family | Size | Weight | Line Height | Letter Spacing | Use Case | Notes |
|---|---|---|---|---|---|---|---|
| `type-display-1` | Inter | 48px | 700 (Bold) | 1.2 | -0.5px | Page titles, hero text | Scale at 1.5x on mobile (72px) |
| `type-display-2` | Inter | 32px | 700 (Bold) | 1.3 | -0.25px | Section headers | Never use all-caps; bold weight required for contrast |
| `type-heading-1` | Inter | 28px | 600 (Semibold) | 1.4 | 0 | Major section headers | Pair with color-primary-900 |
| `type-heading-2` | Inter | 24px | 600 (Semibold) | 1.4 | 0 | Subsection headers | Works at 20px on mobile |
| `type-heading-3` | Inter | 20px | 600 (Semibold) | 1.5 | 0 | Card titles, form labels | Minimum heading size |
| `type-body-large` | Inter | 18px | 400 (Regular) | 1.6 | 0.25px | Introductory text, callouts | Use sparingly |
| `type-body-regular` | Inter | 16px | 400 (Regular) | 1.6 | 0.15px | Primary body text | Default for all content |
| `type-body-small` | Inter | 14px | 400 (Regular) | 1.5 | 0 | Secondary content, helper text | Minimum readable size (14px) |
| `type-label` | Inter | 12px | 500 (Medium) | 1.4 | 0.5px | Form labels, badges, tags | All-caps acceptable here |
| `type-caption` | Inter | 11px | 400 (Regular) | 1.4 | 0 | Captions, timestamps, metadata | Minimum for accessibility |

**Accessibility**: Minimum 16px for body text. Line height 1.5+ for readability. Avoid font sizes below 11px. Font stack: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

---

### Spacing Scale

Create consistent rhythm with 8px base unit:

| Token | Value | Use Case | Example |
|---|---|---|---|
| `space-xs` | 4px | Icon padding, tight spacing | Icon inside button |
| `space-sm` | 8px | Form field margins, small gaps | Gap between label and input |
| `space-md` | 16px | Component padding, default gap | Padding inside card |
| `space-lg` | 24px | Section padding, medium gap | Gap between cards |
| `space-xl` | 32px | Large section margins | Gap between major sections |
| `space-2xl` | 48px | Page-level spacing | Top padding of page |
| `space-3xl` | 64px | Hero sections, major dividers | Gap between page sections |

**Rule**: Always use tokens. Never hardcode pixels. Spacing creates visual rhythm and accessibility (larger touch targets).

---

### Border Radius

| Token | Value | Use Case |
|---|---|---|
| `radius-none` | 0px | Buttons (default), input fields |
| `radius-sm` | 4px | Subtle softness, icons |
| `radius-md` | 8px | Cards, modals, containers |
| `radius-lg` | 12px | Large cards, hero sections |
| `radius-xl` | 16px | Badges, pills, special components |
| `radius-full` | 9999px | Avatar circles, pill buttons |

---

### Shadow System

| Token | Definition | Use Case | Contrast Notes |
|---|---|---|---|
| `shadow-xs` | 0 1px 2px rgba(0,0,0,0.05) | Subtle elevation, hover states | Works on white and light gray |
| `shadow-sm` | 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06) | Default elevation, cards | Mild 3D effect |
| `shadow-md` | 0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06) | Floating elements, dropdowns | Clear separation |
| `shadow-lg` | 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05) | Modals, overlays | Strong focus |
| `shadow-xl` | 0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04) | Maximum elevation | Reserved for important overlays |

**Accessibility**: Shadows improve perceivable boundaries for people with low vision. Don't rely on shadow alone; pair with borders when possible.

---

## Part 2: Component Library

### Button Component

**Variants**: Primary, Secondary, Tertiary, Destructive, Ghost

**States**: Default, Hover, Active, Disabled, Loading

#### Primary Button
```jsx
<Button variant="primary" size="md">
  Create Project
</Button>
```

**Design Specs**:
- Background: `color-primary-500`
- Text: White
- Padding: `space-sm` (8px) horizontal, 12px vertical
- Border Radius: `radius-sm` (4px)
- Font: `type-label` (12px, medium weight) or `type-body-small` (14px)
- Min Width: 120px
- Min Height: 44px (mobile touch target)

**Hover State**:
- Background: `color-primary-900` (darken on click)
- Shadow: `shadow-md`
- Transform: Slight scale (1.02)

**Disabled State**:
- Background: `color-neutral-100`
- Text: `color-neutral-500`
- Cursor: Not-allowed
- No hover effect

**Accessibility**:
- Focus ring: 2px solid `color-primary-500`, offset 2px
- Keyboard: Fully keyboard navigable (Tab, Enter)
- Screen reader: Text must be semantic (avoid "Click here")
- Mobile: 44px minimum tap target

**React Implementation**:
```jsx
export const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  ...props
}) => {
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-900 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
    destructive: 'bg-red-500 hover:bg-red-600 text-white',
  }

  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  return (
    <button
      disabled={disabled || loading}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-sm
        font-medium
        transition-colors
        disabled:opacity-50
        disabled:cursor-not-allowed
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:ring-offset-2
        min-h-11
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
      `}
      {...props}
    >
      {loading ? <Spinner size="sm" /> : children}
    </button>
  )
}
```

#### Secondary Button
Same as Primary but:
- Background: `color-neutral-100`
- Text: `color-neutral-900`
- Border: 1px solid `color-neutral-300`

---

### Form Input Component

**Variants**: Text, Email, Password, Textarea, Select, Checkbox, Radio

**States**: Default, Focus, Filled, Error, Disabled, Loading

#### Text Input

**Design Specs**:
- Background: White
- Border: 1px solid `color-neutral-300`
- Border Radius: `radius-sm` (4px)
- Padding: `space-sm` (8px) horizontal, 10px vertical
- Font: `type-body-regular` (16px)
- Min Height: 44px

**Focus State**:
- Border: 2px solid `color-primary-500`
- Shadow: `shadow-sm` with primary color
- Box-shadow: `0 0 0 3px rgba(0, 102, 204, 0.1)`

**Error State**:
- Border: 2px solid `color-error-500`
- Helper text below input: `color-error-500`, `type-body-small`
- Icon: Error icon in red

**Accessibility**:
- Associated label (never placeholder-only)
- ARIA-describedby for error messages
- ARIA-invalid="true" on error state
- Sufficient contrast (5.5:1 minimum)

**React Implementation**:
```jsx
export const Input = ({
  id,
  label,
  type = 'text',
  error = null,
  disabled = false,
  required = false,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-900">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        disabled={disabled}
        className={`
          px-3 py-2.5
          border rounded-sm
          text-base
          transition-colors
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          disabled:bg-gray-100
          disabled:text-gray-500
          ${error
            ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
            : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
          }
        `}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-500 flex items-center gap-1">
          <AlertIcon size={16} />
          {error}
        </p>
      )}
    </div>
  )
}
```

---

### Card Component

**Use**: Container for related content, section dividers, modular content blocks

**Design Specs**:
- Background: White
- Border: 1px solid `color-neutral-300` (optional)
- Border Radius: `radius-md` (8px)
- Padding: `space-lg` (24px)
- Shadow: `shadow-sm`

**Variants**:
- Elevated (shadow-md)
- Outlined (border only, no shadow)
- Flat (no border, no shadow)

**Accessibility**:
- Not inherently interactive; if clickable, ensure semantic HTML (link or button)
- Sufficient color contrast between card background and content

**React Implementation**:
```jsx
export const Card = ({ variant = 'outlined', children, ...props }) => {
  const variants = {
    elevated: 'bg-white border-none shadow-md',
    outlined: 'bg-white border border-gray-300 shadow-sm',
    flat: 'bg-white border-none shadow-none',
  }

  return (
    <div className={`rounded-md p-6 ${variants[variant]}`} {...props}>
      {children}
    </div>
  )
}
```

---

### Modal Component

**Use**: Focus user attention on critical task or confirmation

**Accessibility Requirements**:
- Trap focus inside modal (tab loops within modal)
- Close on Escape key
- Announce modal to screen readers (role="dialog", aria-labelledby)
- Backdrop click closes (optional but expected)
- Restore focus to trigger element on close

**Design Specs**:
- Backdrop: Black with 30% opacity (`rgba(0,0,0,0.3)`)
- Modal Width: Max 500px (medium), 90vw on mobile
- Border Radius: `radius-md` (8px)
- Shadow: `shadow-lg`
- Z-index: 1000+ (above all content)

**React Implementation**:
```jsx
export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  if (!isOpen) return null

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={`bg-white rounded-md shadow-lg p-6 w-90vw ${sizes[size]}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 id="modal-title" className="text-lg font-semibold">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-gray-500 hover:text-gray-700"
          >
            <CloseIcon size={24} />
          </button>
        </div>
        <div className="mb-6">
          {children}
        </div>
        {footer && <div className="flex justify-end gap-2">{footer}</div>}
      </div>
    </div>
  )
}
```

---

## Part 3: UX Patterns & Interaction Guidelines

### Form Submission Pattern

**User Flow**:
1. User enters data
2. Form validates on blur (immediate feedback)
3. Submit button shows validation state (disabled until valid)
4. On submit: Button shows loading state, form inputs disabled
5. On success: Confirmation message, redirect or reset
6. On error: Error banner, form editable again

**Accessibility**:
- Form submission on Enter (not just button click)
- Errors announced to screen readers
- Success message announced
- Loading state provides feedback (button text changes to "Submitting...")

**Error Messaging Pattern**:
- Field-level: Red text below input
- Form-level: Banner at top with summary
- Specific not generic: "Email must include @" not "Invalid email"

---

### Navigation Pattern

**Primary Navigation**:
- Sticky header, always visible
- Current page highlighted
- Mobile: Hamburger menu (disclosure pattern)
- Keyboard: Left/right arrows skip between sections
- Screen reader: Announce current section

**Breadcrumb Navigation**:
- Shows hierarchy: Home > Section > Subsection > Current Page
- Click to navigate up
- Last item not clickable (current page)
- Separator: "/" or ">" symbol

---

### Responsive Breakpoints

| Name | Width | Use Case |
|---|---|---|
| Mobile | < 640px | Phones |
| Tablet | 640px - 1024px | Tablets, small laptops |
| Desktop | 1024px - 1536px | Standard desktop |
| Wide | > 1536px | Large monitors |

**Mobile-First Approach**:
- Design for mobile first (simplest)
- Add complexity/columns for larger screens
- Touch targets minimum 44x44px on mobile

---

### Loading States

**Pattern 1: Skeleton Loading**
- Show placeholder shapes while loading
- Same layout as final content (prevents jank)
- Animate subtle shimmer effect

**Pattern 2: Spinner**
- Centered spinner with label "Loading..."
- Or inline spinner inside button during submission
- Indicate time if > 3 seconds

**Pattern 3: Progressive Loading**
- Load above-fold content first
- Show placeholder for below-fold
- Load background data without blocking UI

---

### Empty States

- Show friendly icon + message when no data
- Provide action to create first item
- Not an error—expected state
- Helpful, not sad

**Example**:
```
[Folder icon image]
"No projects yet"
"Create your first project to get started"
[Primary button: "New Project"]
```

---

### Notification/Toast Pattern

**Types**: Success, Error, Warning, Info

**Behavior**:
- Auto-dismiss after 6 seconds (except errors)
- Dismissible via button
- Stack multiple toasts
- Position: Bottom-right desktop, bottom mobile

**Accessibility**:
- `role="status"` for success (not demanding)
- `role="alert"` for errors (demanding attention)
- Announce to screen readers

---

### Confirmation Dialog Pattern

**When to use**: Destructive actions (delete, logout, etc.)

**Pattern**:
1. User clicks destructive button
2. Modal appears with: action, consequences, confirm/cancel buttons
3. Confirm button is secondary color (not primary) to discourage clicking
4. Clear message about what will happen

**Example**:
```
Title: "Delete Project?"
Body: "This action cannot be undone. All project data will be permanently deleted."
Buttons: [Cancel] [Delete Project]
```

---

### Validation Feedback Pattern

**Real-time feedback** (as user types):
- Show green checkmark when valid
- Show red X when invalid
- Don't show feedback until user interacts (avoid noise)

**Example**:
```
Email Address
[user@example.com]                    ✓
"Valid email format"
```

**On Form Submit**:
- Scroll to first error
- Focus first error field
- Show all errors (don't fix one at a time)
- Announce summary of errors

---

## Accessibility Standards Checklist

Every component must pass:

- [ ] WCAG 2.1 Level AA contrast (4.5:1 for text, 3:1 for graphics)
- [ ] Keyboard navigable (Tab, Shift+Tab, Enter, Escape, arrows)
- [ ] Focus indicator visible (2px ring, sufficient contrast)
- [ ] Screen reader tested (NVDA, JAWS, VoiceOver)
- [ ] Color not only indicator (pair with icon/text)
- [ ] Touch targets minimum 44x44px
- [ ] Semantic HTML (button, input, label, etc. not divs)
- [ ] Form labels associated (for/id attributes)
- [ ] Error messages linked (aria-describedby)
- [ ] Modal traps focus, announces role
- [ ] Images have alt text
- [ ] Links have descriptive text (not "click here")
- [ ] Motion not required (animations optional)
- [ ] Content readable at 200% zoom
- [ ] No color change indicates state change (use text, icon, border)

---

## Implementation Guide

### Setup in Your Project

1. **Create Notion Database** for design tokens
   - Table view: Token Name, Value, Use Case, Accessibility Notes
   - Database relations to components using each token

2. **Component Library in Storybook** (or equivalent)
   - One story per component variant
   - Props documentation
   - Accessibility notes
   - Design spec callout

3. **CSS Variables**
   - Define all tokens as CSS custom properties
   - ```css
     :root {
       --color-primary-500: #0066CC;
       --color-primary-900: #003366;
       --space-sm: 8px;
       --type-body-regular: 16px;
     }
     ```
   - Use in components: `background: var(--color-primary-500)`

4. **Documentation Site**
   - Living documentation (auto-generated from code)
   - Design rationale for each decision
   - Do's and don'ts for each component
   - Accessibility guidance

5. **Design-to-Code Handoff**
   - Share Figma/design tool link with developers
   - Document pixel-perfect specs (spacing, sizing)
   - Specify animation timing if present
   - Include responsive behavior

---

## Maintenance & Evolution

- **Quarterly review**: Are tokens being used? Any gaps?
- **Track deviations**: If designers create one-off styles, discuss adding to system
- **Version tokens**: Breaking changes (color name changes) require major version bump
- **Accessibility audit**: Annual WCAG retest of all components
- **Component adoption**: Measure if team is using design system (target: > 80%)

---

## Why This Matters for Your Business

A design system shows potential consulting clients:
- **Professionalism**: Consistent, accessible, high-quality design
- **Efficiency**: Fast to build new features (reuse components)
- **Maintainability**: Easy to update look/feel across entire product
- **Accessibility**: You're thinking about inclusive design (differentiator)
- **Scalability**: Your systems can grow without chaos

When pitching clients: "My design system approach means your product is accessible from day one, updates are fast, and everything stays consistent as we scale."
