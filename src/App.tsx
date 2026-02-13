import { useState, useRef, useCallback, useEffect } from "react";
import {
  slides,
  categories,
  categoryDescriptions,
  categoryColors,
  type Category,
} from "./data/slides";
import "./App.css";

const APP_VERSION = "1.1.0";

function App() {
  // Global flat index across ALL slides
  const [cardIndex, setCardIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isSnapping, setIsSnapping] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("mi-slides-dark");
    if (saved !== null) return saved === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isDragging = useRef(false);
  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const cardAreaRef = useRef<HTMLDivElement>(null);

  const totalSlides = slides.length;
  const currentSlide = slides[cardIndex];
  const activeCategory = currentSlide.category as Category;

  // Find which index in the current category this slide is
  const categorySlides = slides.filter((s) => s.category === activeCategory);
  const indexInCategory = categorySlides.indexOf(currentSlide);
  const totalInCategory = categorySlides.length;

  // Apply dark mode to document
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
    localStorage.setItem("mi-slides-dark", String(darkMode));
  }, [darkMode]);

  const goToCard = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, totalSlides - 1));
      if (clamped === cardIndex && dragOffset === 0) return;
      setIsSnapping(true);
      setCardIndex(clamped);
      setDragOffset(0);
      setTimeout(() => setIsSnapping(false), 300);
    },
    [cardIndex, totalSlides, dragOffset]
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

  // Touch handlers
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

    if (!isDragging.current) {
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
        isDragging.current = true;
      } else {
        return;
      }
    }

    e.preventDefault();

    // Dampen at global edges
    const atStart = cardIndex === 0 && dx > 0;
    const atEnd = cardIndex === totalSlides - 1 && dx < 0;
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
      setIsSnapping(true);
      setDragOffset(0);
      setTimeout(() => setIsSnapping(false), 300);
    }
    isDragging.current = false;
  };

  // Click a category pill → jump to first slide of that category
  const selectCategory = (cat: Category) => {
    const idx = slides.findIndex((s) => s.category === cat);
    if (idx >= 0) {
      goToCard(idx);
    }
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

  // Carousel transform — one flat track of ALL slides
  const getTrackTransform = () => {
    const cardPct = 100 / totalSlides;
    const pct = -(cardIndex * cardPct);
    if (dragOffset === 0) return `translateX(${pct}%)`;
    return `translateX(calc(${pct}% + ${dragOffset}px))`;
  };

  // Get background color for a slide
  const getCardBg = (category: string) => {
    const colors = categoryColors[category as Category];
    return darkMode ? colors.dark : colors.light;
  };

  // Is this slide the first in its category?
  const isFirstInCategory = (globalIndex: number) => {
    if (globalIndex === 0) return true;
    return slides[globalIndex].category !== slides[globalIndex - 1].category;
  };

  return (
    <div className="app">
      {/* Top bar */}
      <div className="top-bar">
        <div className="top-bar-row">
          <div className="top-bar-spacer" />
          <h1 className="app-title">MI Slides</h1>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode((d) => !d)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
        <nav className="category-nav" ref={categoryScrollRef}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-pill ${cat === activeCategory ? "active" : ""}`}
              style={
                cat === activeCategory
                  ? { background: categoryColors[cat].pill, borderColor: categoryColors[cat].pill }
                  : undefined
              }
              onClick={() => selectCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>

      {/* Card carousel — flat track of ALL slides */}
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
            width: `${totalSlides * 100}%`,
            transform: getTrackTransform(),
            transition:
              isSnapping
                ? "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                : "none",
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className="card"
              style={{ width: `${100 / totalSlides}%` }}
            >
              <div
                className={`card-inner ${i === cardIndex ? "" : "card-inactive"}`}
                style={{ background: getCardBg(slide.category) }}
              >
                <div className="card-scroll">
                  <CardContent
                    slide={slide}
                    description={
                      isFirstInCategory(i)
                        ? categoryDescriptions[slide.category as Category]
                        : undefined
                    }
                    pillColor={categoryColors[slide.category as Category].pill}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bottom-bar">
        <div className="progress-row">
          <div className="progress-dots">
            {categorySlides.map((_, i) => {
              // Find global index of this category slide
              const globalIdx = slides.indexOf(categorySlides[i]);
              return (
                <button
                  key={i}
                  className={`dot ${i === indexInCategory ? "active" : ""}`}
                  onClick={() => goToCard(globalIdx)}
                  aria-label={`Go to card ${i + 1}`}
                />
              );
            })}
          </div>
          <span className="card-counter">
            {indexInCategory + 1}/{totalInCategory}
          </span>
          <span className="version-label">v{APP_VERSION}</span>
        </div>
      </div>
    </div>
  );
}

function CardContent({
  slide,
  description,
  pillColor,
}: {
  slide: (typeof slides)[number];
  description?: string;
  pillColor: string;
}) {
  return (
    <div className="card-content">
      {description && <p className="card-category-desc">{description}</p>}

      <div className="card-category-label" style={{ background: `${pillColor}20`, color: pillColor }}>
        {slide.category}
      </div>
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
