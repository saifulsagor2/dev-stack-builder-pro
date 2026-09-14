import { useEffect, useState } from "react";
import type { Technology } from "../../types/technology";
import "./Technologies.css";

interface TechnologiesProps {
  stack: Technology[];
  onAddToStack: (technology: Technology) => void;
}

function Technologies({
  stack,
  onAddToStack,
}: TechnologiesProps) {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="technologies">
        <p className="loading">Loading technologies...</p>
      </section>
    );
  }

  return (
    <section className="technologies" id="technologies">
      <div className="technologies-header">
        <h2>Explore Technologies</h2>

        <p>
          Discover the tools and technologies you can use to build
          your next great project.
        </p>
      </div>

      <div className="technology-grid">
        {technologies.map((technology) => (
          <div
            className="technology-card"
            key={technology.id}
          >
            <img
              src={technology.icon}
              alt={technology.name}
            />

            <span className="badge">
              {technology.badge}
            </span>

            <h3>{technology.name}</h3>

            <p>{technology.description}</p>

            <div className="technology-info">
              <span>{technology.category}</span>
              <span>{technology.difficulty}</span>
            </div>

            <div className="technology-bottom">
              <span>⭐ {technology.rating}</span>

              <button
                onClick={() => onAddToStack(technology)}
                disabled={stack.some(
                  (item) => item.id === technology.id
                )}
              >
                {stack.some(
                  (item) => item.id === technology.id
                )
                  ? "✓ Added to Stack"
                  : "Add to Stack"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;