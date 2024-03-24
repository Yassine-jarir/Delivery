// ------------------------------------
// Global Dictionary
// ------------------------------------

const globalDictionaries = {
  en: () =>
    import("./locales/en/globalTranslation.json").then((r) => r.default),
  fr: () =>
    import("./locales/fr/globalTranslation.json").then((r) => r.default),
  ar: () =>
    import("./locales/ar/globalTranslation.json").then((r) => r.default),
};

export const getGlobalDictionary = (lang) => {
  return globalDictionaries[lang]();
};

// ------------------------------------
// Home Page Dictionary
// ------------------------------------

const homePageDictionaries = {
  en: () =>
    import("./locales/en/homePage/homePageTranslation.json").then(
      (r) => r.default
    ),
  fr: () =>
    import("./locales/fr/homePage/homePageTranslation.json").then(
      (r) => r.default
    ),
  ar: () =>
    import("./locales/ar/homePage/homePageTranslation.json").then(
      (r) => r.default
    ),
};

export const getHomePageDictionary = (lang) => {
  return homePageDictionaries[lang]();
};

// ------------------------------------
// Delivery Page Dictionary
// ------------------------------------

const deliveryDictionaries = {
  en: () =>
    import("./locales/en/servicePage/deliveryPageTranslation.json").then(
      (r) => r.default
    ),
  fr: () =>
    import("./locales/fr/servicePage/deliveryPageTranslation.json").then(
      (r) => r.default
    ),
  ar: () =>
    import("./locales/ar/servicePage/deliveryPageTranslation.json").then(
      (r) => r.default
    ),
};

export const getDeliveryPageDictionary = (lang) => {
  return deliveryDictionaries[lang]();
};

// ------------------------------------
// Call Center Page Dictionary
// ------------------------------------

const callCenterDictionaries = {
  en: () =>
    import("./locales/en/servicePage/callCenterPageTranslation.json").then(
      (r) => r.default
    ),
  fr: () =>
    import("./locales/fr/servicePage/callCenterPageTranslation.json").then(
      (r) => r.default
    ),
  ar: () =>
    import("./locales/ar/servicePage/callCenterPageTranslation.json").then(
      (r) => r.default
    ),
};

export const getCallCenterPageDictionary = (lang) => {
  return callCenterDictionaries[lang]();
};

// ------------------------------------
// Warehouse Page Dictionary
// ------------------------------------

const warehouseDictionaries = {
  en: () =>
    import("./locales/en/servicePage/warehousePageTranslation.json").then(
      (r) => r.default
    ),
  fr: () =>
    import("./locales/fr/servicePage/warehousePageTranslation.json").then(
      (r) => r.default
    ),
  ar: () =>
    import("./locales/ar/servicePage/warehousePageTranslation.json").then(
      (r) => r.default
    ),
};

export const getWarehousePageDictionary = (lang) => {
  return warehouseDictionaries[lang]();
};

// ------------------------------------
// Marketplace Page Dictionary
// ------------------------------------

const marketplaceDictionaries = {
  en: () =>
    import("./locales/en/servicePage/marketplacePageTranslation.json").then(
      (r) => r.default
    ),
  fr: () =>
    import("./locales/fr/servicePage/marketplacePageTranslation.json").then(
      (r) => r.default
    ),
  ar: () =>
    import("./locales/ar/servicePage/marketplacePageTranslation.json").then(
      (r) => r.default
    ),
};

export const getMarketplacePageDictionary = (lang) => {
  return marketplaceDictionaries[lang]();
};
