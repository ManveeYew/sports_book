/**
 * Example usage of DebouncedButton component
 *
 * import DebouncedButton from "@/app/components/DebouncedButton";
 *
 * // Basic usage
 * <DebouncedButton onClick={() => console.log("Button clicked!")}>
 *   Click me
 * </DebouncedButton>
 *
 * // With custom debounce delay
 * <DebouncedButton
 *   onClick={() => console.log("Save data")}
 *   debounceDelay={500}
 * >
 *   Save
 * </DebouncedButton>
 *
 * // With loading state
 * <DebouncedButton
 *   onClick={handleSubmit}
 *   isLoading={isSubmitting}
 *   loadingText="Submitting..."
 *   className="bg-blue-500 hover:bg-blue-600"
 * >
 *   Submit Form
 * </DebouncedButton>
 *
 * // With custom styling
 * <DebouncedButton
 *   onClick={handleDelete}
 *   className="bg-red-500 hover:bg-red-600 text-white px-8 py-4"
 *   debounceDelay={1000}
 * >
 *   Delete Item
 * </DebouncedButton>
 *
 * // Disabled state
 * <DebouncedButton
 *   onClick={handleAction}
 *   disabled={!isValid}
 * >
 *   Action Button
 * </DebouncedButton>
 */

export {};
