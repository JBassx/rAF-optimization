class AnimationManager {
  private tasks: Set<FrameRequestCallback> = new Set();
  private fps: number = 60; // Target FPS
  private lastFrameTime: number = performance.now();
  private animationId: number | null = null; // Store the animation frame ID

  private run = (currentTime: number) => {
    const deltaTime = currentTime - this.lastFrameTime;

    // Ensure the tasks only run if enough time has passed to meet the target FPS
    if (deltaTime > 1000 / this.fps) {
      this.tasks.forEach((task) => task(currentTime));
      this.lastFrameTime = currentTime;
    }

    this.animationId = requestAnimationFrame(this.run);
  };

  public registerTask(task: FrameRequestCallback) {
    this.tasks.add(task);
    if (this.tasks.size === 1) {
      this.animationId = requestAnimationFrame(this.run); // Start the loop if this is the first task
    }
  }

  public unregisterTask(task: FrameRequestCallback) {
    this.tasks.delete(task);
    if (this.tasks.size === 0 && this.animationId !== null) {
      cancelAnimationFrame(this.animationId); // Stop the loop if no tasks remain
      this.animationId = null; // Reset the ID
    }
  }
}

export const animationManager = new AnimationManager();
