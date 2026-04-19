exports.process = async (data) => {
  // Example intelligent logic
  if (!data.input) {
    throw new Error("Input is required");
  }

  const processed = data.input.toUpperCase();

  return {
    original: data.input,
    processed: processed,
    timestamp: new Date()
  };
};
