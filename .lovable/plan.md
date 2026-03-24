

# Fix: Burger menu lines clipped inside FinancePro mockup on mobile

## Problem
On mobile (390px viewport), the three burger menu lines inside the FinancePro phone mockup's header are being clipped or pushed outside the visible area. The phone frame is only `w-36` (144px) on mobile with `overflow-hidden`, and the 3D rotation (`rotateY: -8`) shifts the right edge inward, cutting off the burger icon.

## Solution in `src/components/hero-visuals/WireframeVisual.tsx`

1. **Reduce header horizontal padding** on mobile: change `px-3` in the status bar and `px-2` in the content area to ensure the header content has enough room
2. **Shrink the burger lines width** on mobile from `w-2.5` (10px) to `w-2` (8px) so they fit comfortably
3. **Add `shrink-0`** to the burger menu container to prevent it from being compressed by flex layout
4. **Reduce the "FINANCEPRO" text** with `truncate` or slightly smaller font to prevent it from pushing the burger off-screen
5. **Ensure the status bar `px-3`** is reduced to `px-2` on smallest sizes to keep all elements within bounds

These are minor spacing tweaks — no structural changes needed.

