/**
 * API Configuration
 */
export const API_CONFIG = {
  BASE_URL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://nexafx-backend.onrender.com/api/v1/",
  TIMEOUT: 120000,
  HEADERS: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

/**
 * API Endpoints
 */
export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    CREATE: "/auth/login",
  },


  // Transactions endpoints
  TRANSACTIONS: {
    ALL: "/transactions",
    CREATE: "/transactions",
    DELETE: (id: string) => `/transactions/${id}`,
    GET: (id: string) => `/transactions/${id}`,
    UPDATE: (id: string) => `/transactions/${id}`,
  },
};
