export async function getCars() {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cars`);
    return res.json();
  } catch (error) {
    console.error(error);
  }
}
