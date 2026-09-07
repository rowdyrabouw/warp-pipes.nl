const isActivated = new Promise((resolve) => {
  if (document.prerendering) {
    document.addEventListener("prerenderingchange", resolve, { once: true });
  } else {
    resolve();
  }
});

async function afterActivation() {
  await isActivated;
  // Initialise your analytics, ad services, etc.
}

afterActivation();
