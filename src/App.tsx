import { useState, useRef, useCallback, useEffect } from "react";
import {
  slides,
  categories,
  categoryDescriptions,
  type Category,
} from "./data/slides";
import "./App.css";

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);
  const [cardIndex, setCardIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isSnapping, setIsSnapping] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isDragging = useRef(false);
  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const cardAreaRef = useRef<HTMLDivElement>(null);

  const categorySlides = slides.filter((s) => s.category === activeCategory);
  const totalInCategory = categorySlides.length;

  const goToCard = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, totalInCategory - 1));
      if (clamped === cardIndex && dragOffset === 0) return;
      setIsSnapping(true);
      setCardIndex(clamped);
      setDragOffset(0);
      setTimeout(() => setIsSnapping(false), 300);
    },
    [cardIndex, totalInCategory, dragOffset]
  );

  // Keyboard nav
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToCard(cardIndex + 1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToCard(cardIndex - 1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goToCard, cardIndex]);

  // Touch handlers on the card area
  const onTouchStart = (e: React.TouchEvent) => {
    if (isSnapping) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = false;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isSnapping) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;

    // Decide drag direction on first significant move
    if (!isDragging.current) {
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
        isDragging.current = true;
      } else {
        return;
      }
    }

    // Prevent vertical scroll while swiping horizontally
    e.preventDefault();

    // Dampen at edges
    const atStart = cardIndex === 0 && dx > 0;
    const atEnd = cardIndex === totalInCategory - 1 && dx < 0;
    setDragOffset(atStart || atEnd ? dx * 0.25 : dx);
  };

  const onTouchEnd = () => {
    if (isSnapping || !isDragging.current) {
      if (!isDragging.current) setDragOffset(0);
      return;
    }

    const width = cardAreaRef.current?.offsetWidth || window.innerWidth;
    const threshold = width * 0.2;

    if (dragOffset < -threshold) {
      goToCard(cardIndex + 1);
    } else if (dragOffset > threshold) {
      goToCard(cardIndex - 1);
    } else {
      // Snap back
      setIsSnapping(true);
      setDragOffset(0);
      setTimeout(() => setIsSnapping(false), 300);
    }
    isDragging.current = false;
  };

  const selectCategory = (cat: Category) => {
    setActiveCategory(cat);
    setCardIndex(0);
    setDragOffset(0);
    setIsSnapping(false);
  };

  // Auto-scroll active category pill into view
  useEffect(() => {
    const container = categoryScrollRef.current;
    if (!container) return;
    const activeBtn = container.querySelector(
      ".category-pill.active"
    ) as HTMLElement;
    if (activeBtn) {
      const containerRect = container.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      const scrollLeft =
        btnRect.left -
        containerRect.left -
        containerRect.width / 2 +
        btnRect.width / 2 +
        container.scrollLeft;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeCategory]);

  // Compute carousel transform
  // Each card is (100 / totalInCategory)% of the track
  const getTrackTransform = () => {
    const cardPct = 100 / totalInCategory;
    const pct = -(cardIndex * cardPct);
    if (dragOffset === 0) return `translateX(${pct}%)`;
    return `translateX(calc(${pct}% + ${dragOffset}px))`;
  };

  return (
    <div className="app">
      {/* ── Top section ── */}
      <div className="top-bar">
        <h1 className="app-title">MI Slides</h1>
        <nav className="category-nav" ref={categoryScrollRef}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-pill ${cat === activeCategory ? "active" : ""}`}
              onClick={() => selectCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>

      {/* ── Card carousel ── */}
      <div
        className="card-viewport"
        ref={cardAreaRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="card-track"
          style={{
            width: `${totalInCategory * 100}%`,
            transform: getTrackTransform(),
            transition:
              isSnapping
                ? "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                : "none",
          }}
        >
          {categorySlides.map((slide, i) => (
            <div
              key={slide.id}
              className="card"
              style={{ width: `${100 / totalInCategory}%` }}
            >
              <div className={`card-inner ${i === cardIndex ? "" : "card-inactive"}`}>
                <div className="card-scroll">
                  <CardContent
                    slide={slide}
                    description={
                      i === 0 ? categoryDescriptions[activeCategory] : undefined
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar (always pinned) ── */}
      <div className="bottom-bar">
        <div className="progress-row">
          <div className="progress-dots">
            {categorySlides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === cardIndex ? "active" : ""}`}
                onClick={() => goToCard(i)}
                aria-label={`Go to card ${i + 1}`}
              />
            ))}
          </div>
          <span className="card-counter">
            {cardIndex + 1}/{totalInCategory}
          </span>
        </div>
      </div>
    </div>
  );
}

function CardContent({
  slide,
  description,
}: {
  slide: (typeof slides)[number];
  description?: string;
}) {
  return (
    <div className="card-content">
      {description && <p className="card-category-desc">{description}</p>}

      <div className="card-category-label">{slide.category}</div>
      <h2 className="card-title">{slide.name}</h2>

      <div className="card-section">
        <p className="card-explanation">{slide.explanation}</p>
      </div>

      <div className="card-section">
        <h3 className="card-section-title">When to Use</h3>
        <p className="card-when-to-use">{slide.whenToUse}</p>
      </div>

      <div className="card-section card-section-example">
        <h3 className="card-section-title">Example</h3>
        <p className="card-example">{slide.example}</p>
      </div>
    </div>
  );
}

export default App;
