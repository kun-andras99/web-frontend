'use client';

/**
 * SwipeableTabs
 * ---------------------------------------------------------------------------
 * Nem URL-alapú tab-váltó: a tartalmak state-ben váltanak, nem route-navigációval.
 * Támogatja:
 *  - kattintást / tap-et a fejlécen
 *  - húzást (swipe) egérrel és érintéssel egyaránt (Pointer Events API)
 *  - "rubber-band" effektust a szélső tabok fölött
 *
 * A `tabs` prop-ban átadott `content` bármilyen React node lehet — akár egy
 * meglévő page.tsx default exportjának a renderelt eredménye is.
 */

import {
    useRef,
    useState,
    type ReactNode,
    type PointerEvent as ReactPointerEvent,
} from 'react';

export interface SwipeTab {
  key: string;
  label: string;
  content: ReactNode;
}

interface SwipeableTabsProps {
  tabs: SwipeTab[];
  initialIndex?: number;
  onChange?: (index: number) => void;
  className?: string;
}

// A tab akkor vált, ha a húzás a konténer szélességének ennyi %-át átlépi
const SWIPE_THRESHOLD_RATIO = 0.2;

export default function SwipeableTabs({
  tabs,
  initialIndex = 0,
  onChange,
  className = '',
}: SwipeableTabsProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const widthRef = useRef(1);

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(tabs.length - 1, index));
    setActiveIndex(clamped);
    onChange?.(clamped);
  };

  const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    startXRef.current = e.clientX;
    widthRef.current = trackRef.current?.offsetWidth ?? 1;
    setIsDragging(true);
    // biztosítjuk, hogy a pointer "elhagyása" esetén is kapjunk eseményeket
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    let delta = e.clientX - startXRef.current;

    // a szélső tabokon lassabban engedjük húzni (rubber-band)
    const atStart = activeIndex === 0 && delta > 0;
    const atEnd = activeIndex === tabs.length - 1 && delta < 0;
    if (atStart || atEnd) delta *= 0.35;

    setDragX(delta);
  };

  const endDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const ratio = dragX / widthRef.current;
    if (ratio < -SWIPE_THRESHOLD_RATIO) {
      goTo(activeIndex + 1);
    } else if (ratio > SWIPE_THRESHOLD_RATIO) {
      goTo(activeIndex - 1);
    }
    setDragX(0);
  };

  const dragPercent = (dragX / widthRef.current) * 100;
  const translateX = -activeIndex * 100 + dragPercent;

  return (
    <div className={className}>
      {/* Tab fejléc — kattintással/tap-pel is váltható */}
      <div role="tablist" className="tab-list">
        {tabs.map((tab, i) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            onClick={() => goTo(i)}
            className={`${
              i === activeIndex
                ? 'text-black border-b-2 border-black'
                : 'text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Húzható tartalom */}
      <div
        className="overflow-hidden select-none"
        style={{ touchAction: 'pan-y' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        <div
          ref={trackRef}
          className="flex w-full"
          style={{
            transform: `translateX(${translateX}%)`,
            transition: isDragging
              ? 'none'
              : 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {tabs.map((tab) => (
            <div key={tab.key} className="w-full flex-shrink-0">
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}