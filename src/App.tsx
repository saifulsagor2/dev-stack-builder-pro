import { useState } from "react";
import type { Technology } from "./types/technology";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Technologies from "./components/Technologies/Technologies";
import YourStack from "./components/YourStack/YourStack";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAddToStack = (technology: Technology) => {
    setStack([...stack, technology]);
  };

  const handleRemove = (id: string) => {
    const remainingTechnologies = stack.filter(
      (technology) => technology.id !== id
    );

    setStack(remainingTechnologies);
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div>
      <Navbar />

      <Hero />

      <div className="main-content">
        <Technologies
          stack={stack}
          onAddToStack={handleAddToStack}
        />

        <YourStack
          stack={stack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </div>
  );
}

export default App;