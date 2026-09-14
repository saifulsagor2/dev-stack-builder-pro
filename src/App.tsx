import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import type { Technology } from "./types/technology";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Technologies from "./components/Technologies/Technologies";
import YourStack from "./components/YourStack/YourStack";
import Footer from "./components/Footer/Footer";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );
      return;
    }

    setStack([...stack, technology]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  const handleRemove = (id: string) => {
    const technology = stack.find(
      (technology) => technology.id === id
    );

    const remainingTechnologies = stack.filter(
      (technology) => technology.id !== id
    );

    setStack(remainingTechnologies);

    if (technology) {
      toast.success(
        `${technology.name} removed from your stack!`
      );
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.success(
      "All technologies removed from your stack!"
    );
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

      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;