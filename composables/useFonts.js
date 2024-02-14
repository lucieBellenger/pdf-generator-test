export function useFonts() {
  const clientContext = {
    id: 0,
    fontFamily: `"Ubuntu", sans-serif`,
    fontUrl:
      "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap",
  };
  const fontFamily = computed(() => clientContext.fontFamily + "important!");
  const fontUrl = computed(() => clientContext.fontUrl);

  return {
    fontFamily,
    fontUrl,
  };
}
