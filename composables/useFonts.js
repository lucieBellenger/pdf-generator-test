export function useFonts() {
  const clientContext = ref({
    id: 0,
    fontFamily: `"Protest Riot"`,
    fontUrl:
      "https://fonts.googleapis.com/css2?family=Protest+Riot&display=swap",
  });

  const fontFamily = ref(clientContext.fontFamily);
  const fontUrl = computed(() => clientContext.fontUrl);

  return {
    fontFamily,
    fontUrl,
  };
}
