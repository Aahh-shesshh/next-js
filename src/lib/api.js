export const sendContactForm = async (data) => {
  await fetch("/api/hello", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });
};
