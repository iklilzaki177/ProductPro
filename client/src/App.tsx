import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { useEffect } from "react";
import { setupAnimationObservers, setupHorizontalScrollBehavior } from "./lib/animationObserver";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize animation observers for scroll animations
  useEffect(() => {
    // Setup animation observers and horizontal scroll behavior when app mounts
    const cleanupAnimations = setupAnimationObservers();
    setupHorizontalScrollBehavior();
    
    // Clean up observers when app unmounts
    return () => {
      if (cleanupAnimations) cleanupAnimations();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
