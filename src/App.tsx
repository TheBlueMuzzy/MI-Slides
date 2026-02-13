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
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isDragging = useRef(false);
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  const categorySlides = slides.filter((s) => s.category === activeCategory);
  const currentSlide = categorySlides[cardIndex];
  const totalInCategory = categorySlides.length;

  const goToCard = useCallback(
    (dir: "left" | "right") => {
      if (isAnimating) return;
      const nextIndex =
        dir === "right"
          ? Math.min(cardIndex + 1, totalInCategory - 1)
          : Math.max(cardIndex - 1, 0);
      if (nextIndex === cardIndex) {
        setSwipeOffset(0);
        return;
      }
      setIsAnimating(true);
      setSwipeOffset(dir === "right" ? -window.innerWidth : window.innerWidth);
      setTimeout(() => {
        setCardIndex(nextIndex);
        setSwipeOffset(0);
        setIsAnimating(false);
      }, 280);
    },
    [cardIndex, totalInCategory, isAnimating]
  );

  // Keyboard nav
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToCard("right");
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToCard("left");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goToCard]);

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    if (isAnimating) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = false;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isAnimating) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;

    if (!isDragging.current) {
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
        isDragging.current = true;
      } else {
        return;
      }
    }

    // Dampen at edges
    if (
      (dx > 0 && cardIndex === 0) ||
      (dx < 0 && cardIndex === totalInCategory - 1)
    ) {
      setSwipeOffset(dx * 0.3);
    } else {
      setSwipeOffset(dx);
    }
  };

  const onTouchEnd = () => {
    if (isAnimating || !isDragging.current) {
      setSwipeOffset(0);
      return;
    }
    const threshold = window.innerWidth * 0.2;
    if (swipeOffset < -threshold) {
      goToCard("right");
    } else if (swipeOffset > threshold) {
      goToCard("left");
    } else {
      setSwipeOffset(0);
    }
    isDragging.current = false;
  };

  const selectCategory = (cat: Category) => {
    setActiveCategory(cat);
    setCardIndex(0);
    setSwipeOffset(0);
    setIsAnimating(false);
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

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">MI Slides</h1>
        <p className="app-subtitle">
          Motivational Interviewing Quick Reference
        </p>
      </header>

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

      <div className="category-description">
        {categoryDescriptions[activeCategory]}
      </div>

      <div
        className="card-area"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="card"
          style={{
            transform: `translateX(${swipeOffset}px)`,
            transition: isAnimating
              ? "transform 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              : isDragging.current
                ? "none"
                : "transform 0.15s ease-out",
          }}
        >
          {currentSlide && <CardContent slide={currentSlide} />}
        </div>
      </div>

      {/* Navigation */}
      <div className="card-nav">
        <button
          className="nav-arrow"
          onClick={() => goToCard("left")}
          disabled={cardIndex === 0}
          aria-label="Previous card"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="progress-dots">
          {categorySlides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === cardIndex ? "active" : ""}`}
              onClick={() => {
                setCardIndex(i);
                setSwipeOffset(0);
              }}
              aria-label={`Go to card ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="nav-arrow"
          onClick={() => goToCard("right")}
          disabled={cardIndex === totalInCategory - 1}
          aria-label="Next card"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="card-counter">
        {cardIndex + 1} / {totalInCategory}
      </div>

      <footer className="app-footer">
        <p>
          Based on Miller & Rollnick's Motivational Interviewing framework
          <br />
          adapted for dietitian nutritionist practice
        </p>
      </footer>
    </div>
  );
}

function CardContent({ slide }: { slide: (typeof slides)[number] }) {
  return (
    <div className="card-content">
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
